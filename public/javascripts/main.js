console.log('main.js is working')

// let delItem = () => {
//     let id = this.parentNode.getAttribute('data-id');
//     axios.delete("http://localhost:3000/" + id);
//     this.parentNode.parentNode.removeChild(this.parentNode);
// };
// let addDel = () => {
//     let delbuttons = document.querySelectorAll('.delete');
//     // let delbuttons = document.getElementsByClassName('delete');
//     // console.log(delbuttons);
//     for (let i = 0; i < delbuttons.length; i++) {
//         delbuttons[i].addEventListener('click', delItem);
//     };
// };
// addDel();
$('.edit').on('click', function() {
    $(this).prev().focus();
});
$('.input_item').on('change', () => {
    let id = parseInt($(this).parent().attr('data-id'))
    let val = $(this).val();
    axios.patch("https://slanguage2.herokuapp.com/words/" + id, {
        val: val,
        id: id
    }).catch((err) => {
        return next(err);
    });
});
// $('.destroy').on('click', () => {
//     let id = $(this).parent().attr('data-id')
//     axios.delete("http://localhost:3000/" + words + "/" + id)
//     $(this).parent().remove();
// });
const destroy = document.querySelector('.destroy');
destroy.addEventListener('click', () => {
    destroy.setAttribute('class', 'clicked');
    destroy.parentNode.innerHTML = '';
});
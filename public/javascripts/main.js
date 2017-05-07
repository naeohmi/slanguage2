console.log('main.js is working')

$('.edit').on('click', () => {
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
const destroy = document.querySelectorAll('.destroy');
destroy.forEach((el, index) => {
    el.addEventListener('click', () => {
        let id = el.getAttribute('id');
        el.parentNode.removeChild(el.parentNode);
        axios.delete("https://slanguage2.herokuapp.com/words/" + id)
    })
});
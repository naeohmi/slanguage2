$('.edit').on('click', () => {
    $(this).prev().focus();
});

// $('.destroy').on('click', () => {
//     let id = $(this).parent().attr('data-id')
//     axios.delete("https://slanguage2.herokuapp.com/words/" + id)
//     $(this).parent().remove();
//     // location.reload();
// });

$('.input_item').on('change', () => {
    let id = parseInt($(this).parent().attr('data-id'))
    let val = $(this).val();

    axios.patch("https://slanguage2.herokuapp.com/words/" + id, {
        post: val,
        id: id
    }).catch((err) => {
        return next(err);
    });
    // location.reload();
});


const destroy = document.querySelector('.destroy');
destroy.addEventListener('click', () => {
        destroy.setAttribute('class', 'clicked');
        destroy.parentNode.innerHTML = '';


        // const destroy = document.querySelectorAll('.destroy');
        // destroy.forEach((el, index) => {
        // el.addEventListener('click', () => {
        // let id = el.getAttribute('id');
        // el.parentNode.removeChild(el.parentNode);
        axios.delete("https://slanguage2.herokuapp.com/words/" + id)
    })
    // });
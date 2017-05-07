console.log('main.js is working')

let delItem = () => {
    let id = this.parentNode.getAttribute('data-id');
    axios.delete("http://localhost:3000/" + id);
    this.parentNode.parentNode.removeChild(this.parentNode);
};

let addDel = () => {
    let delbuttons = document.querySelectorAll('.delete');
    // let delbuttons = document.getElementsByClassName('delete');
    // console.log(delbuttons);
    for (let i = 0; i < delbuttons.length; i++) {
        delbuttons[i].addEventListener('click', delItem);
    };
};
addDel();

$('.edit').on('click', function() {
    $(this).prev().removeAttr('readonly')
    $(this).prev().focus();
});

$('.input_item').on('change', function() {
    let id = parseInt($(this).parent().attr('data-id'))
    let val = $(this).val();
    $(this).attr('readonly', true)
    axios.patch("http://localhost:3000/" + id, {
        val: val,
        id: id
    }).catch(function(err) {
        return next(err);
    });
});
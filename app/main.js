//слайдер 
$(document).ready(function() {
    var countitem = 0;

    $('.list-portfel li').each(function(index, element) {
        ++countitem;
    });
    $('.list-portfel').css('width', 740 * countitem);


    $('#next').click(function() {
        var sl = $('#portfel').scrollLeft();
        var newsl = Number(sl) + Number(740);
        $('#portfel').animate({
            scrollLeft: newsl
        }, 'slow');
    });
    $('#prev').click(function() {
        var sl = $('#portfel').scrollLeft();
        var newsl = sl - 740;
        $('#portfel').animate({
            scrollLeft: newsl
        }, 'slow');
    });

    //валидация формы плагин 

    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                minlength: 8
            },

            comments: {
                required: true,
                minlength: 10

            },
        },
        messages: {
            name: {
                required: 'Введите имя:',
                minlength: '> 3-х букв'
            },
            phone: {
                required: 'Введите телефон:',
                minlength: '> 8-ми цифр'
            },

            comments: {
                required: 'Оставьте комментарий!',
                minlength: 'Напишите больше'

            },
        },

        success: function(label) {

            label.text('Верно!').addClass('valid');

        },


    });




});

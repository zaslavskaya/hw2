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
         return false;

    });
    $('#prev').click(function() {
       // event.preventDefault();
        var sl = $('#portfel').scrollLeft();
        var newsl = sl - 740;
        $('#portfel').animate({
            scrollLeft: newsl
        }, 'slow');
         return false;
      
  
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

   $('.formblock__inputs-button-clean').click(function() {
              //$('#comments-error').removeAttr('id');
              $('label').remove('#name-error');
               $('label').remove('#phone-error');
               $('label').remove('#comments-error');


             // $('comments-error::after').remove;
          
        });



    //$('.formblock__inputs-button-clean').onClick({   
    //  var resettooltip = $('.formblock__inputs').removeClass('error');
      // }
                    //var resetPicture = $('#watermark__src-logo').attr('src' , 'img/watermark.png');
              
//);


});

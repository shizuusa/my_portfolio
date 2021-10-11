//Contact
$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});



$(function(){

    new WOW().init();
    
    let $form = $('#js-form')
    $form.submit(function(e) { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            $form.slideUp()
            $('#js-success').slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp()
            $('#js-error').slideDown()
          }
        } 
      });
      return false; 
    }); 
    
    //formの入力確認
    let $submit = $('#js-submit')
    $('#js-form input ,#js-form textarea').on('change',function(){
      if(
        $('#your-name' ).val() !=="" &&
         $('#your-email' ).val() !=="" &&
         $('#your-message' ).val() !=="" 
    
      ){
        //全て入力された時
        $submit.prop('disabled',false)
        $submit.addClass('is-active')
      }else{
        //全て入力されていない時
        $submit.prop('disabled',true)
        $submit.removeClass('is-active')
      }
    });
    })
    
    
    
    




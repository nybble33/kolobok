/*
 *
 * Javascript by Nybble (admin@nybble.net)
 *
 */

$(document).ready(function(){
    $('#b_login').bind('click', function(event){
        event.preventDefault();
       $('#response').html('');
        $.ajax({
            url: '/login',
            type: 'POST',
            success: function(data){
                location.href('/wellcome');
            },
            error: function(data){
                $('#response').html('Incorrect login or password');
            }
        });
    });
})
$(document).ready(function() {

    // Отправка email (Просто визуал)

    $("#emailAddress").keyup(function() {
    if (!$(this).val()) {
        $("#emailSubmit").addClass('btn-inactive');
        $('a').click(function(event){
            event.preventDefault();
        });
    } else {
        $("#emailSubmit").removeClass('btn-inactive');
        $('#emailSubmit').click(function(){
            $(".password-subtitle").addClass('block-inactive');
            $(".reset_password-form").addClass('block-inactive');
            $(".reset_password-sent").removeClass('block-inactive');
        });
    }
    });

    // Показать, скрыть пароль

    $('body').on('click', '.password-control', function(){
        if ($('.new__password input').attr('type') == 'password'){
            $(this).addClass('view');
            $('.new__password input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.new__password input').attr('type', 'password');
        }
        return false;
    });

    // Проверка на правильность пароля
    $("#newPasswordRepeat").keyup(function() {
        let password_input1 = $('#newPassword').val();
        let password_input2 = $(this).val();
        if (password_input1 != password_input2) {
            $(".error-password").html("Ваши пароли не совпадают. Попробуйте снова");
            $('#newPasswordRepeat').addClass('error-password-input');
            $(".reset__password-btn a").addClass('btn-inactive');
        } else {
            $(".reset__password-btn a").removeClass('btn-inactive');
            $('#newPasswordRepeat').removeClass('error-password-input');
            $(".error-password").html("");
            $('#passwordSubmit').click(function(){
                $(".new_password-form").addClass('block-inactive');
                $(".reset_password-sent").addClass('block-flex');
            });
        }
    });

    // Показать опции 
    $('.select-block .select').click(function(){
        $('.select-options').toggleClass('hide');
    });
})
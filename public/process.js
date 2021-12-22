$(document).ready(function(){

    $('#btnDangKy').click(function(){
        $.post("/dang-ky", {
            Email: $('#txtEmail').val(),
            HoTen: $('#txtHoTen').val(),
            SoDT:  $('#txtSoDT').val()
        }, function(data){
            console.log(data);
        });
    });

});
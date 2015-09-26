/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function (){
    $("#btnIniciarSesion").click(function (){
        var user = $("#user").val();
        var pass = $("#pass").val();
        $.ajax({
            method: "POST",
            url: "php/funciones.php",
            data: {
                datos:{
                    tipo:"login",
                    user: user,
                    pass: pass
                }
            }
        }).done(function(msg) {
            if(msg == 'null'){
                alert("Usuario o contraseña incorrectas");
            }else{
                window.location="index.html";
            }
        });
    });
});
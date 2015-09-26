/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function (){
    $.ajax({
        method: "POST",
        url: "php/funciones.php",
        data: {
            datos:{
                tipo:"loginConsult"
            }
        }
    }).done(function(msg) {
        var obj = JSON.parse(msg);
        if(msg == "null"){
            $(".liIniciarSesion").append('<a href="login.html">Iniciar Sesion</a>');
        }else{
            $(".liIniciarSesion").append(obj[0][1]+' |<button type="button" class="btn btn-link btnStyle btnCerrarSesion">Cerrar Sesión</button>');
            $(".btnCerrarSesion").off('click');
            $(".btnCerrarSesion").click(function (){
                $.ajax({
                    method: "POST",
                    url: "php/funciones.php",
                    data: {
                        datos:{
                            tipo:"cerrarSession"
                        }
                    }
                }).done(function() {
                    window.location="index.html";
                });
            });
        }
    });
});
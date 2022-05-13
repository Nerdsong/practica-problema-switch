const USUARIO_1 = "nelson";
const USUARIO_2 = "maria";
const CONTRASENIA_1 = 1234
const CONTRASENIA_2 = 1111

let usuarioIngresado = "usuario ingresado en la pag"
let contraseniaIngresada = "contraseña ingresada en la pag"

function seleccion(){

    document.write("Excelente")
}


function verificacion(){
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;

    if ((usuarioIngresado == USUARIO_1 || usuarioIngresado == USUARIO_2) && (contraseniaIngresada == CONTRASENIA_1 || contraseniaIngresada == CONTRASENIA_2 )){
        window.open(src= "segundapag.html")
        document.querySelector("#mensaje_resultado").innerHTML=`
    <h4> ¡Bienvenido! </h4>`
    }else {
    document.querySelector("#mensaje_resultado").innerHTML=`
    <h4> Clave o usuario incorrectos :( </h4>`
    }
}
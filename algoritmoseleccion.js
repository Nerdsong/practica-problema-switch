
const SELECCION_NIVEL_1 = 1;
const SELECCION_NIVEL_2 = 2;
const SELECCION_NIVEL_3 = 3;
const SELECCION_NIVEL_4 = 4;

const SUSCRIPCION_NIVEL_1_MESES = 1;
const SUSCRIPCION_NIVEL_2_MESES = 3;
const SUSCRIPCION_NIVEL_3_MESES = 6;
const SUSCRIPCION_NIVEL_4_MESES = 12;

const CANT_DISPOSITIVOS_NIVEL_1 = 1;
const CANT_DISPOSITIVOS_NIVEL_2 = 2;
const CANT_DISPOSITIVOS_NIVEL_3 = 4;
const CANT_DISPOSITIVOS_NIVEL_4 = 6;

let nivelSuscripcionElegida = "nivel elegido por el usuario";

function seleccion(id){
    switch (Number(id)){
    case SELECCION_NIVEL_1:
        document.querySelector("#seleccion_plan").innerHTML=`
            Tu suscripción dura ${SUSCRIPCION_NIVEL_1_MESES} mes y podés usarla en ${CANT_DISPOSITIVOS_NIVEL_1} dispositivo 
            `
        break    
    case SELECCION_NIVEL_2:
        document.querySelector("#seleccion_plan").innerHTML=`
            Tu suscripción dura ${SUSCRIPCION_NIVEL_2_MESES} meses y podés usarla en ${CANT_DISPOSITIVOS_NIVEL_2} dispositivos
            `
        break    
    case SELECCION_NIVEL_3:
        document.querySelector("#seleccion_plan").innerHTML=`
            Tu suscripción dura ${SUSCRIPCION_NIVEL_3_MESES} meses y podés usarla en ${CANT_DISPOSITIVOS_NIVEL_3} dispositivos
            `
        break    
    case SELECCION_NIVEL_4:
        document.querySelector("#seleccion_plan").innerHTML=`
        Tu suscripción dura ${SUSCRIPCION_NIVEL_4_MESES} meses y podés usarla en ${CANT_DISPOSITIVOS_NIVEL_4} dispositivos
        `
        break
    }

}
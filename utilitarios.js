function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    }
    
    function recuperarInt(idComponente){
        let valorCaja=recuperarTexto(idComponente);
        let valorEntero=parseInt(valorCaja);
        return valorEntero;
    }
    function recuperarFloat(idComponente){
        let valorCaja=recuperarTexto(idComponente);
        let valorFlotante=parseFloat(valorCaja);
        return valorFlotante;
    }
    function mostrarTexto(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.innerText=mensaje;
    }
    function mostrarTextoEnCaja(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.value=mensaje;
    }
    
    function mostrarImagen(idComponente,rutaImagen){
        let componente;
        componente=document.getElementById(idComponente);
        componente.src = rutaImagen;
    
    }



    
   // PARTE2-4: FUNCIONES DEL SIMULADOR ANTERIOR (reutilizadas)
   

function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;

    if (disponible < 0){
        disponible = 0;
    }
    return disponible;
}

function calcularCapacidadPago(montoDisponible){
    let valorDisponible = montoDisponible * 0.3;
    return valorDisponible;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interesPagar = plazoAnios * monto * (tasa / 100);
    return interesPagar;
}

function calcularTotalPagar(monto, interes){
    let impuestos = 100;
    let valorPagar = monto + interes + impuestos;
    return valorPagar;
}

function calcularCuotaMensual(total, plazoAnios){
    let meses = (plazoAnios * 12);
    let cuotaMensual = total / meses;
    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual){
    if (capacidadPago > cuotaMensual){
        return true;
    } else {
        return false;
    }
}
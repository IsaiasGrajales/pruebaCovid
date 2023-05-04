var resultado = "";

function enviarDatos(){

    try {
        let valorTemperatura = document.querySelector('input[name="temperatura"]:checked').value;
        let valorTos = document.querySelector('input[name="tos"]:checked').value;
        let valorDolorCabeza = document.querySelector('input[name="dolor-cabeza"]:checked').value;
        let prueba = false;

        analizarDatos(valorTemperatura,valorTos,valorDolorCabeza);

    } catch (error) {
        alert("Es necesario responder las 3 preguntas");
    }
}

function analizarDatos(valorTemperatura, valorTos, valorDolorCabeza){

    if(valorTemperatura == "si"){
        if(valorTos == "si"){
            if(valorDolorCabeza == "si"){
                resultado = "POSITIVO";
            }
            else{
                resultado = "NEGATIVO";
            }
        }
        else{
            resultado = "NEGATIVO";
        }
    }
    else{
        resultado = "NEGATIVO";
    }

    if(resultado == "si"){
        document.getElementById("positivo").innerHTML = resultado;
    }
    else{
        document.getElementById("negativo").innerHTML = resultado;
    }

}

function reset(resultado){
    let radioBotonTemp = document.document.querySelector('input[type=radio][name=temperatura]:checked');
    let radioButtonTos = document.document.querySelector('input[type=radio][name=tos]:checked');
    let radioBotonCabeza = document.document.querySelector('input[type=radio][name=dolor-cabeza]:checked');

    radioBotonTemp.checked = false;
    radioButtonTos.checked = false;
    radioBotonCabeza.checked = false;

    let aux = resultado;
    resultado.innerHTML = "";

    if(aux == "POSITIVO"){
        document.getElementsByName("positivo").innerHTML = resultado;
    }
    else{
        document.getElementsByName("negativo").innerHTML = resultado;
    }
}
var resultado = "";
let valorTemperatura;
let valorTos;
let valorDolorCabeza;

function enviarDatos(){

    try {
        valorTemperatura = document.querySelector('input[name="temperatura"]:checked').value;
        valorTos = document.querySelector('input[name="tos"]:checked').value;
        valorDolorCabeza = document.querySelector('input[name="dolor-cabeza"]:checked').value;

        analizarDatos(valorTemperatura,valorTos,valorDolorCabeza);

    } catch (error) {
        alert("Es necesario responder las 3 preguntas");
    }
}

function analizarDatos(valorTemperatura, valorTos, valorDolorCabeza){

    console.log(valorTemperatura, valorTos, valorDolorCabeza);

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

    if(resultado == "POSITIVO"){
        //document.getElementById("positivo").innerHTML = resultado;
        document.getElementById("positivo").style.display = "block";
        resultado = "";
    }
    else{
        //document.getElementById("negativo").innerHTML = resultado;
        document.getElementById("negativo").style.display = "block";
        resultado = "";
    }

}

function reset(){

    document.getElementById("positivo").style.display = "none";
    document.getElementById("negativo").style.display = "none";

    let radioBotonTemp = document.querySelector('input[type=radio][name=temperatura]:checked');
    let radioButtonTos = document.querySelector('input[type=radio][name=tos]:checked');
    let radioBotonCabeza = document.querySelector('input[type=radio][name=dolor-cabeza]:checked');

    radioBotonTemp.checked = false;
    radioButtonTos.checked = false;
    radioBotonCabeza.checked = false;
}
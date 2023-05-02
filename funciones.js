document.getElementById("enviar").onclick = function(){
    let valorTemperatura = document.querySelector('input[name="temperatura"]:checked').value;
    let valorTos = document.querySelector('input[name="tos"]:checked').value;
    let valorDolorCabeza = document.querySelector('input[name="dolor-cabeza"]:checked').value;

    let resultado = "";

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

    console.log(resultado);

    if(resultado == "si"){
        document.getElementById("positivo").innerHTML = resultado;
    }
    else{
        document.getElementById("negativo").innerHTML = resultado;
    }

}
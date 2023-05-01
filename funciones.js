document.getElementById("enviar").onclick = function(){
    let temperatura = document.getElementById("temperatura");
    let respuesta = "";
    
    for (var i=0; i<=temperatura.lenght; i++){
        if(temperatura[i].checked){
            respuesta = temperatura[i].value;
        }
    }

    console.log(respuesta);

}
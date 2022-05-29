
function tabuada(){
    var numero = document.getElementById("numero").value;
    var tabuada = document.getElementById("resultado");
    var i = 1;
    var resultado = "";
    while (i <= 10) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
        i++;
    }
    tabuada.innerHTML = resultado;
}

function tabuada(){
    var numero = document.getElementById("numero").value;
    var tabuada = document.getElementById("resultado");
    if (!numero){
        tabuada.innerHTML = "O campo não pode estar vazio!"
        return;
    }
    var i = 1;
    var resultado = "";
    while (i <= 10) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
        i++;
    }
    tabuada.innerHTML = resultado;
}


var numero;


function exibir(){
    numeroEntrada = window.document.getElementById("txtnum").value;
    numero = Number(numeroEntrada)

}


function calcular() {
exibir();
var antes = numero - 1;
var depois = numero + 1;
var raiz = Math.sqrt(numero); 
var exponecia = Math.pow(numero, 2);
var exponeciaa = Math.pow(numero, 3);

mostrar = window.document.getElementById("mostrar");
mostrar.innerHTML = `<br> antecessor: ${antes} 
<br> sucessor: ${depois}
<br> Raiz quadrada: ${raiz}
<br> <h3> ${numero}² = ${exponecia} </h3>
<br> <h3> ${numero}³ = ${exponeciaa} </h3>

`
;

}

var txt1;
var txt2;
var n1;
var n2;
var resp;

function somar() {
    ler();
    var r = n1 + n2;
    resp.innerHTML = `<br> A soma de ${n1} e ${n2} é igual a ${r} <br>`;
}


/*function somar() {
ler ();

var r = n1 + n2;
resp.innerHTML = `<br> A soma de ${
n1} e ${n2} é igual a ${r} <br>
`;
}*/

function subtrair() {
    ler ();
    
    var r = n1 + n2;
    resp.innerHTML = `<br> A soma de ${n1} e ${n2} é igual a ${r} <br>`;
    }

    function multiplicar() {
        ler ();
        
        var r = n1 * n2;
        resp.innerHTML = `<br> A soma de ${n1} e ${n2} é igual a ${r} <br>`;
        }

        function dividir() {
        ler ();

        if (n2 != 0) {
            var r = n1/n2;
            resp.innerHTML = `<br> A divisao de ${n1} por ${n2} e igual a ${r}<br>`;
        }
    
        else { 
            resp.innerHTML = `<br> Não existe divisão por zero<br>`;
        }
    }

function ler() {
    //Faço a leitura dos elementos que eu preciso da tela
    txt1 = window.document.getElementById('txtn1').value;
    txt2 = window.document.getElementById('txtn2').value;

    //txt2 = window.document.querySelector('input#txtn2').value;
    resp = window.document.getElementById('resposta');
    n1 = Number(txt1)
    n2 = Number(txt2)
    resp.style.textAlign = "center" //Trocar o alinhamento por centralizado
    }


    function limpar() {
        txtn1.value = ""
        txtn2.value = ""
        txtn1.focus() //Muda o foco para esse objeto. Nesse caso, o cursor vai para ele }
    }
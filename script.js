/*
TESTE! continuar amanhã!
*/
/*
function clicar(botao){
    let resultadotela = document.getElementById('resultado');
    resultadotela.value += botao.value;
}
*/
    let resultadotela = document.getElementById('resultado');
    let memoria = document.getElementById('memoria');
    let botao = document.querySelectorAll('.botão');


botao.forEach(function (botao){
    botao.addEventListener('click', function(){
        if(botao && botao.classList.contains('number')){
        resultadotela.value += Number(botao.value);
        memoria.value += Number(botao.value);
    }   else if(botao.name == "apagar"){
        resultadotela.value  = resultadotela.value.slice(0, -1);
        memoria.value  = memoria.value.slice(0, -1);
    }   else if(botao.name == "apagartudo"){
        resultadotela.value = null
        memoria.value = null
    }  else if(botao.name == "="){
        resultadotela.value = eval(memoria.value) + "\n";
        memoria.value = null
    }   else if(botao.name == 'reciproco'){
        resultadotela.value = null
        resultadotela.value = eval(1 / memoria.value) + "\n"
        memoria.value = null
    }   else if(botao.name == 'elevado'){
        resultadotela.value = null
        resultadotela.value = eval(Math.pow(memoria.value, 2)) + "\n";
        memoria.value = null
    }   else if(botao.name == 'raiz'){
        resultadotela.value == null
        resultadotela.value= eval(Math.sqrt(memoria.value)) + "\n"; 
        memoria.value = null
    }   else if (botao.name == 'porcentagem'){
         /* depois continuo */
    } else { 
        const valor = botao.dataset.real || botao.value
        resultadotela.value += botao.value;
        memoria.value += valor;
    }
    })})
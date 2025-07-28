
    let resultadotela = document.getElementById('resultado');
    let memoria = document.getElementById('memoria');
    let botao = document.querySelectorAll('.botão');


botao.forEach(function (botao){
    botao.addEventListener('click', function(){
        if(botao && botao.classList.contains('number')){
        resultadotela.value += botao.value;
        memoria.value += botao.value;
    }   else if(botao.name == "apagar"){
        resultadotela.value  = resultadotela.value.slice(0, -1);
        memoria.value  = memoria.value.slice(0, -1);
    }   else if(botao.name == "apagartudo"){
        resultadotela.value = ''
        memoria.value = ''
    }  else if(botao.name == "="){
        resultadotela.value = eval(memoria.value) + "\n";
        memoria.value = ''
    }   else if(botao.name == 'reciproco'){
        resultadotela.value = ''
        resultadotela.value = eval(1 / memoria.value) + "\n"
        memoria.value = ''
    }   else if(botao.name == 'elevado'){
        resultadotela.value = ''
        resultadotela.value = eval(Math.pow(memoria.value, 2)) + "\n";
        memoria.value = ''
    }   else if(botao.name == 'raiz'){
        resultadotela.value == ''
        resultadotela.value= eval(Math.sqrt(memoria.value)) + "\n"; 
        memoria.value = ''
    }   else if (botao.name == 'porcentagem'){
        let expressao = memoria.value;
        const regex = /(\d+)([\+\-\*\/])(\d+)$/;
        const match = expressao.match(regex);
        if(match){
            const num1 = Number(match[1])
            const Operador = match[2];
            const num2 = Number(match[3]);
            const valorporcentagem = num1 *(num2/100);
            memoria.value = `${num1}${Operador}${valorporcentagem}`;
            resultadotela.value = eval(memoria.value) + "\n"
            memoria.value = ''
        }
    }  else if (botao.name == 'negado') {
    let expressao = memoria.value;
    // Regex para encontrar o último número (inteiro ou decimal) e, opcionalmente, o operador antes dele.
    // Captura o operador no grupo 1 e o número no grupo 2.
    const regex = /([\+\-\*\/]?)(-?\d+\.?\d*)$/;
    const match = expressao.match(regex);

    if (match) {
        const operadorAnterior = match[1] || ''; // Operador antes do número (ou vazio se não houver)
        const ultimoNumeroStr = match[2];     // O último número (com ou sem sinal)
        
        // Pega a parte da expressão antes do operador e do número
        let novaExpressaoPrefix = expressao.substring(0, match.index);

        let novoNumeroFormatado;

        if (ultimoNumeroStr.startsWith('-')) {
            // Caso 1: O número é negativo (ex: -5)
            // Queremos torná-lo positivo (5).
            novoNumeroFormatado = ultimoNumeroStr.substring(1); // Remove o '-'

            // O operador anterior permanece o mesmo (ex: 20 + -5 -> 20 + 5)
            // ou se for 20 - -5 -> 20 - 5.
            memoria.value = novaExpressaoPrefix + operadorAnterior + novoNumeroFormatado;
            resultadotela.value = memoria.value;

        } else {
            // Caso 2: O número é positivo (ex: 5)
            // Queremos torná-lo negativo (-5).
            
            // Tratamento especial para + e - para evitar 20 + -5 ou 20 - -5 na exibição
            if (operadorAnterior === '+') {
                memoria.value = novaExpressaoPrefix + '-' + ultimoNumeroStr;
                resultadotela.value = memoria.value;
            } else if (operadorAnterior === '-') {
                memoria.value = novaExpressaoPrefix + '+' + ultimoNumeroStr;
                resultadotela.value = memoria.value;
            } else if (operadorAnterior === '*' || operadorAnterior === '/') {
                // Para multiplicação/divisão, adicionamos parênteses para clareza
                novoNumeroFormatado = `(${ultimoNumeroStr})`;
                memoria.value = novaExpressaoPrefix + operadorAnterior + '-' + novoNumeroFormatado;
                resultadotela.value = memoria.value;
            } else {
                // Para o primeiro número ou se não há operador (ex: '5' vira '-5')
                memoria.value = '-' + ultimoNumeroStr;
                resultadotela.value = memoria.value;
            }
        }
    } else if (expressao === '') {
        // Se a expressão estiver vazia, adiciona um '-' para começar um número negativo
        memoria.value = '-';
        resultadotela.value = '-';
    }
} else { 
        const valor = botao.dataset.real || botao.value
        resultadotela.value += botao.value;
        memoria.value += valor;
    }
    })})
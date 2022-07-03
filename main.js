function Calc(){
    let numero = document.getElementById('CampoNumtxt')
    
    if (numero.value.length === 0){
        window.alert('[ERRO] Por favor, digite alto e tente novamente');
        return;
    }

    if (numero.value.length != 0){
        numero = Number(numero.value)
        inteiro = Number.isInteger(numero);
        notNum = Number.isNaN(numero);
        raiz = Math.sqrt(numero);
        redondadoBaixo = Math.floor(numero);
        redondadoCima = Math.ceil(numero);
        duasCasas = numero.toFixed(2);
        container2.innerHTML = `
        <p>O valor digitado foi ${numero}</p>
        <p>O número ${numero} é inteiro? ${inteiro}</p>
        <p>O número ${numero} é um NaN (Not a Number)? ${notNum}</p>
        <p>Sua raíz quadrada é de: ${raiz}</p>
        <p>Este valor até duas casa decimais fica: ${duasCasas}</p>
        <p>Este valor arredondado para cima é: ${redondadoCima}</p>
        <p>Este valor arredondado para baixo é: ${redondadoBaixo}</p>
        `;
        return;
    }
}
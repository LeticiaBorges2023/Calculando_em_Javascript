/*

 1-SOLICITAR NUMEROS PARA USUÁRIO
 2-FAZER COM QUE O PROMPT SOME OS NÚMEROS QUE O USUÁRIO INDICOU
 3-MOSTRAR RESULTADO EM TELA

 ADENDOS:

* USUÁRIO NÃO PODERÁ DIGITAR QUALQUER OUTRO CARACTER A NÃO SER NÚMEROS,
NAO PERMITIR ENTRADA DE STRINGS.

*/



// SOLICITA OS NÚMEROS AO USUÁRIO

let numero1 = prompt("Digite o primeiro número:");
numero1 = parseInt(numero1);

let numero2 = prompt("Digite o segundo número:");
numero2 = parseInt(numero2);



// REALIZA A OPERAÇÃO MATEMÁTICA
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let restoDivisao = numero1 % numero2;

// EXIBIR RESULTADO
alert(`A soma dos dois números é: ${soma}`);
alert(`A subtração dos dois números é: ${subtracao}`);
alert(`A multiplicação dos dois números é: ${multiplicacao}`);
alert(`A divisão dos dois números é: ${divisao.toFixed(2)}.`);
alert(`O resto da divisão dos dois números é: ${restoDivisao}`);

if(soma % 2 === 0){
    alert(`A soma dos dois números é par: ${soma}`)
    } else {
        alert(`A soma dos dois números é ímpar: ${soma}`)
       
    }
2
if(numero1 !== numero2) {
    alert("Os números inseridos são diferentes")
} else {
    alert("Os números inseridos são iguais")
}



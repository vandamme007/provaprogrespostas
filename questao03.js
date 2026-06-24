//QUESTÃO 03 

/*
Faça um programa que leia dois Arrays de valores numéricos
(Number) fornecido pelo usuário, no formato “[n,n,n]”, testando se os valores do
Arrays digitados são realmente numéricos (Number), retornando uma mensagem
de erro caso os valores não sejam válidos. Caso sejam válidos, você deverá
executar uma operação de produto escalar dos Arrays fornecidos. Note que você
deverá criar uma função de multiplicação de vetores (que pode chamar de
“produtoEscalarVet(a,b)”).
O Produto escalar de dois vetores é dado por:

[1,2,3,4] . [2,5,6,7] = (1 x 2) + (2 x 5) + (3 x 6) + (4 x 7) = 2 + 10 + 18 + 28 = 58
Use como base para sua função de leitura dos Arrays de entrada, o código
presente no endereço
https://github.com/wwagner33/prog2-2026-1-codigos/blob/main/aulas/matematicos/leNumeroInt.js.
*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerArray(texto) {
    let semColchetes = texto.trim().slice(1, -1);
    let partes = semColchetes.split(",");
    let resultado = [];

    for (let i = 0; i < partes.length; i++) {
        let numero = Number(partes[i].trim());

        if (isNaN(numero)) {
            return null;
        }

        resultado.push(numero);
    }

    return resultado;
}

function produtoEscalarVet(a, b) {
    if (a.length !== b.length) {
        return null;
    }

    let soma = 0;

    for (let i = 0; i < a.length; i++) {
        soma = soma + (a[i] * b[i]);
    }

    return soma;
}

rl.question("Digite o primeiro array no formato [n,n,n]: ", function(entradaA) {
    rl.question("Digite o segundo array no formato [n,n,n]: ", function(entradaB) {

        let arrayA = lerArray(entradaA);
        let arrayB = lerArray(entradaB);

        if (arrayA === null || arrayB === null) {
            console.log("Erro: os arrays devem conter apenas valores numéricos.");
        } else if (arrayA.length !== arrayB.length) {
            console.log("Erro: os arrays precisam ter o mesmo tamanho.");
        } else {
            let resultado = produtoEscalarVet(arrayA, arrayB);
            console.log("Produto escalar: " + resultado);
        }

        rl.close();
    });
});
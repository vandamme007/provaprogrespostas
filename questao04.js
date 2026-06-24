//QUESTAO 04

/*
Faça um programa que leia duas matrizes numéricas de entrada e
realize o dot product delas, testando se possuem, realmente, valores numéricos.
Para entendermos melhor como funciona o produto de matrizes, vejamos o texto
a seguir.

Mostre que seu programa funciona para valores de matrizes válidos e inválidos.
Lembre de fazer uma função que leia do usuário os valores das matrizes.
*/


function lerMatriz(matriz) {

    for (let linha of matriz) {
        for (let valor of linha) {

            if (typeof valor !== "number") {
                return null;
            }

        }
    }

    return matriz;
}

function multiplicarMatrizes(A, B) {

    if (lerMatriz(A) == null || lerMatriz(B) == null) {
        return "As matrizes devem conter apenas números.";
    }

    if (A[0].length !== B.length) {
        return "Não é possível fazer a multiplicação.";
    }

    let resultado = [];

    for (let i = 0; i < A.length; i++) {

        resultado[i] = [];

        for (let j = 0; j < B[0].length; j++) {

            let total = 0;

            for (let k = 0; k < A[0].length; k++) {
                total += A[i][k] * B[k][j];
            }

            resultado[i][j] = total;
        }
    }

    return resultado;
}

//matrizes válidas

let matrizA = [
    [1, 2],
    [3, 4]
];

let matrizB = [
    [5, 6],
    [7, 8]
];

console.log("Resultado da multiplicação:");
console.log(multiplicarMatrizes(matrizA, matrizB));

//matriz inválida

let matrizInvalida = [
    [1, 2],
    [3, "abc"]
];

console.log("Teste inválido:");
console.log(multiplicarMatrizes(matrizA, matrizInvalida));
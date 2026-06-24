//QUESTAO 02

/* Em nossos exercícios, vimos o método “indexOf()” que recebe como
parâmetro um valor a ser buscado no Array e o índice do Array a partir do qual
deve ser procurado o valor buscado. 

Caso o segundo parâmetro seja omitido, é considerado o valor “0” (zero) como o índice inicial do vetor. 
Caso o valor seja encontrado no Array, o valor do índice onde ele está é retornado; caso contrário, é
retornado o valor “-1”. Crie uma função em Javascript, chamada
“minhaIndexOf(arr,valor,inicio)” que se comporte conforme o método descrito.

Faça um programa que use esta função e que demonstre que ela se comporta
como deveria, conforme receba parâmetros válidos ou inválidos.
*/

function minhaIndexOf(arr, valor, inicio) {
   
    if (!Array.isArray(arr)) {
        return -1;
    }

    //se inicio não foi passado, começa do zero
    if (inicio === undefined) {
        inicio = 0;
    }

    //se inicio for negativo, conta a partir do final do array
    if (inicio < 0) {
        inicio = arr.length + inicio;
        if (inicio < 0) inicio = 0; //se ainda for negativo, começa do 0
    }

    
    for (let i = inicio; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; //se achou, retorna o índice
        }
    }

    return -1; //não achou, retorna -1
}


//testes
let frutas = ["maçã", "banana", "laranja", "morango", "uva"];
console.log(minhaIndexOf(frutas, "banana"));       
console.log(minhaIndexOf(frutas, "morango", 2)); 
console.log(minhaIndexOf(frutas, "melão"));    
console.log(minhaIndexOf(frutas, "maçã", -5)); 
console.log(minhaIndexOf("oi", "banana"));

let numeros = [5, 10, 30, 20, 60, 100];
console.log(minhaIndexOf(numeros, 20));     
console.log(minhaIndexOf(numeros, 20, 2));    
console.log(minhaIndexOf(numeros, 20, 4)); 
console.log(minhaIndexOf(numeros, 99));  


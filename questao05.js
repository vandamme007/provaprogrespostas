//QUESTAO 05

/*
Em projetos de Autoração Multimídia e desenvolvimento web, é
comum criarmos ferramentas de busca que destacam visualmente termos
específicos para o usuário. Pensando nisso, escreva uma função em JavaScript
que receba dois parâmetros: um texto base (string) e uma substring de busca
(string).

A função deve localizar todas as ocorrências exatas da substring dentro do texto
(a busca deve ser sensível a letras maiúsculas e minúsculas, ou seja,
case-sensitive) e adicionar as tags HTML “<mark>” e “</mark>” imediatamente
antes e depois de cada ocorrência encontrada.

Após a formatação, a função deve retornar à nova string resultante.
Além do comportamento padrão, sua função deve tratar as seguintes exceções:
a) Busca sem Resultados: Caso nenhuma ocorrência da substring seja
encontrada no texto, a função deve retornar o valor primitivo “null”.

b) Validação de Tipos: Verifique se os dois parâmetros passados são
estritamente do tipo string. Caso algum dos parâmetros seja de outro tipo
de dado (como número, objeto ou indefinido), a função deve interromper a
execução e retornar o valor numérico “-1”.

Após implementar a função, construa um programa de testes chamando a função
criada com diferentes argumentos. Seu programa deve exibir no console os
resultados para comprovar o funcionamento correto nos seguintes cenários
obrigatórios:
● Parâmetros válidos onde o termo aparece múltiplas vezes no texto;
● Parâmetros válidos onde o termo não existe no texto;
● Parâmetros inválidos (onde pelo menos um dos valores enviados não é
uma string).

Exemplo de como ficaria o programa de testes:

function destacarTermo(texto, termo) { …}
const resultado = destacarTermo("A prototipagem é essencial.", "prototipagem");
console.log("Teste 1 (Ocorrência única):", resultado);
>> Teste 1 (Ocorrência única): A <mark>prototipagem</mark> é essencial.

*/

function destacarTermo(texto, termo) {
    // Validação de tipos
    if (typeof texto !== "string" || typeof termo !== "string") {
        return -1;
    }

    let textoLower = texto.toLowerCase();
    let termoLower = termo.toLowerCase();

    // verifica se o termo existe no texto
    if (!textoLower.includes(termoLower)) {
        return null;
    }

    let resultado = "";
    let i = 0;

    // percorre o texto procurando o termo e adicionando as tags
    while (i < texto.length) {
        let trecho = texto.substring(i, i + termo.length);

        if (trecho.toLowerCase() === termoLower) {
            resultado = resultado + "<mark>" + trecho + "</mark>";
            i = i + termo.length;
        } else {
            resultado = resultado + texto[i];
            i++;
        }
    }

    return resultado;
}


//termo aparece múltiplas vezes
const resultado1 = destacarTermo("JavaScript é incrível. Todo desenvolvedor deveria aprender JavaScript.", "javascript");
console.log("Teste 1 (múltiplas ocorrências):", resultado1);

//termo aparece uma única vez
const resultado2 = destacarTermo("A inteligência artificial está mudando o mundo.", "inteligência artificial");
console.log("Teste 2 (ocorrência única):", resultado2);

//termo não existe no texto
const resultado3 = destacarTermo("Gosto muito de programar em Python.", "java");
console.log("Teste 3 (sem ocorrências):", resultado3); // null

//parâmetro inválido -> texto não é string
const resultado4 = destacarTermo(42, "javascript");
console.log("Teste 4 (texto inválido):", resultado4); // -1

//parâmetro inválido -> termo não é string
const resultado5 = destacarTermo("Aprender programação é muito satisfatório.", 123);
console.log("Teste 5 (termo inválido):", resultado5); // -1
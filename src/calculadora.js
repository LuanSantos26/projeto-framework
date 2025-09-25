// Importa a biblioteca 'prompt-sync' para permitir entrada de dados via terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite o primeiro número
let num1 = Number(prompt("Digite o primeiro número: "));

// Solicita ao usuário que digite o segundo número
let num2 = Number(prompt("Digite o segundo número: "));

// Exibe as opções de operação disponíveis
console.log("Escolha a operação:");
console.log("1 - Soma (+)");
console.log("2 - Subtração (-)");
console.log("3 - Multiplicação (*)");
console.log("4 - Divisão (/)");

// Solicita ao usuário que escolha uma operação digitando o número correspondente
let operacao = prompt("Digite o número da operação desejada: ");

// Declara uma variável para armazenar o resultado
let resultado;

// Usa switch case para decidir qual operação executar
switch (operacao) {
  case "1":
    resultado = num1 + num2; // Soma
    break;
  case "2":
    resultado = num1 - num2; // Subtração
    break;
  case "3":
    resultado = num1 * num2; // Multiplicação
    break;
  case "4":
    // Verifica se o segundo número é diferente de zero antes de dividir
    if (num2 !== 0) {
      resultado = num1 / num2; // Divisão
    } else {
      console.log("Erro: divisão por zero não é permitida.");
      return; // Encerra o programa
    }
    break;
  default:
    console.log("Operação inválida."); // Caso o usuário digite algo fora das opções
    return; // Encerra o programa
}

// Exibe o resultado da operação escolhida
console.log(`O resultado é: ${resultado}`);
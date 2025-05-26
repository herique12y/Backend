import rl from 'readline-sync'
// Atividade 01
let frase = rl.question("Informe o texto para ser convertido: ")
console.log(Maiusculas(frase));

//Declaração de função
function Maiusculas(texto) {
    return texto.toUpperCase();
}
console.log()

//Expressão de função
const cxALTA = function (texto){
    return texto.toUpperCase();
}
console.log(cxALTA(frase));

//Função de seta
const tdMaiusculas = (texto) => texto.toUpperCase();
console.log(tdMaiusculas(frase));

// Atividade 02 
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "O número é par";
    } else {
      return "O número é ímpar";
    }
  }
  
  // Exemplo de uso
  const numero = 7;
  const resultado = verificarParOuImpar(numero);
  console.log(resultado); // Saída: O número é ímpar
  
  const numero2 = 10;
  const resultado2 = verificarParOuImpar(numero2);
  console.log(resultado2); // Saída: O número é par
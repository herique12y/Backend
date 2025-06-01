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
  
  const numero = 5;
  const resultado = verificarParOuImpar(numero);
  console.log(resultado);
  
  const numero2 = 2;
  const resultado2 = verificarParOuImpar(numero2);
  console.log(resultado2);

// Atividade 03
function somar(a,b) {
  return a + b;
}

let resposta = somar (5, 9);
console.log(resposta);

// Atividade 04
function acresentarPorcetagem(valor, porcentagem) {
  return valor + (valor * porcentagem / 100);
}

let resultadoFinal = acresentarPorcetagem(150, 50);
console.log(resultadoFinal);

// Atividade 05
function calcularDesconto (valorOriginal, percentualDesconto) {
  let desconto = valorOriginal * percentualDesconto / 100;
  let valorFinal = valorOriginal - desconto;
  return valorFinal;
}

let produto1 = calcularDesconto(100, 50);
let produto2 = calcularDesconto(300, 10);
let produto3 = calcularDesconto(200, 70);

console.log("Produto 1: R$" + produto1);
console.log("Produto 2: R$" + produto2);
console.log("Produto 3: R$" + produto3);

//nivel médio
//  Atividade 06
function calcularCirculo(raio) {
  const area = Math.PI * Math.pow(raio, 2); // ou: raio ** 2
  return area;
}

let raio = 10;
let area = calcularCirculo(raio);
console.log("A área do circulo é: " + area.toFixed(2));

// Atividade 07
function tempCelcius (temperatura) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit
}

const celsius = 15;
let fahrenheit= tempCelcius(celsius);
console.log("A temperatura em fahrenheit é: " + fahrenheit.toFixed(1));

// Atividade 08
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

let peso = 65;
let altura = 1.75;
let calc = calcularIMC(peso, altura);
console.log("IMC: " + calc.toFixed(2));

// Atividade 09

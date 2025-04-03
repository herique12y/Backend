let valor = 13.141516;
let text = "Meu primeiro projeto em java script";
let boleano = true;

console.log(valor.toFixed(2)); // Arredonda o valor para duas casas decimais
console.log("Tipo:" + typeof valor); // Retorna o tipo da variável
console.log(text.toUpperCase()); // Converte o texto para maiúsculas
console.log("Tipo:" + typeof text); // Retorna o tipo da variável
console.log(boleano.toString()); // Converte para texto
console.log("Tipo:" + typeof boleano); // Retorna o tipo da variavel

let estados = ["Salvador", "Rondônia", "Mato Grosso", "São Paulo"];
let marcaCarros = [];
marcaCarros.push("Toyota");
console.log(estados[2]);
console.log("Tamanho: " + estados.length);
console.log(marcaCarros[0]);
console.log("Total de letras: " + marcaCarros[0].length);

let usuario; // variável não definida
console.log(usuario) //console.log(usuario.length) // TypeError: Cannot read properties of undefined

let idade;
console.log(idade +1); // NaN - Not a Number

let nula = null;
//console.log(nula.length);
console.log(nula + 1);

const aula = "javaScript"; // Definindo uma Constante
console.log(aula);
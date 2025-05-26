import rl from 'readline-sync'
/*
// Atividade 01
let num = rl.questionInt("Informe um número: ");
let cont = 1
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

// Ativdade 02
let numAlunos = rl.questionInt("Digite o número de alunos da turma: ");

let contador = 0;
let somaMedias = 0;

while (contador <= numAlunos) {
    let somaNotas = 0;
    let bimestre = 1;

    while (bimestre <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${bimestre}º bimestre do aluno ${contador + 1}: `);

        somaNotas += nota;
        bimestre++;
    }

    let mediaAluno = somaNotas / 4;
    console.log(`Média do aluno ${contador + 1}: ${mediaAluno.toFixed(2)}`);

    somaMedias += mediaAluno;
    contador++;
}

let mediaTurma = somaMedias / numAlunos;
console.log(`Média geral da turma: ${mediaTurma.toFixed(2)}`);

// Ativade 03
const numeroSecreto = Math.floor(Math.random()*100)+1

let tentativa;
let tentativas = 0;

do {
    tentativa = rl.questionInt("Adivinhe o número entre 1 e 100: ");
    tentativas++;

    if (tentativa < numeroSecreto) {
        console.log("O número secreto é maior.");
    } else if (tentativa > numeroSecreto) {
        console.log("O número secreto é menor.");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    }

} while (tentativa !== numeroSecreto);

// Ativade 04
let a = 0, b = 1;

for (let i = 1; i <= 20; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}
*/
// Ativade 05
for (let i = 0; i < 10; i++) {
    const nome = rl.question(`Digite o nome da pessoa ${i + 1}: `);
    const salario = rl.questionFloat(`Digite o salário bruto de ${nome}: `);
    
    let ir = 0;

    if (salario <= 2100) {
        ir = 0;
    } else if (salario <= 2800) {
        ir = 0.075;
    } else if (salario <= 3750) {
        ir = 0.15;
    } else if (salario <= 4660) {
        ir = 0.225;
    } else {
        ir = 0.275;
    }

    const imposto = salario * ir;

    console.log(`Nome: ${nome} - Imposto a pagar: R$ ${imposto.toFixed(2)}`);
}

// Ativade 06
const pessoa = {
  nome: "Hérique",
  idade: 28,
  profissão: "Designer",
  Sexo: "M"
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

const cores = ["Azul", "Vermelho", "Roxo", "Branco", "Laranja"];
for (const elemento of cores) {
    
    valores += elemento + ", ";
}
console.log(valores)
// Ativade 07
const array = [10, 20, 30, 40, 50];

for (const valor of array) {
  console.log(valor);
}

// Ativade 08
const texto = "Olá, Como posso ajudar?";

for (const caractere of texto) {
  console.log(caractere);
}
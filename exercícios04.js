import rl from 'readline-sync'
/// atividade 01
let dia = rl.questionInt("Informe um valor entre 1 a 7: ");

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;


    default:
        console.log("Valor Invalido");
        break;
}

/// Atividade 02
let mes = rl.question("Informe um valor entre 1 a 12: ");

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;

    default:
        console.log("Valor Invalido");
        break;
}

/// Atividade 03
let x = rl.questionFloat("Informe o primeiro valor: ");
let y = rl.questionFloat("Informe o segundo valor: ");
let op = rl.questionFloat("Escolha uma opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão");

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} x ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("Opção inválida")
        break;
}

/// Atividade 04
let salario = rl.questionFloat("Informe o seu salário: ")
let cat = rl.question("Informe a categoria de bonificação: ").toUpperCase();
let bonus = 0;

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo sálario: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo sálario: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);
    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo sálario: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo sálario: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`);
    default:
        console.log("Valor invalido");
        break;
}
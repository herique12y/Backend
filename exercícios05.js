import rl from 'readline-sync'
// Atividade 01
let num = rl.questionInt("Informe um número: ");
let cont = 1
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

// Ativdade 02

//01
let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(apartamento);
console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado na ${apartamento.andar}º andar da ${apartamento.endereco}`)

//02
let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônico',
    peso: 1.5,
    preco: 3500.00
}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria} ,tem o seguinte peso ${produtoEmbalado.peso}, com o preço ${produtoEmbalado.preco}`)

//03
class imovel {
    constructor(quartos, tipo, endereco) {
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco
    }
    exibirInformações(){
        return `${this.tipo} com ${this.quartos} quartos, localizado na ${this.endereco}.`;
    }
}

let casa = new imovel(3, 'Sobrado', 'Rua Tanto Faz, nº 6050');
//console.log(casa);
//console.log(`Tipo do Ímovel: ${casa.tipo} \nQuartos: ${casa.quartos} \n Endereço: ${casa.endereco}`)

console.log(casa.exibirInformações());

let apt = new imovel(2, 'Apartamento', 'Rua Amélia, nº 2013, bairro centro');
console.log(apt.exibirInformações());

import entraDados from 'readline-sync';

console.log();
let nome = entraDados.question("Informe o seu nome: ");
console.log(`Olá ${nome}, seja bem-vindo(a)!`);
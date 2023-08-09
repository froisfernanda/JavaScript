console.log(`trabalhando com listas`);
//const salvador =`Salvador`;
//const SaoPaulo =`São Paulo`;
//const rioDeJaneiro =`Rio de Janeiro`;

let new = 2;

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listasDeDestinos.push(`Curitiba`) //adicionando um item na listem
console.log("Destinos possíveis:");
//console.log(salvador, SaoPaulo, rioDeJaneiro)
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);


console.log(listasDeDestinos[1], listasDeDestinos[0]);
console.log(`Trabalhando com listas`);

/* const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`; */

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`)//adc um item na lista

console.log(`Destinos Possíveis:`);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos.length);

listaDeDestinos.splice(1, 1); //remover um item da lista passando a posição inicial e a qtd de elementos a ser deletados

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos.length);
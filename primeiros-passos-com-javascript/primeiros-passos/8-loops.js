console.log(`Destinos Possíveis`)
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
console.log(`Trabalhando com Condicionais \n ${listaDeDestinos}`);
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos, `\n`);
const estaAcompanhada = true;
const acompanhante = 25;
const destino = `São Paulo`;
const podeComprar = estaAcompanhada && acompanhante >= 18
let destinoExiste = false;
for (let i = 0; i < 4; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
    break;
  }
}
console.log(`Destino Existe? ${destinoExiste} \n`);

if (podeComprar && destinoExiste) {
  console.log("Boa Viagem \n");
} else {
  console.log('Desculpe, tivemos um problema');
}
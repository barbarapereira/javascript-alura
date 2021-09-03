console.log(`Destinos Possíveis`)
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
console.log(`Trabalhando com Condicionais \n ${listaDeDestinos}`);
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);
const estaAcompanhada = true;
const acompanhante = 25;
const destino = `São Paulo`;
const podeComprar = estaAcompanhada && acompanhante >= 18
let i = 0;
let destinoExiste = false;
while (i < 4) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
    break;
  }
  i++
}
console.log(`Destino Existe? ${destinoExiste} `);

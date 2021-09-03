console.log(`Destinos Possíveis`)
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`)
console.log(`Trabalhando com Condicionais`)

const idadeComprador = 14;
const estaAcompanhada = true;
const acompanhante = 25;
if (idadeComprador < 18) {
  if (estaAcompanhada && acompanhante >= 18) {
    console.log(`Pode viajar, mas com o acompanhante. Passagem comprada para ${listaDeDestinos[1]}`);
    listaDeDestinos.splice(1, 1);
  } else {
    console.log('Menor de idade, não posso vender passagem');
  }
}
else {
  console.log(`Comprador maior de idade, comprou passagem para ${listaDeDestinos[1]}`);
  listaDeDestinos.splice(1, 1);
}

console.log(listaDeDestinos);

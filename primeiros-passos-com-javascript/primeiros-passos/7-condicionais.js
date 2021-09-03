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
const destino = listaDeDestinos[3]
const removeDestino = listaDeDestinos.splice(3, 1);

if (idadeComprador > 18) {
  console.log(`Comprador maior de idade, comprou passagem para ${destino}`);
  removeDestino;
} else if (estaAcompanhada && acompanhante >= 18) {
  console.log(`Pode viajar, mas com o acompanhante. Passagem comprada para ${destino}`);
  removeDestino;
} else {
  console.log('Menor de idade, não posso vender passagem');
}
console.log(listaDeDestinos);

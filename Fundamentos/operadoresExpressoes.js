const comprimento = 24;
const largura = 78;
const area = comprimento * largura;
const perimetro = 2 * (comprimento + largura);

function areaEPerimetro(comprimento, largura, area, perimetro) {
  return `Comprimento: ${comprimento}\nLargura: ${largura}\nArea:${area}\nPerimetro: ${perimetro}`
}

const calculo = areaEPerimetro(comprimento, largura, area, perimetro);

console.log(calculo)


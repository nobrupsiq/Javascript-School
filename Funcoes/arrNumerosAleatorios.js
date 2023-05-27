// Crie uma função que gera um array com números aleatórios;
// A função deve aceitar os argumentos: tamanho do Array, valor mínimo e valor máximo;
// E retornar um array com números entre 0 e o valor máximo;
// Exiba os resultados

function numerosAleatorios(tamArray, vMin, vMax) {
  const arrayList = tamArray = [];
  let arr = Math.random(vMin, vMax);
  tamArray.push(arr);

  return arrayList;
}

const resultado = numerosAleatorios(5, 23, 34)

console.log(resultado)
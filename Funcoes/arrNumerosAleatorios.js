// Crie uma função que gera um array com números aleatórios;
// A função deve aceitar os argumentos: tamanho do Array, valor mínimo e valor máximo;
// E retornar um array com números entre 0 e o valor máximo;
// Exiba os resultados

function numerosAleatorios(tamArray, vMax) {
  const arrayList = [];
  
  for(let i = 0; i < tamArray; i++) {
    arrayList.push(Math.floor(Math.random() * (vMax + 1)))
  }
  
  return arrayList;
}

const resultado = numerosAleatorios(5, 23)

console.log(resultado)
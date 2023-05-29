// Crie uma função que identifica o elemento mais frequente em um array
// O array deve ser passado como argumento;
// O retorno deve ser o elemento que mais aparece no array
// Exiba os resultados;

function encontrarElementos(arr) {
  const contador = {}
  let elemento = arr[0]
  let maxContagem = 1

  for(let valor of arr) {
    if(!contador[valor]) {
      contador[valor] = 1
    } else {
      contador[valor]++
    }
    if(contador[valor] > maxContagem) {
      maxContagem = contador[valor]
      elemento = valor
    }
  }

  return elemento;
}

const numeros = [2,3,4,2,5,8,8,14,6]

const resultado = encontrarElementos(numeros)

console.log(resultado)
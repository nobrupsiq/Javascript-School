// Crie uma função função que retorna um fatorial de um número;
// Receba o número como argumento;
// Fatorial é a multiplicação de um número por seus antecessores, maiores ou iguais a 1;
// Exiba os resultados.

function fatorial(numero) {
  if(numero === 0 || numero === 1) {
    return 1
  } else {
    // Preferi utilizar função recursiva mas, também posso utilizar um loop
    return numero * fatorial(numero - 1);
  }
}

const resultado = fatorial(8);
console.log(resultado)
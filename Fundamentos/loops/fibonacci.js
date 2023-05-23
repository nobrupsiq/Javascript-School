// Crie um programa que exibe a sequencia Fibonacci de um número
// A sequencia começa com 0 e 1, e cada numero
// subsequente é a soma de dois anteriores
// EX: 5=> [0,1,1,2,3,5]
// Exiba os resultados

const z = 5;

function fibonacciAteN(n) {
  let a = 0
  let b = 1

  let sequencia = []; 

  while(a <= n) {
    sequencia.push(a);
    const temp = a
    a = b;
    b = temp + a;
  }
  return sequencia;
}

const sequenciaFibonacci = fibonacciAteN(z);
console.log(`A sequencia de fibonacci até ${z} é:`, sequenciaFibonacci);
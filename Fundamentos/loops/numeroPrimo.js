// Crie um programa que exibe todos os números primos de 1 a N;
// Número primo é aquele que é divisivel apenas por ele mesmo;
// O exercicio deve ser feito com estruturas de repetição;
// Exiba os resultados

const m = 50;

function isPrime(num) {

  if(num < 1) {
    return false;
  }

  for(let i = 2; i * i <= num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

for(let i = 2; i <= m; i++) {
  if(isPrime(i)) {
    console.log(i);
  }
}
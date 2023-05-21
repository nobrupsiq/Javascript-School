// Crie um programa que calcula a soma de números de 1 a N
// Este N pode ser inserido em uma variável;
// Utiliza loops como for ou while;
// Exiba os resultados;

const n = 3;
let soma = 0;

for(let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma dos números de 1 a ${n} é ${soma}`);
// Crie um programa que exibe um padrão de asteriscos;
// Baseado em um determinado número;
// A cada linha repita mais um asterisco, até chegar ao limite
// Exiba os resultados;

// const asters = 5
// let count = '';

// for(let i = 1; i <= asters; i++) {
//   count += '*'
//   console.log(`${count}`)
// }


// OUTRA FORMA


const x = 5;

for(let i = 1; i <= x; i++) {
  console.log('*'.repeat(i));
}
for(let i = 4; i > 0; i--) {
  console.log('*'.repeat(i));
}
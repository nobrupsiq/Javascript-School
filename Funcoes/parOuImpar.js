// Crie uma função que verifica se um número, que é fornecido como parâmetro, é par ou ímpar;
// Retorne uma string formando o resultado;
// Exiba os resultados

function ParOuImpar(numero) {
  return numero % 2 === 0 ? `${numero} é par!` : `${numero} é impar!`
}

const resultado = ParOuImpar(5);
console.log(resultado)
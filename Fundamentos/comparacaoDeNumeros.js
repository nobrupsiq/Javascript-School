// Crie um programa que compara dois números;
// Exiba uma mensagem informando se o primeiro número é maior, menor ou igual ao segundo número;
// Utiliza variáveis e if/else;
// Exiba os resultados

const numero1 = 7;
const numero2 = 6;

function compararNumeros(n1, n2) {
  if (n1 > n2) {
    return `${n1} é maior que ${n2}`;
  } else if(n1 === n2) {
    return `${n1} é igual a ${n2}`;
  } else {
    return `${n1} é menor que ${n2}`;
  }
}

const resultado = compararNumeros(numero1, numero2);
console.log(resultado)
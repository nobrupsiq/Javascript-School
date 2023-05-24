// Crie duas funções;
// A primeira deve retornar o maior valor entre dois números;
// Já a segunda deve retornar o menor valor;
// Ambas devem aceitar dois argumentos numéricos;
// Exiba os resultados

function maiorValor(numero1, numero2) {
  return numero1 > numero2 ? numero1 : numero2;
}
function menorValor(numero1, numero2) {
  return numero1 < numero2 ? numero1 : numero2;
}

const num1 = 9;
const num2 = 6;

console.log(`O maior valor entre ${num1} e ${num2} é: ${maiorValor(num1, num2)}`)
console.log(`O menor valor entre ${num1} e ${num2} é: ${menorValor(num1, num2)}`)

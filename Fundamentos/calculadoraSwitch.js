// Crie uma calculadora básica, com as operações +, -, *, /;
// Utilize dois números para fazer as operações
// Utilize switch para armazenar as operações e selecionar a escolhida;
// Exiba os resultados;


// 1° FORMA 

function calculadoraOne() {

  const operacao = parseInt(prompt("Qual operação deseja realizar?\n1 = SOMA\n2 = SUBTRAÇÃO\n3 = MULTIPLICAÇÃO\n4 = DIVISAO"))

  const n1 = parseFloat(prompt('Digite o primeiro número: '));
  const n2 = parseFloat(prompt('Digite o segundo número: '));
  let resultado = 0;

  switch(operacao) {
    case 1:
      resultado = `O resultado da soma ${n1}+${n2} = ${n1 + n2}`;
      break;
    case 2:
      resultado = `O resultado da subtração ${n1}-${n2} = ${n1 - n2}`;
      break;
    case 3:
      resultado = `O resultado da multiplicação ${n1}x${n2} = ${n1 * n2}`;
      break;
    case 4:
      resultado = `O resultado da divisao ${n1}/${n2} = ${n1 / n2}`;
      break;
  }

  alert(resultado);

}
// calculadoraOne()



// 2° FORMA


function calcular(a, b, operador) {

  let resultado;

  switch(operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      return "Operador inválido!"
  }

  return `O resultado da operação é ${resultado}`
}

const resultado = calcular(2,9, "*");
console.log(resultado);

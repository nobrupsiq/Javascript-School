const numero1 = 15;
const numero2 = 3

function verificarDivisibilidade(n1, n2) {
  return n1 % n2 === 0;
}

const resultado = verificarDivisibilidade(numero1, numero2);
console.log(`O número ${numero1} é divisivel por ${numero2}? ${resultado ? "Sim" : "Não"}`)
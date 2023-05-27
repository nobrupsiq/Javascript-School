// Crie uma funcao que identifica se uma string é um palindromo
// A função deve aceitar uma string, e retornar true para palindromo, e false caso contrario
// Palindromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa: osso, ana, radar, renner, roma é amor;
// Exiba os resultados

function palindromo(str) {
  const stringInvertida = str.split("").reverse().join("");

  return str.toLowerCase() === stringInvertida.toLowerCase();
}

const resultado = palindromo('Radar');
console.log(resultado)
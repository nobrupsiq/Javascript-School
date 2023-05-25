// Crie uma função que conta o número de vogais em uma String;
// A função deve aceitar uma string como argumento;
// E retornar a quantidade de vogais que esta string possui
// Exiba os resultados;

function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(vogais.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const resultado = contarVogais('testando');
console.log(resultado);

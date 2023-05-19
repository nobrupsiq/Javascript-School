// Crie um programa que classifica o usuário baseado na idade passada;
// Utilize if e else para cada uma das faixas;
// Faixas etárias:
//  - Criança 0-12 anos
//  - Adolescente: 13-17 anos
//  - Adulto: 18-59 anos
//  - idoso: 60 anos ou mais
// Exiba os resultados.

const idadeDoUsuario = 60;

function faixaEtaria(idade) {
  if (idade > 0 && idade <= 12) {
    return `Idade: ${idade} (Criança)`;
  } else if (idade >= 13 && idade <= 17) {
    return `Idade: ${idade} (Adolescente)`;
  } else if (idade >= 18 && idade <= 59) {
    return `Idade: ${idade} (Adulto)`;
  } else {
    return `Idade: ${idade} (Idoso)`;
  }
}

const resultado = faixaEtaria(idadeDoUsuario)
console.log(resultado);
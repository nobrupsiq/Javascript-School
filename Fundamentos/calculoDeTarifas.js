// Crie um programaque determina o valor de uma tarifa dependendo da idade do usuário;
// Tarifas:
// - Crianças menores de 6 anos: grátis;
// - Estudantes: 50% de desconto
// - Idosos (60 anos ou mais): 30% de desconto
// - Regular: tarifa normal
 

// 1° FORMA


// const tarifa = 2.50;

// function calculoDeTarifa(tarifa, idade) {
//   if(idade > 0 && idade <= 6) {
//     return `${idade}: Tarifa gratis!`
//   } else if(idade === 'estudante' || idade === 'Estudante') {
//     return `${idade}: Tarifa com 50% de desconto: ${(tarifa * 0.5).toFixed(2)}`
//   } else if(idade === 'idoso' || idade >= 60) {
//     return `${idade}: Tarifa com 30% de desconto: ${(tarifa - (tarifa * 0.3)).toFixed(2)}`
//   }

//   return 'Valor invalido!';
// }

// console.log(calculoDeTarifa(5.20, 'estudante'))


// 2° FORMA



function calcularTarifa(idade, tipoPasse) {

  let tarifaNormal = 2.5;

  if(idade < 6) {
    return 0;
  }

  let desconto = 0

  if(tipoPasse === 'estudante') {
    desconto = .5;
  } else if(tipoPasse === 'idoso' && idade >= 60) {
    desconto = .3;
  }
  tarifaNormal = tarifaNormal * (1 - desconto);

  return `A tarifa para uma pessoa com ${idade} anos e passe do tipo ${tipoPasse} é de R$${tarifaNormal.toFixed(2)}`
}

const tarifa = calcularTarifa(60, 'idoso')
console.log(tarifa)
// Exercícios de Array

// 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

function receivedTwoNumbers(arr) {
  if(arr[0] > arr[1]) {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return arr;
}
receivedTwoNumbers([3,2])


// 02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

function growingArray(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  const pivot = arr[0];

  const smallerPivot = arr.filter(n => n < pivot);
  const equalPivot = arr.filter(n => n === pivot);
  const biggerPivot = arr.filter(n => n > pivot);

  return growingArray(smallerPivot).concat(equalPivot).concat(growingArray(biggerPivot));
}
growingArray([10,20,30,1,4,75,98,22,4]);

// 03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

function revertNumber() {
  let n = prompt('Digite 3 numeros!');
  const arrNumbers = n.split("").reverse();
  const revertNumber = +arrNumbers.join("");
  return revertNumber;
}
// revertNumber();

// 04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
// Depois, o usuário vai preenchendo elemento por elemento do vetor.
// Ao final, exiba o array e o array ao contrário (generalização do script anterior).

function amountNumbers() {
  let perg = parseInt(prompt('Quantos numeros voce quer inserir?'))
  let arr = [];

  for (let i = 0; i < perg; i++) {
    const n1 = parseInt(prompt('Numero: '));
    arr.push(n1);
  }
  alert(`Seu array: ${arr} \nSeu array invertido: ${arr.reverse()}`);
  return arr;
}
// amountNumbers();

// 05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

function bubbleSort(arr) {
  if (arr.length !== 2) {
    throw new Error('O Array deve conter exatamente 2 elementos.')
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let o = 0; o < arr.length -1 -i; o++) {
      if(arr[i] > arr[i + 1]){
        const temp = arr[i];
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
const numeros = [9, 3]
bubbleSort(numeros)

// 06. Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

function indexNumber(vetor, n) {
  if(vetor.length == 0) return [];
  if(vetor.length == 1) return [0];

  let indices = [];
  for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] === n) {
     indices.push(i)
    }
  }
  return indices;
}
console.log(indexNumber([3,5,7,8,9,6,2,3,1,3,7], 3));

// 07. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.

function integerNumber(number) {
  if(number == 0 || number < 0) return 'Digite um número inteiro positivo!'

  let fibonacci = [0, 1];

  for (let i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

// console.log(integerNumber(12));

// 08. Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

function factorialNumber(number) {
  if(number == 0 || number < 0) return 'Digite um número inteiro positivo!'

  let fatorial = []
  let result = 1;

  for(let i = number; i >= 1; i--) {
    result *= i;
    let fatorialString = `${i}! = ${i} `;
    if(i !== 1) {
      fatorialString += 'x ';
    }
    for (let j = i - 1; j >= 1; j--) {
      result *= j;
      fatorialString += `${j}`;
      if (j !== 1) {
        fatorialString += ' x ';
      }
    }
    fatorialString += ` = ${result}`;
    console.log(fatorialString);
  }
  return fatorial;
}

console.log(factorialNumber(10));

// 09. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
// O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2) que

// 9. Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

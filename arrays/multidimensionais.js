// // vamos criar uma matriz 3 x 3
// Cada célula contém a soma i
// (linha) + j (coluna) + z (profundidade) da matriz, deste modo:

let matrix = [];

// for (let i = 0; i < 3; i++) {
//   matrix[i] = [] // precisamos inicializar cada array
//   for (let j = 0; j < 3; j++) {
//     matrix[i][j] = [];
//     for (let z = 0; z < 3; z++) {
//       matrix[i][j][z] = i + j + z;
//     }
//   }
// }

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; matrix[i].length; j++) {
    for (let z = 0; z < matrix[i][j].length; z++) {
      console.table(matrix[i][j][z]);
    }
  }
}

// ******* METODOS DISPONIVEIS EM UM OBJETO ARRAY *********

// concat - Junta vários arrays e devolve uma cópia dos arrays concatenados.

// every - Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido.

// filter - Cria um array com todos os elementos avaliados com true pela função especificada.

// forEach - Executa uma função específica em cada elemento do array.

// join - Reúne todos os elementos do array em uma string.

// indexOf - Pesquisa o array em busca de elementos específicos e devolve a sua posição.

// lastIndexOf - Devolve a posição do último item do array que corresponda ao critério de pesquisa.

// map - Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.

// reverse - Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.

// slice - Devolve um novo array a partir do índice especificado.

// some - Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.

// sort - Organiza o array em ordem alfabética ou de acordo com a função especificada.

// toString - Devolve o array na forma de uma string.

// valueOf - É semelhante ao método toString e devolve o array na forma de uma string.

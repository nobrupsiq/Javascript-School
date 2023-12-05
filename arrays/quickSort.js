function quickSort(array) {
    if (array.length === 0) return [];
    if (array.length === 1) return array;

    let pivot = array[0];

    let smallerPivot = array.filter((n) => n < pivot);
    let equalPivot = array.filter((n) => n === pivot);
    let biggerPivot = array.filter((n) => n > pivot);

    return quickSort(smallerPivot)
        .concat(equalPivot)
        .concat(quickSort(biggerPivot));
}

console.log(quickSort([12, 66, 3, 22, 4, 5, 7, 7, 1]));

// O meu pivot vai ser o -> 12

// [3,4,5,7,7,1] < que o pivot
// [12] == ao pivot
// [22,66] > que o pivot

// Vou invocar a funcao quicksort assim quickSort([3,4,5,7,7,1]) e passo o meu array que todos os numeros são menores que o pivot, ele vai ordenar e no final irá adicionar o 12;

// Invoco de novo a minha funcao para ordenar o array com os numeros maiores que o pivot, assim quickSort([22,66])

// [3,4,5,7,7,1]
// [1]
// [4,5,7,7]

// [4,5,7,7]
// [4]
// [5,7,7]

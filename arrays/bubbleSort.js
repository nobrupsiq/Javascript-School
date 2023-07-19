function bubbleSort(arr) {
  let arrSize = arr.length;
  let swapped;

  do {
    swapped = false;

    for(let i = 0; i < arrSize; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

  } while(swapped)

  return arr;
}

console.log(bubbleSort([4,5,9,1,2,6]));

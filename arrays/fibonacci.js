const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  console.log(fibonacci)
  // retorna o valor 2 na posicao 3 (0, 1, 1, 2)
}

for(let i = 1; i < fibonacci.length; i++) {
  // Exibe cada numero do array fibonnaci
  console.log(fibonacci[i]);
}

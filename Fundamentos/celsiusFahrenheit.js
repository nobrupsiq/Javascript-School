alert('Olá seja bem vindo ao conversor!');

const escolha = parseFloat(prompt('Digite para converter \n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius'));

if(escolha === 1) {
  const temperaturaCelsius = parseFloat(prompt('Digite o valor a ser convertido: '));

  const resultado = (temperaturaCelsius * 9/5) + 32;

  alert(`Valor convertido de Celsius para Fahrenheit: ${resultado.toFixed(4)}`)
} else {
  const temperaturaFahrenheit = parseFloat(prompt('Digite o valor a ser convertido: '));

  const resultado = (temperaturaFahrenheit - 32) * 5/9;

  alert(`Valor convertido de Fahrenheit para Celcius: ${resultado.toFixed(4)}`);
}

// OUTRA FORMA 

const celsius = 30;
const fahrenheit = 86;

function celciusFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function farenheitCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// celsius para Fahrenheit
console.log(`${celsius} graus Celcius equivalem a ${celciusFarenheit(celsius)} graus Fahrenheit!`)

// Fahrenheit para Celsius
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${farenheitCelcius(fahrenheit)} graus Celcius!`)
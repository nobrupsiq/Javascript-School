// CALCULO IMC

const inPeso = document.getElementById('inPeso');
const inAltura = document.getElementById('inAltura');
const btCalcular = document.getElementById('btCalcular');
const outResultado = document.getElementById('outResultado');

function calculoIMC() {
  let peso = Number(inPeso.value);
  let altura = Number(inAltura.value);
  
  const imc = peso / (altura * altura).toFixed(2);

  outResultado.textContent = `O seu IMC é: ${imc}`
}

btCalcular.addEventListener('click', calculoIMC);


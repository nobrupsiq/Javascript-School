const nome = 'Bruno';
const idade = 27;
const cidade = 'Saquarema';

function criarMensagem(nome, idade, cidade) {
  return `Olá! Me chamo ${nome} tenho ${idade} anos e moro em ${cidade}.`
}

const mensagem = criarMensagem(nome, idade, cidade);

console.log(mensagem)
// Pesquisa de perfil

// Temos uma matriz de objetos representando diferentes pessoas em nossas listas de contatos.

// Uma lookUpProfile função que recebe name e uma propriedade ( prop) como argumentos foi pré-escrita para você.

// A função deve verificar se nameé de um contato real firstName e se a propriedade fornecida ( prop) é uma propriedade desse contato.

// Se ambos forem verdadeiros, retorne o "valor" dessa propriedade.

// Se name não corresponder a nenhum contato, retorne a string No such contact.

// Se prop não corresponder a nenhuma propriedade válida de um contato encontrada para corresponder, name retorne a string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

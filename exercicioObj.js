const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Sua função deve sempre retornar o recordsobjeto inteiro.
// Se valuefor uma string vazia, exclua a proppropriedade fornecida do álbum.
// Se propnão for trackse valuenão for uma string vazia, atribua o valueao prop.
// Se propfor trackse o valor não for uma string vazia, adicione o valueao final da tracksmatriz do álbum. Você precisa criar essa matriz primeiro se o álbum não tiver uma trackspropriedade.

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop != "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value === "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value != "") {
    records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

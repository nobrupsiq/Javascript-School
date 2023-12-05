// Criação de promise

// const myPromise = new Promise((resolve, reject) => {
//     const name = 'Bruno';

//     name == 'Bruno'
//         ? resolve('Usuario encontrado!')
//         : reject(`O usuário(a) ${name}, não foi encontrado!`);
// });

// myPromise.then((data) => {
//     console.log(data);
// });

// // Encadeamento de THEN's

// const myPromise2 = new Promise((resolve, reject) => {
//     const name = 'Bruno';

//     name == 'Bruno'
//         ? resolve('Usuario encontrado!')
//         : reject(`O usuário(a) ${name}, não foi encontrado!`);
// });

// myPromise2
//     .then((data) => {
//         return data.toUpperCase();
//     })
//     .then((stringModify) => console.log(stringModify));

// // Retorno Catch

// const myPromise3 = new Promise((resolve, reject) => {
//     const name = 'João';

//     name == 'Bruno'
//         ? resolve('Usuario encontrado!')
//         : reject(`O usuário(a) ${name}, não foi encontrado!`);
// });

// myPromise3
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('Aconteceu um erro! ' + err);
//     });

// Resolver várias promessas com All

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! timeout');
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!');
});
const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!');
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});

// Resolver várias promessas com Race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok! timeout');
    }, 2000);
});
const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!');
});
const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!');
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
});

// Fetch request na API do github
// Fetch API

const userName = 'nobrupsiq';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => response.json())
    .then((data) => console.log(`Nome de usuario: ${data.name}`))
    .catch((err) => {
        console.log(`Houve um erro: ${err}`);
    });

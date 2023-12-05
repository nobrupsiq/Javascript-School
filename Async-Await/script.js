function primaryFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui!');
            resolve();
        }, 3000);
    });
}

async function secondFunction() {
    console.log('Iniciou');

    await primaryFunction();

    console.log('Terminou');
}
secondFunction();

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err));
}

async function showUserName(id) {
    try {
        const user = await getUser(id);
        console.log(user.data.first_name);
    } catch (err) {
        console.log(err);
    }
}

showUserName(4);

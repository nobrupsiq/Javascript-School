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

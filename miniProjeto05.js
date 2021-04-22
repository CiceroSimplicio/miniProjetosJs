// PAR OU IMPAR

parImpar(5);

function parImpar(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i, 'par');
        } else {
            console.log(i, 'impar');
        }
    }
}
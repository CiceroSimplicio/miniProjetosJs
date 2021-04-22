//  NUMEROS PRIMOS

// function numPrimos(ate) {
//     for (let numero = 2; numero <= ate; numero++) {
//         let ehPrimo = true;

//         for (let divisor = 2; divisor < numero; divisor++) {
//             if (numero % divisor === 0) {
//                 ehPrimo = false;
//                 break;
//             }
//         }
//         if (ehPrimo) {
//             console.log(numero);
//         }
//     }
// }

// numPrimos(15)


// FORMA CLEAN

function numPrimos(ate) {
    for (let numero = 2; numero <= ate; numero++) {
        if (numPrimo(numero)) {
            console.log(numero);
        }
    }
}

function numPrimo(numero) {
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                return false;
            }
        }
        return true;
}

numPrimos(15)
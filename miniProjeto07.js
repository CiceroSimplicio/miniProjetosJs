// MULTIPLOS DE 3 E 5

const result = multiplos(15);

function multiplos(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for (i = 0; i < limite; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i;
            console.log(i);
        }  
    }
    console.log(`\nTotal multiplos de 3: ${multiplosDe3}`)
    console.log('\n')

    for (i = 0; i < limite; i++) {
        if (i % 5 === 0) {
            multiplosDe5 += i;
            console.log(i);
        }
    }
    console.log(`\nTotal multiplos de 5: ${multiplosDe5}`)
    
    const somaMultiplos = multiplosDe3 + multiplosDe5;
    console.log(`\nSoma dos multiplos: ${somaMultiplos}`); 
}
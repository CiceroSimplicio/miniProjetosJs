// CONTADOR DE ASTERISCOS

contAsteriscos(3);
function contAsteriscos(linhas) {
    // let asteriscos = '';
    // for (let linha = 1; linha <= linhas; linha++) {
        //     asteriscos += '*';
        //     console.log(asteriscos);
        // }
        for (let linha = 1; linha <= linhas; linha++) {
            let asteriscos = '';
            for (let i = 1; i <= linha; i++) {
                asteriscos += '*';
            }
            console.log(asteriscos);
    }
}

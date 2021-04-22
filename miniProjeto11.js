// FAIXA DE PREÇOS


// Primeira forma (Array)
let faixa1 = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999}
];

// Segunda forma (Factory Function)
function faixadePreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
};


let faixa2 = [
    faixadePreco('até 200', 0, 200),
    faixadePreco('de 200 até 500', 200, 500),
    faixadePreco('de 500 até mais', 500, 1000)
];


// Terceira Forma (Constructor)
class FaixaPreco {
    constructor(tooltip, minimo, maximo) {
        this.tooltip = tooltip;
        this.minimo = minimo;
        this.maximo = maximo;
    }
};

let faixa3 = [
    new FaixaPreco('qer', 233, 3243),
    new FaixaPreco('fdfd1', 1230, 4342),
    new FaixaPreco('dkfjsk', 1223, 2423)
];

console.log(faixa1);
console.log(faixa2);
console.log(faixa3);
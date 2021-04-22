// LISTA DE CONVIDADOS

let convidadoPorCicero = ['jaqueline', 'aline', 'denize', 'zeneto'];
let donosFesta = ['cicero', 'jose'];

function listaConvidado() {
    const nome = document.getElementById('nome').value;
    const convidadoPor = document.getElementById('convidante').value;
    const resultado = document.getElementById('resultado');
    
    if (convidadoPorCicero.includes(nome) && donosFesta.includes(convidadoPor)) {
        resultado.innerHTML = 'Pode entrar';
    } else {
        resultado.innerHTML = 'Não pode entrar';
    }
}
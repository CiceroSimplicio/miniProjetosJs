// ENCONTRE A STRING

const filme = {
    nome: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
};

for (key in filme) {
    if (typeof filme[key] === 'string') {
        console.log(key + ': ' + filme[key]);
    }
}
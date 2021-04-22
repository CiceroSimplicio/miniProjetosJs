// MONTADOR DE POSTAGENS DE UM BLOG

class Postagem {
    constructor(titulo, mensagem, autor) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.autor = autor;
        this.vizualizacoes = 0;
        this.comentarios = [];
        this.estaoAovivo = false;
    }
};

let post1 = new Postagem('a', 'abc', 'ab');

console.log(post1)
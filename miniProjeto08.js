// MEDIA ALUNOS ARRAY

const array = [90, 90, 90];
console.log(mediaAluno(array));

function mediaAluno(notas) {
    const media = calMedia(notas);

    if (media < 59) {
        return 'F';
    } else if (media < 69) {
        return 'D';
    } else if (media < 79) {
        return 'C';
    } else if (media < 89) {
        return 'B';
    } else {
        return 'A';
    }
}

function calMedia(array) {
    let soma = 0;
    for (valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}
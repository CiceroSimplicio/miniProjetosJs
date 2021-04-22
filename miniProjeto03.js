// MEDIDOR DE VELOCIDADE

const result = vlMax (80);

function vlMax(vel) {
    const maxVel = 70;
    const kmPts = 3;
    const pts = Math.floor(((vel - maxVel) / kmPts));
    const maxPts = 8;

    if (vel <= maxVel) {
        console.log('Ok')
    } else {
        console.log(`pontos: ${pts}`)

        if (pts >= maxPts) {
            console.log('carteira suspensa');
        } else {
            const rest = (pts - maxPts)
            console.log(`cuidado para não perder a carteira!! \nfaltam: ${rest} pontos para perder a carteira`);
        }
    }
}
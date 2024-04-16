function writeCards(george, birthday) {
    let cardsArray = [];
    for (let i = 0; i < george.length; i++) {
        cardsArray.push(`Thank you, ${george[i]}, for the wonderful ${birthday} gift!`);
    }
    return cardsArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
 
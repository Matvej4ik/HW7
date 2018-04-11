function randomInteger(min, max) {
    let rand = Math.random() * (max - min) + min;
    return Math.round ( rand );
}

console.log ( randomInteger (1, 100) );
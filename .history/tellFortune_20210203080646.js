//make functions to call selections from arrays randomly 
function tellFortune() {
    const randomSign = signs[Math.floor(Math.random() * array.length)];
    return randomSign;
    const randomLuck = luck[Math.floor(Math.random() * array.length)];
    return randomLuck;
    const randomPhrase = phrase[Math.floor(Math.random() * array.length)];
    return randomPhrase;
    //above creates random choice from the arrays and returns them  as random*
    //interpolate them all together 
    console.log(`Your sign is ${randomSign}.`);
    console.log(`Your luck today is ${randomLuck}.`);
    console.log(`Today, you should ${randomPhrase}`);
}

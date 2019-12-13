let stackedDeck: string[] = [];
let suits = ['spades','hearts','clubs','diamonds'];
let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

for (let s in suits) {
    for (let v in values){
        stackedDeck.push(suits[s] + ' of ' + values[v]);
    }
}

function shuffle(thing){
    let moving: string;
    let randomCard: number;
    for (let c in thing){
        randomCard = Math.floor(Math.random()*51);
        moving = thing[c];
        thing[c] = thing[randomCard];
        thing[randomCard] = moving;
    }
return thing;
}

let deck = shuffle(stackedDeck);

console.log(stackedDeck);
console.log(deck);
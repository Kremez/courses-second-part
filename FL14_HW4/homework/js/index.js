// Your code goes here
let Suit = {
    HEARTS: "HEARTS",
    DIAMONDS: "DIAMONDS",
    CLUBS: "CLUBS",
    SPADES: "SPADES"
};

let Rang = {
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13
};


function getNameByRang(rang) {
    switch (rang) {
        case 1: {
            return "ACE";
        }
        case 2: {
            return "TWO";
        }
        case 3: {
            return "THREE";
        }
        case 4: {
            return "FOUR";
        }
        case 5: {
            return "FIVE";
        }
        case 6: {
            return "SIX";
        }
        case 7: {
            return "SEVEN";
        }
        case 8: {
            return "EIGHT";
        }
        case 9: {
            return "NINE";
        }
        case 10: {
            return "TEN";
        }
        case 11: {
            return "JACK";
        }
        case 12: {
            return "QUEEN";
        }
        case 13: {
            return "KING";
        }
    }
}


function initializeDeck() {
    let cardsArray = [];
    cardsArray.push(new Card(Suit.HEARTS, Rang.ACE));
    cardsArray.push(new Card(Suit.HEARTS, Rang.TWO));
    cardsArray.push(new Card(Suit.HEARTS, Rang.THREE));
    cardsArray.push(new Card(Suit.HEARTS, Rang.FOUR));
    cardsArray.push(new Card(Suit.HEARTS, Rang.FIVE));
    cardsArray.push(new Card(Suit.HEARTS, Rang.SIX));
    cardsArray.push(new Card(Suit.HEARTS, Rang.SEVEN));
    cardsArray.push(new Card(Suit.HEARTS, Rang.EIGHT));
    cardsArray.push(new Card(Suit.HEARTS, Rang.NINE));
    cardsArray.push(new Card(Suit.HEARTS, Rang.TEN));
    cardsArray.push(new Card(Suit.HEARTS, Rang.JACK));
    cardsArray.push(new Card(Suit.HEARTS, Rang.QUEEN));
    cardsArray.push(new Card(Suit.HEARTS, Rang.KING));

    cardsArray.push(new Card(Suit.DIAMONDS, Rang.ACE));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.TWO));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.THREE));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.FOUR));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.FIVE));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.SIX));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.SEVEN));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.EIGHT));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.NINE));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.TEN));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.JACK));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.QUEEN));
    cardsArray.push(new Card(Suit.DIAMONDS, Rang.KING));

    cardsArray.push(new Card(Suit.CLUBS, Rang.ACE));
    cardsArray.push(new Card(Suit.CLUBS, Rang.TWO));
    cardsArray.push(new Card(Suit.CLUBS, Rang.THREE));
    cardsArray.push(new Card(Suit.CLUBS, Rang.FOUR));
    cardsArray.push(new Card(Suit.CLUBS, Rang.FIVE));
    cardsArray.push(new Card(Suit.CLUBS, Rang.SIX));
    cardsArray.push(new Card(Suit.CLUBS, Rang.SEVEN));
    cardsArray.push(new Card(Suit.CLUBS, Rang.EIGHT));
    cardsArray.push(new Card(Suit.CLUBS, Rang.NINE));
    cardsArray.push(new Card(Suit.CLUBS, Rang.TEN));
    cardsArray.push(new Card(Suit.CLUBS, Rang.JACK));
    cardsArray.push(new Card(Suit.CLUBS, Rang.QUEEN));
    cardsArray.push(new Card(Suit.CLUBS, Rang.KING));

    cardsArray.push(new Card(Suit.SPADES, Rang.ACE));
    cardsArray.push(new Card(Suit.SPADES, Rang.TWO));
    cardsArray.push(new Card(Suit.SPADES, Rang.THREE));
    cardsArray.push(new Card(Suit.SPADES, Rang.FOUR));
    cardsArray.push(new Card(Suit.SPADES, Rang.FIVE));
    cardsArray.push(new Card(Suit.SPADES, Rang.SIX));
    cardsArray.push(new Card(Suit.SPADES, Rang.SEVEN));
    cardsArray.push(new Card(Suit.SPADES, Rang.EIGHT));
    cardsArray.push(new Card(Suit.SPADES, Rang.NINE));
    cardsArray.push(new Card(Suit.SPADES, Rang.TEN));
    cardsArray.push(new Card(Suit.SPADES, Rang.JACK));
    cardsArray.push(new Card(Suit.SPADES, Rang.QUEEN));
    cardsArray.push(new Card(Suit.SPADES, Rang.KING));

    return cardsArray;
}

function getNumber(number) {
    return number;
}

class Card {

    constructor(suit, rang) {
        this.suit = suit;
        this.rang = rang;
        this.isFaceCard = rang > 10 || rang === 1;
    }

    toString() {
        return this.rang;
    }
}


class Deck {

    constructor(cards) {
        this.cards = cards;
        this.count = cards.length;
    }

    shuffle() {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }

    draw(number) {
        let deleted = [];
        for (let index = 0; index < number; index++) {
            let element = this.cards.pop();
            deleted.push(element);
            this.count -= 1;
        }
        return deleted;
    }
}

class Player {

    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.wins = 0;
    }

    toString() {
        console.log(this.name + " won " + this.wins + " times")
    }

    increaseScore() {
        this.wins += 1;
    }
}


function play(player1, player2) {
    do {
        let card1 = player1.deck.draw(1);
        console.log(card1);
        console.log(card1.toString());
        let card2 = player2.deck.draw(1);
        console.log(card2);
        console.log(card2.toString());

        if (parseInt(card1.toString()) > parseInt(card2.toString())) {
            player1.increaseScore();
            console.log("player 1 wins");
        } else if (parseInt(card2.toString()) > parseInt(card1.toString())) {
            player2.increaseScore();
            console.log("player 2 wins");
        }

    } while (player1.deck.count !== 0 || player2.deck.count !== 0);

    showWinner(player1, player2);
}


function showWinner(player1, player2) {
    if (player1.wins > player2.wins) {
        console.log(player1.name + " wins " + player1.wins + " to " + player2.wins);
    } else if (player2.wins > player1.wins) {
        console.log(player2.name + " wins " + player2.wins + " to " + player1.wins);
    } else {
        console.log("Draw in tha game! Score : " + player1.wins + " X " + player2.wins);
    }
}

function compare(cardOne, cardTwo) {
    if (cardOne.rang > cardTwo.rang) {
        return true;
    } else if (cardTwo.rang > cardOne.rang) {
        return false;
    } else {
        return "equal";
    }
}


// TEST data

let deck1 = new Deck(initializeDeck());
deck1.shuffle();
let deck2 = new Deck(initializeDeck());

let playerIvan = new Player("Ivan", deck1);
let playerStepan = new Player("Stepan", deck2);

play(playerIvan, playerStepan);

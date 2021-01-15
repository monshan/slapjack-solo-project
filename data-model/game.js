class Game {
    constructor() {
        this.pile = deck
        this.player1 = new Player ('Kayla')
        this.player2 = new Player ('Scott')
        this.currentPlayer = this.player1
    }

    shuffle(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    firstDeal() {
        this.shuffle(this.pile)
        this.player1.hand = this.pile.splice(0, 26)
        this.player2.hand = this.pile.splice(0, this.pile.length)
    }

    turn(player) {
        this.pile.unshift(player.playCard())
        console.log(this.pile[0])
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2
        } else {
            this.currentPlayer = this.player1
        }
    }

    // Fix the slap function in that both the pile is reduced and player.hand contains the object and not an array of the object

    slap(player) {
        if (this.pile[0].value === 'jack') {
            this.validSlap(player)
        } else if (this.pile[0].value === this.pile[1].value) {
            this.validSlap(player)
        } else if (this.pile[0].value === this.pile[2].value) {
            this.validSlap(player)
        } else {
            console.log('Nice try loser')
        }
    }

    validSlap(player) {
        for (var i = 0; i < this.pile.length; i++) {
            player.hand.unshift(this.pile[i])
        }
        this.pile.splice(0, this.pile.length)
        console.log(`${player.name} had a good slap!`)
    }

    win(player) {
        player.wins++
    }

    newGame() {

    }
}

// A way to shuffle the deck
// A way to keep track of the central pile of cards the players will add to
// A way to deal the deck out to the players
// A way to keep track of which player’s turn it currently is
// A way for a player to deal a card into the middle pile
// A way for players to attempt slapping the pile with varying outcomes (“legal” slaps are Jacks, doubles, and sandwiches - see the playthrough video for further explanation)
// A way to update a player’s wins count
// A way to reset the deck and players to play a new game when one is won
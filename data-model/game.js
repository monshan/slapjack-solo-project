class Game {
    constructor() {
        this.pile = deck
        this.player1 = new Player (Date.now())
        this.player2 = new Player (Date.now())
        this.currentPlayer = this.player1
    }

    shuffle() {
        for (let i = this.pile.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pile[i], this.pile[j]] = [this.pile[j], this.pile[i]];
        }
    }

    firstDeal() {
        this.shuffle()
        this.player1.hand = this.pile.splice(0, 26)
        this.player2.hand = this.pile.splice(0, this.pile.length)
    }

    play(player) {
        player.playCard()
    }

    slap() {
        // if ()
    }

    win(player) {

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
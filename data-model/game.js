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
        if (!player.hand.length) {
            for (var i = 0; i < this.pile.length; i++) {
                player.hand.unshift(this.pile[i])
            }
            this.shuffle(player.hand)
            this.pile.splice(0, this.pile.length)
            console.log(`Pile has been added to your hand`)
        }
        this.pile.unshift(player.playCard())
        console.log(this.pile[0])
        // this.currentPlayer = this.swapPlayer(player)
        this.setCurrentPlayer(player)

    }

    swapPlayer(thatPlayer) {
        if (thatPlayer === this.player1) {
            return this.player2
        } else {
            return this.player1
        }
    }
    // On slap, if the other players hand has no cards you win but a play with no cards cannot do a valid slap on a double or sandwhich

    slap(player) {
        if (this.pile[0].value === 'jack') {
            if (!this.swapPlayer(player).hand.length) {
                this.win(player)
            } else {
                this.validSlap(player)
            }
        } else if (this.pile[0].value === this.pile[1].value) {
            if (!player.hand.length) {
                this.win(this.swapPlayer(player))
            } else {
                this.validSlap(player)
            }
        } else if (this.pile[0].value === this.pile[2].value) {
            this.validSlap(player)
        } else {
            // Set the rule for winning on a jack here
            console.log(`Nice try`)
            this.swapPlayer(player).hand.push(player.hand.shift())
            this.shuffle(this.swapPlayer(player).hand)
        }
    }

    validSlap(player) {
        console.log(`${player.name} had a good slap!`)
        for (var i = 0; i < this.pile.length; i++) {
            player.hand.unshift(this.pile[i])
        }
        this.shuffle(player.hand)
        this.pile.splice(0, this.pile.length)
        this.setCurrentPlayer(player)
    }

    setCurrentPlayer(player) {
        if (!this.swapPlayer(player).hand.length) {
            this.currentPlayer = player
        } else {
            this.currentPlayer = this.swapPlayer(player)
        }
    }

    win(player) {
        console.log(`Congrats ${player.name}, you win!`)
        player.wins++
        currentGame = new Game ()
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
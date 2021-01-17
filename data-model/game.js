class Game {
    constructor(player1, player2) {
        this.pile = deck
        this.player1 = new Player (player1)
        this.player2 = new Player (player2)
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
        this.setCurrentPlayer(player)
    }

    swapPlayer(thatPlayer) {
        return thatPlayer === this.player1 ? this.player2 : this.player1
    }

    slap(player) {
        if (this.pile[0].value === 'jack') {
            !this.swapPlayer(player).hand.length ? this.formalWin(player) : this.validSlap(player)
        } else if (this.pile[0].value === this.pile[1].value) {
            this.winCondition(player)
        } else if (this.pile[0].value === this.pile[2].value) {
            this.winCondition(player)
        } else {
            if (!player.hand.length) {
                console.log(`You just lost genius`)
                this.formalWin(this.swapPlayer(player))
            } else {
                console.log(`Nice try`)
                this.swapPlayer(player).hand.push(player.hand.shift())
                this.shuffle(this.swapPlayer(player).hand)
            }
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

    winCondition(player) {
        if (!player.hand.length) {
            console.log(`Nice try, but not a valid slap for you`)
            this.formalWin(this.swapPlayer(player))
        } else {
            this.validSlap(player)
        }
    }

    formalWin(player) {
        console.log(`Congrats ${player.name}, you win!`)
        player.wins++
        this.newGame()
    }

    newGame() {
        currentGame = new Game ('Seojun', 'Jookyung')
        currentGame.firstDeal()
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
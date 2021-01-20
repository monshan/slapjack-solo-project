class Game {
    constructor(player1, player2) {
        this.pile = deck
        this.player1 = new Player (player1)
        this.player2 = new Player (player2)
        this.currentPlayer = this.player1
        this.winner = null
        this.gameWon = false
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

    addPileToHand(player) {
        this.pile.forEach((card) => player.hand.unshift(card))
        this.pile.splice(0, this.pile.length)
        this.shuffle(player.hand)
    }

    hasCards(pile) {
        if (pile.length) {
            return true
        } else {
            return false
        }
    }

    turn(player) {
        this.pile.unshift(player.playCard())
        console.log(this.pile[0])
        this.setCurrentPlayer(player)
    }

    swapPlayer(thatPlayer) {
        return thatPlayer === this.player1 ? this.player2 : this.player1
    }

    slap(player) {
        if (!this.pile.length) {
            this.invalidSlap(player)
            return false
        } else if (this.pile[0].value === 'jack') {
            !this.swapPlayer(player).hand.length ? this.formalWin(player) : this.validSlap(player)
            return true
        } else if (this.pile[0].value === this.pile[1].value) {
            return this.winCondition(player)
        } else if (this.pile[0].value === this.pile[2].value) {
            return this.winCondition(player)
        } else {
            this.invalidSlap(player)
            return false
        }
    }

    validSlap(player) {
        console.log(`${player.name} had a good slap!`)
        this.addPileToHand(player)
        this.setCurrentPlayer(player)
    }

    invalidSlap(player) {
        if (!player.hand.length) {
            console.log(`${player.name} loses due to invalid slap!`)
            this.formalWin(this.swapPlayer(player))
        } else {
            console.log(`${player.name} made a bad slap, lose one card`)
            this.swapPlayer(player).hand.push(player.hand.shift())
            this.shuffle(this.swapPlayer(player).hand)
        }
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
            console.log(`This slap is invalid for ${player.name}, lose the game!`)
            this.formalWin(this.swapPlayer(player))
            return false
        } else {
            this.validSlap(player)
            return true
        }
    }

    formalWin(player) {
        player.wins++
        this.winner = player
        this.gameWon = true
        this.returnHands()
        player.saveToStorage()
        this.swapPlayer(player).saveToStorage()
        this.newGame(player)
    }

    returnHands() {
        this.player1.hand.forEach((card) => this.pile.push(card))
        this.player1.hand.splice(0, this.player1.hand.length)
        this.player2.hand.forEach((card) => this.pile.push(card))
        this.player2.hand.splice(0, this.player2.hand.length)
    }

    newGame(player) {
        this.firstDeal()
        this.currentPlayer = this.swapPlayer(player)
    }
}

// Though the newGame function works, may need to go back or use the main.js file to declare a new instance of a game that reflects the currentGame variable
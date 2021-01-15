class Player {
    constructor(name) {
        this.name = name
        this.wins = 0
        this.hand = []
    }

    playCard() {
        return this.hand.shift()
    }

    saveToStorage() {

    }
}

// Try giving it a name to further personalize?
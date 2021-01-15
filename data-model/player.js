class Player {
    constructor(id) {
        this.id = id
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
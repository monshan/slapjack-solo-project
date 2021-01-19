class Player {
    constructor(player) {
        this.name = player.name || 'placeholder'
        this.wins = player.wins || 0
        this.hand = []
    }

    playCard() {
        return this.hand.shift()
    }

    saveToStorage() {
        localStorage.setItem(`${this.name}`, JSON.stringify(this))
    }
}
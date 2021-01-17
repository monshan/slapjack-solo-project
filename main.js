let currentGame = new Game ('Seojun', 'Jookyung')
var player1Hand = document.getElementById('player1Hand')
var player2Hand = document.getElementById('player2Hand')
var pile = document.getElementById('pile')

window.addEventListener('load', currentGame.firstDeal())
window.addEventListener('keydown', anyKeydown)


function applyCover(element, card) {
    element.src.innerHTML = `assets/${card.suite}-${card.value}.png`
}

applyCover(player1Hand, currentGame.player1.hand[0])

function anyKeydown (event) {
    if (event.key === 'q') {
        isPlayer1Turn()
    } else if (event.key === 'f') {
        currentGame.slap(currentGame.player1)
    } else if (event.key === 'p') {
        isPlayer2Turn()
    } else if (event.key === 'j') {
        currentGame.slap(currentGame.player2)
    }
}

function isPlayer1Turn () {
    if (currentGame.currentPlayer === currentGame.player1) {
        currentGame.turn(currentGame.player1)
    } else {
        console.log(`Wait your turn!`)
    }
}

function isPlayer2Turn () {
    if (currentGame.currentPlayer === currentGame.player2) {
        currentGame.turn(currentGame.player2)
    } else {
        console.log(`Wait your turn!`)
    }
}
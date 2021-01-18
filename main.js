let currentGame = new Game ('Seojun', 'Jookyung')
var player1Hand = document.getElementById('player1Hand')
var player2Hand = document.getElementById('player2Hand')
var pile = document.getElementById('pile')

window.addEventListener('load', currentGame.firstDeal())
window.addEventListener('keydown', playerCommand)


function numToString(num) {
    if (num < 10) {
        return '0' + num.toString()
    } else {
        return num.toString()
    }
}

function updatePile() {
    pile.src = `assets/${currentGame.pile[0].suite}-${numToString(currentGame.pile[0].value)}.png`
}

function playerCommand (event) {
    if (event.key === 'q') {
        isPlayer1Turn()
    } else if (event.key === 'f') {
        currentGame.slap(currentGame.player1)
    } else if (event.key === 'p') {
        isPlayer2Turn()
    } else if (event.key === 'j') {
        currentGame.slap(currentGame.player2)
    }
    
    if (!currentGame.pile.length) {
        pile.src = ''
    } else {
        updatePile()
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


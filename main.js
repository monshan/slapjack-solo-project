var currentGame = new Game ()

window.addEventListener('keydown', anyKeydown)



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


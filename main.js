var currentGame = new Game ()

window.addEventListener('keydown', playerAction)



function playerAction(event) {
    if (event.key === 'q') {
        currentGame.turn(currentGame.player1)
    } else if (event.key === 'f') {
        currentGame.slap(currentGame.player1)
    } else if (event.key === 'p') {
        currentGame.turn(currentGame.player2)
    } else if (event.key === 'j') {
        currentGame.slap(currentGame.player2)
    }
}
let currentGame = null
var currentPlayerSign = document.getElementById('currentPlayerSign')
var pile = document.getElementById('pile')
var player1Hand = document.getElementById('player1Hand')
var player1Name = document.getElementById('player1Name')
var player1Wins = document.getElementById('player1Wins')
var player1ValidSlap = document.getElementById('player1ValidMess')
var player1InvalidSlap = document.getElementById('player1InvalidMess')
var player1WaitTurn = document.getElementById('player1WaitTurnMess')
var player1AddPile = document.getElementById('player1AddPileMess')
var player2Hand = document.getElementById('player2Hand')
var player2Name = document.getElementById('player2Name')
var player2Wins = document.getElementById('player2Wins')
var player2ValidSlap = document.getElementById('player2ValidMess')
var player2InvalidSlap = document.getElementById('player2InvalidMess')
var player2WaitTurn = document.getElementById('player2WaitTurnMess')
var player2AddPile = document.getElementById('player2AddPileMess')

var winMess = document.getElementById('winMessage')

window.addEventListener('load', initiateGame)
window.addEventListener('keydown', playerCommand)

function flashMessage(where) {
    where.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0, easing: 'ease-out' }
    ], 2000)
}

function initiateGame() {
    if (localStorage.length) {
        var accessLocal1 = JSON.parse(localStorage.getItem(localStorage.key(1)))
        var accessLocal2 = JSON.parse(localStorage.getItem(localStorage.key(0)))
        currentGame = new Game (accessLocal1, accessLocal2)
    } else {
        currentGame = new Game ({name: 'Player 1'}, {name: 'Player 2'})
    }
    loadPlayerInfo()
    currentGame.firstDeal()
}

function isPlayer1Turn () {
    if (currentGame.currentPlayer === currentGame.player1) {
        if (!currentGame.hasCards(currentGame.player1.hand)) {
            currentGame.addPileToHand(currentGame.player1)
            flashMessage(player1AddPile)
        }
        currentGame.turn(currentGame.player1)
    } else {
        flashMessage(player1WaitTurn)
    }
}

function isPlayer2Turn () {
    if (currentGame.currentPlayer === currentGame.player2) {
        if (!currentGame.hasCards(currentGame.player2.hand)) {
            currentGame.addPileToHand(currentGame.player2)
            flashMessage(player2AddPile)
        }
        currentGame.turn(currentGame.player2)
    } else {
        flashMessage(player2WaitTurn)
    }
}

function loadNewGame() {
    if (currentGame.gameWon) {
        winMess.innerText = `Congradulations ${currentGame.winner.name}, you win!`
        flashMessage(winMess)
        loadPlayerInfo()
        currentGame.winner = null
        currentGame.gameWon = false
    }
}

function loadPlayerInfo() {
    player1Name.innerText = currentGame.player1.name
    player2Name.innerText = currentGame.player2.name
    player1Wins.innerText = currentGame.player1.wins + ' Wins'
    player2Wins.innerText = currentGame.player2.wins + ' Wins'
    currentPlayerSign.innerText = `${currentGame.currentPlayer.name}'s turn`
}

function numToString(num) {
    if (num < 10) {
        return '0' + num.toString()
    } else {
        return num.toString()
    }
}

function playerCommand (event) {
    if (event.key === 'q') {
        isPlayer1Turn()
    } else if (event.key === 'f') {
        currentGame.slap(currentGame.player1) ? flashMessage(player1ValidSlap) : flashMessage(player1InvalidSlap)
    } else if (event.key === 'p') {
        isPlayer2Turn()
    } else if (event.key === 'j') {
        currentGame.slap(currentGame.player2) ? flashMessage(player2ValidSlap) : flashMessage(player2InvalidSlap)
    }
    updatePile()
    currentPlayerSign.innerText = `${currentGame.currentPlayer.name}'s turn`
    loadNewGame()
}

function updatePile() {
    if (!currentGame.pile.length) {
        pile.alt = ''
        pile.src = ''
    } else {
        pile.alt = `${numToString(currentGame.pile[0].value)} of ${currentGame.pile[0].suite} cardface`
        pile.src = `assets/${currentGame.pile[0].suite}-${numToString(currentGame.pile[0].value)}.png`
    }
}
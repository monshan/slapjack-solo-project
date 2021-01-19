
var player1Hand = document.getElementById('player1Hand')
var player2Hand = document.getElementById('player2Hand')
var pile = document.getElementById('pile')
var player1Name = document.getElementById('player1Name')
var player2Name = document.getElementById('player2Name')
var player1Wins = document.getElementById('player1Wins')
var player2Wins = document.getElementById('player2Wins')
let currentGame = null

var seojun = {
    name: 'Seojun',
}

var jookyung = {
    name: 'Jjoo'
}

window.addEventListener('load', start)
window.addEventListener('keydown', playerCommand)

function start() {
    if (localStorage.length) {
        var accessLocal1 = JSON.parse(localStorage.getItem(localStorage.key(1)))
        var accessLocal2 = JSON.parse(localStorage.getItem(localStorage.key(0)))
        currentGame = new Game (accessLocal1, accessLocal2)
    } else {
        currentGame = new Game (seojun, jookyung)
    }
    loadPlayerInfo()
    currentGame.firstDeal()
}

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

function loadPlayerInfo() {
    player1Name.innerText = currentGame.player1.name
    player2Name.innerText = currentGame.player2.name
    player1Wins.innerText = currentGame.player1.wins + ' Wins'
    player2Wins.innerText = currentGame.player2.wins + ' Wins'
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
    !currentGame.pile.length ? pile.src = '' : updatePile()
    loadNewGame()
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

function loadNewGame() {
    if (currentGame.gameWon) {
        loadPlayerInfo()
        currentGame.gameWon = false
    }
}
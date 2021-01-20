# SlapJack Solo Project
## Description

Want to play slapjack but don't have any cards? Just use this web app and it has everything you need to play a 2 person game. It will even save your wins if you need to take a break and come back later

## How it Works

- Controls are listed at the bottom of the window on either side for each player, but player 1 can press the 'q' key to play a card and the 'f' key to slap and player 2 can press the 'p' key to play a card and the 'j' key to slap
- On loading of the window, a new game will start with a player 1 on the left and player 2 on the right, a standard deck of 52 cards will be be shuffled and dealt evenly between the 2 players
- Whomever's turn it is can be found in the center column below the central pile, regardless of if there are cards in the central pile (player 1 will always start a new game)
- If it is the current player's turn, they can play a card from the top of their deck which will appear in the central pile face up
- If a player attempts to play a card when it is not their turn, a message will flash below their deck that informs them it is not their turn and they cannot play a card
- If a player makes a valid slap a message will flash below their deck and the entire central pile will be added to their hand. Their hand will be shuffled and it will be the opposite player's turn
- If a player makes an invalid slap, a message will flash below their deck and the player will lose one card that will be added to the opposite player's hand
- If the current player runs out of cards after the opposite player, a message will flash below their deck and the entire central pile will be shuffled and added to their hand
- A player can win if they slap on a jack while the opposite player has no remaining cards. Upon winning, a message will flash over the gameplay area and the amount of wins under their hand will be updated and automatically saved to local storage

## Technologies Implemented:

- HTML5
- CSS3
- JavaScript ES6

## Primary Contributors

- Marika Shanahan: [link to Marika's GitHub Profile] (https://github.com/monshan)
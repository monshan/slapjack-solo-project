# SlapJack Solo Project
## Description

Want to play slapjack but don't have any cards? Just use this web app and it has everything you need to play a 2 person game. It will even save your wins if you need to take a break and come back later.

## Gameplay

- Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row):
    - Any player can slap at any time, with several outcomes!
    - If a player slaps when a Jack is on top of the central pile, the entire central pile is shuffled and then added to the player’s hand.
    - If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is shuffled and then added to the player’s hand.
    - If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is shuffled and then added to the player’s hand.
    - If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.


- If one player loses all their cards, they have one chance to not lose and continue the game:
    - The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)
    - If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
    - When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.
    - If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
    - Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
    The only way the player who still has cards can win is by slapping the Jack before the player without cards left does

## How it Works

- Controls are listed at the bottom of the window on either side for each player, but player 1 can press the 'q' key to play a card and the 'f' key to slap and player 2 can press the 'p' key to play a card and the 'j' key to slap
- On loading of the window, a new game will start with a player 1 on the left and player 2 on the right, a standard deck of 52 cards will be be shuffled and dealt evenly between the 2 players
- Whomever's turn it is can be found in the center column below the central pile, regardless of if there are cards in the central pile (player 1 will always start a new game)
- If it is the current player's turn, they can play a card from the top of their deck which will appear in the central pile face up
<!-- insert basic gif here -->
- If a player attempts to play a card when it is not their turn, a message will flash below their deck that informs them it is not their turn and they cannot play a card
<!-- insert not your turn error here -->
- If a player makes a valid slap a message will flash below their deck and the entire central pile will be added to their hand. Their hand will be shuffled and it will be the opposite player's turn
<!-- insert valid slap here -->
- If a player makes an invalid slap, a message will flash below their deck and the player will lose one card that will be added to the opposite player's hand
<!-- insert invalid slap here -->
- If the current player runs out of cards after the opposite player, a message will flash below their deck and the entire central pile will be shuffled and added to their hand
- A player can win if they slap on a jack while the opposite player has no remaining cards. Upon winning, a message will flash over the gameplay area and the amount of wins under their hand will be updated and automatically saved to local storage. A new game will start by returning all cards to the central pile, shuffling, and dealing again evenly between the players
<!-- insert win message here -->

## Technologies Implemented:

- HTML5
- CSS3
- JavaScript ES6

## Primary Contributors

- Marika Shanahan: [link to Marika's GitHub Profile] (https://github.com/monshan)
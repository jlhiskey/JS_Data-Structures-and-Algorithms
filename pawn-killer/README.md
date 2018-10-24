[![Build Status](https://travis-ci.com/jlhiskey/code-challenge.svg?branch=master)](https://travis-ci.com/jlhiskey/code-challenge)

# Pawn-Killer
 - Write a function that accept a 8x8 2d array (chessboard) and checks if it has a bishop and then checks to see if the bishop is able to kill a pawn on the board.
 ## Function
 - When you input a 2d array (chessboard):
    - Responds true if chessboard contains a bishop that can kill a pawn. 
        - INPUT:
            - [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 'bishop', 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 'pawn', 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]] 
        - Returns <b>TRUE<b>.
    - Respond false if chessboard contains a bishop but the bishop isn't able to take the pawn.
        - INPUT:
          - [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 'bishop', 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 'pawn', 3, 4, 5, 6, 7], ['G', 1, 2, 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]] 
         - Returns <b>FALSE<b>.
    - Respond false if chessboard doesn't contain a bishop.
    
        - INPUT:
            - [['A', 1, 2, 3, 4, 5, 6, 7], ['B', 1, 2, 3, 4, 5, 6, 7], ['C', 1, 2, 3, 4, 5, 6, 7], ['D', 1, 2, 3, 4, 5, 6, 7], ['E', 1, 2, 3, 4, 5, 6, 7], ['F', 1, 2, 3, 4, 5, 6, 7], ['G', 1, 'pawn', 3, 4, 5, 6, 7], ['H', 1, 2, 3, 4, 5, 6, 7]]
         - Returns <b>FALSE<b>.

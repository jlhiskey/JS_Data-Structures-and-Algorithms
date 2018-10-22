[![Build Status](https://travis-ci.com/jlhiskey/code-challenge.svg?branch=master)](https://travis-ci.com/jlhiskey/code-challenge)

# Bracket-Closure
 - Write a function that accepts a string and checks to see if and (, ), [, ], {, } contained within the string have closure.
 ## Function
 - When you input a string:
    - Responds true is string contains no brackets. 
        - Ex. 'hello' = true
    - Respond true is and brackets within string are paired.
        - Ex. '{([hello])}' = true
    - Responds false if contains brackets but they are not paired.
        - Ex. '{())([hello])}' = false

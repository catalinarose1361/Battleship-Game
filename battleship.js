// these variables hold the location of each cell of the ship
var location1 = 3
var location2 = 4
var location3 = 5
// this variable hold the users current guess. this variable won't have a value until the user makes a guess
var guess
// this variable holds the number of hits
var hits = 0
// this variable holds the number of guesses
var guesses = 0
// this variable keeps track of whether the ship is sunk or not
var isSunk = false

// Loop: while the ship is not sunk
    // get the users guess
    // compare the users input to valid input values
    // if the users guess is invalid
        // tell the user to enter a valid number
    // else
        // add one to the guesses
        // if the users guess matches the location
            // add one to the number of hits
            // if the number of hits is 3 
                // set isSunk to true
                // tell user "You sank my battleship"
// tell user stats
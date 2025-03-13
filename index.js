
// Problem #1 //
/*
Create a function called `logBestPlayers` that takes in one parameter - `array` - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the `forEach` method to iterate through the input array and then it should 
use the `forEach` method again to iterate through each team's `bestPlayers` property. 
At each iteration, the function should log every player's name, position, and which 
college they attended.

*/

let logBestPlayers = (array) => {
    array.forEach(team => team.forEach(player => `${player.name} - ${player.position} - ${player.college.university}`))
}


// Problem #2 //
/*
Create a function called getSuperbowlWinners that takes in one parameter - array - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the native filter method to return a new array of only the NFL team objects 
that have won a Superbowl (note that in the bestPlayoffResults arrays a Superbowl 
appearance is marked as "Final" at the round key).

*/


// Problem #3 //

/**
 * Create a function called getTeamsByCollege that takes in two parameters - array & team; 
 * array represents an array of NFL team objects like the one in data.js; team is a string 
 * of the college a player attended. This function should use the native filter method to 
 * return a new array of only the NFL team objects who have a player that attended the input 
 * college.
 * 
 */



// Problem #4 //

/**
 * Create a function called mapTeams that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. 
 * This function should use the native map method to return a new array of 
 * objects that looks like the example below. For the bestPlayer and 
 * bestPlayoffResult keys only need to access the current team's zero 
 * index player and playoff result.
 * 

 */ 

// Problem #5 //
/**
 * Create a function called reducePlayoffResults that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. This function 
 * should use the native reduce method to return a new array of strings, where each string 
 * follows this format: <result of game> <year of playoff game> <round of playoff game> 
 * against the <opponent in playoff game>.

 */



// Problem #6 //
/**
 * Create a function called funnyTeams that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. 
 * This function should use the native reduce method to return a string of 
 * each team's name preceeded by the college name of their zero index best player.
 * 
 * 
 */




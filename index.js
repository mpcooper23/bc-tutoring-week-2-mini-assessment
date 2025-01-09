
// Problem #1 //
/*
Create a function called `logBestPlayers` that takes in one parameter - `array` - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the `forEach` method to iterate through the input array and then it should 
use the `forEach` method again to iterate through each team's `bestPlayers` property. 
At each iteration, the function should log every player's name, position, and which 
college they attended.
*/


const logBestPlayers = (array) => {
   array.forEach(team => {team.bestPlayer.forEach(player => {console.log(`player.name - ${player.position} - College: ${player.college.university}`)})}}

// Problem #2 //
/*
Create a function called getSuperbowlWinners that takes in one parameter - array - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the native filter method to return a new array of only the NFL team objects 
that have won a Superbowl (note that in the bestPlayoffResults arrays a Superbowl 
appearance is marked as "Final" at the round key).
*/
const getSuperBowlWinners = (array) => {
   return array.filter(team => {if(team.bestPlayoffResults.round === "Final")
        return team.playerName});
    };

// Problem #3 //

/**
 * Create a function called getTeamsByCollege that takes in two parameters - array & team; 
 * array represents an array of NFL team objects like the one in data.js; team is a string 
 * of the college a player attended. This function should use the native filter method to 
 * return a new array of only the NFL team objects who have a player that attended the input 
 * college.
 */

const getTeamsByCollege = (array, team) => {
    
};

// Problem #4 //
const mapTeams = () => {
    
};

// Problem #5 // 
const reducePlayoffResults = () => {
    
};

// Problem #6 //
const funnyTeams = () => {
    
};


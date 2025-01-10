
// Problem #1 //
/*
Create a function called `logBestPlayers` that takes in one parameter - `array` - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the `forEach` method to iterate through the input array and then it should 
use the `forEach` method again to iterate through each team's `bestPlayers` property. 
At each iteration, the function should log every player's name, position, and which 
college they attended.

I: array
O: log name, position, college
C:forEach X 2

*/


const logBestPlayers = (array) => {
    array.forEach(team => {
        team.bestPlayers.forEach(player =>{
   console.log(`${player.name} - ${player.position} - College: ${player.college.university}`)
})
})
}

// Problem #2 //
/*
Create a function called getSuperbowlWinners that takes in one parameter - array - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the native filter method to return a new array of only the NFL team objects 
that have won a Superbowl (note that in the bestPlayoffResults arrays a Superbowl 
appearance is marked as "Final" at the round key).

I: array
O: new array of objects, superbowl winning teams
C:filter

*/
const getSuperBowlWinners = (array) => {
  return array.filter(team => {
   const results = team.bestPlayoffResults;
  for (let i = 0; i < results.length; i++){
        if(results[i].round === 'Final' && results[i].result === "Won"){
            return true  
        }
    }}
    )
  };
    

// Problem #3 //

/**
 * Create a function called getTeamsByCollege that takes in two parameters - array & team; 
 * array represents an array of NFL team objects like the one in data.js; team is a string 
 * of the college a player attended. This function should use the native filter method to 
 * return a new array of only the NFL team objects who have a player that attended the input 
 * college.
 * 
 * I: array and team (string data)
O: new array of players who attended input college
C:filter
 */

const getTeamsByCollege = (array, team) => {
    return array.filter(teams => {
        if(teams.bestPlayers.college === team){
            return teams.teamName;
        }
    })
};

// Problem #4 //

/**
 * Create a function called mapTeams that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. 
 * This function should use the native map method to return a new array of 
 * objects that looks like the example below. For the bestPlayer and 
 * bestPlayoffResult keys only need to access the current team's zero 
 * index player and playoff result.
 * 
 * I: array
O: new array of objects with team, best player, best playoff result
C: map
 * 
 */ 

const mapTeams = (array) => {
    return array.map(team => {team[bestPlayer][0], team[bestPlayoffResult][0]})
};

// Problem #5 //
/**
 * Create a function called reducePlayoffResults that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. This function 
 * should use the native reduce method to return a new array of strings, where each string 
 * follows this format: <result of game> <year of playoff game> <round of playoff game> 
 * against the <opponent in playoff game>.

 I: array
O: new array of strings formatted as shown above
C: reduce
 */

const reducePlayoffResults = (array) => {
    return array.reduce((acc, team) => {
return acc += `${team.bestPlayoffResults.score} ${team.bestPlayoffResults.year} ${team.bestPlayoffResults.round} ${
    team.bestPlayoffResults.opponent
}`
   }, '')
    return acc
};

// Problem #6 //
/**
 * Create a function called funnyTeams that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. 
 * This function should use the native reduce method to return a string of 
 * each team's name preceeded by the college name of their zero index best player.
 * 
 *  I: array
O: new string of each teams name preceeded by the college name of their zero index best player
C: reduce
 * 
 */

const funnyTeams = (array) => {
    return array.reduce((acc, team) => {
        acc += `${team.bestPlayers[0].college.university} ${team.teamName}`
    }, '')
};


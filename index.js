
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
    array.forEach(team => team.bestPlayers.forEach(player => `${player.name} - ${player.position} - ${player.college.university}`))
}


// Problem #2 //
/*
Create a function called getSuperbowlWinners that takes in one parameter - array - 
which represents an array of NFL team objects like the one in data.js. This function 
should use the native filter method to return a new array of only the NFL team objects 
that have won a Superbowl (note that in the bestPlayoffResults arrays a Superbowl 
appearance is marked as "Final" at the round key).

*/

let getSuperBowlWinners = (array) => {
    return array.filter(team => {
      for (let i = 0; i < team.bestPlayoffResults.length; i++) {
        if (team.bestPlayoffResults[i].round === 'Final' && team.bestPlayoffResults[i].result === 'Won') {
          return true;
        }
    }
    });
  };
  



// Problem #3 //

/**
 * Create a function called getTeamsByCollege that takes in two parameters - array & team; 
 * array represents an array of NFL team objects like the one in data.js; team is a string 
 * of the college a player attended. This function should use the native filter method to 
 * return a new array of only the NFL team objects who have a player that attended the input 
 * college.
 * 
 */

let getTeamsByCollege = (array, collegeName) => {
    return array.filter(team => {
      for (let i = 0; i < team.bestPlayers.length; i++) {
        if (team.bestPlayers[i].college.university === collegeName) {
          return true;
        }
      }
      return false;
    });
  };
  
  const teamsByCollege = getTeamsByCollege(teams, 'LSU');
  console.log(teamsByCollege);
  

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
let reducePlayoffResults = (array) => {
    return array.reduce((accumulator, team) => {
      for (let i = 0; i < team.bestPlayoffResults.length; i++) {
        let result = team.bestPlayoffResults[i];
        let resultString = `${result.result} ${result.year} ${result.round} against the ${result.opponent}`;
        accumulator.push(resultString);
      }
      return accumulator;
    }, []);
  };
  
 
  

// Problem #6 //
/**
 * Create a function called funnyTeams that takes in one parameter - array - 
 * which represents an array of NFL team objects like the one in data.js. 
 * This function should use the native reduce method to return a string of 
 * each team's name preceeded by the college name of their zero index best player.
 * 
 * 
 */

let funnyTeams = (array) => {
    return array.reduce((acc, current) => {
for (let i = 0; i < current.bestPlayers.length; i++){
    let collegeName = current.bestPlayers[i][current.bestPlayers.length - 1].college.university
}acc += `${collegeName} ${current.teamName}`;
return acc;
    }, '')
}


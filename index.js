
// Problem #1 //
const logBestPlayers = (array) => {
    array.forEach(team => {
        team.bestPlayers.forEach(player => {
            console.log(`${player.name} - ${player.position} - College: ${player.college.university}`);
        });
    });
};

// Problem #2 //
const getSuperBowlWinners = (array) => {
    return array.filter(team => {
        const results = team.bestPlayoffResults;
        for (let i = 0; i < results.length; i++){
            if (results[i].round === 'Final' && results[i].result === 'Won'){
                return true;
            }
        }
    });
};

// Problem #3 //
const getTeamsByCollege = (array, college) => {
    return array.filter(team => {
        const players = team.bestPlayers;
        for (let i = 0; i < players.length; i++){
            if (players[i].college.university === college){
                return true;
            }
        }
    });
};

console.log(getTeamsByCollege(teams, 'LSU'));
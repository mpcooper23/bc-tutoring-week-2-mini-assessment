
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

// Problem #4 //
const mapTeams = (array) => {
    return array.map(team => {
        return {
            team: `${team.location } ${team.teamName}`,
            bestPlayer: `${team.bestPlayers[0].name}`,
            bestPlayoffResult: `${team.bestPlayoffResults[0].year} ${team.bestPlayoffResults[0].round}`
        }
    });
};

// Problem #5 // 
const reducePlayoffResults = (array) => {
    return array.reduce((acc, team) => {
        team.bestPlayoffResults.forEach(r => {
            acc.push(`${r.result} ${r.year} ${r.round} against the ${r.opponent}`);
        })
        return acc;
    }, []);
};

// Problem #6 //
const funnyTeams = (array) => {
    return array.reduce((acc, team) => {
        acc += team.bestPlayers[0].college.university + " " + team.teamName + "\n";
        return acc;
    }, "");
};

console.log(funnyTeams(teams));
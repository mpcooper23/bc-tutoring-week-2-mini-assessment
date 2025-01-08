# bc-tutoring-week-2-mini-assessment

1. Create a function called `logBestPlayers` that takes in one parameter - `array` - which represents an array of NFL team objects like the one in data.js. This function should use the `forEach` method to iterate through the input array and then it should use the `forEach` method again to iterate through each team's `bestPlayers` property. At each iteration, the function should log every player's name, position, and which college they attended.

```javascript
// example output
logBestPlayers(teams);
/*
LOG =>
Alvin Kamara - Running Back - College: University of Tennessee
Jayden Daniels - Quarterback - College: LSU
Terry McLaurin - Wide Receiver - College: Ohio State
Joe Burrow - Quarterback - College: LSU
Ja'Marr Chase - Wide Receiver - College: LSU
Jared Goff - Quarterback - College: University of California
Jahmyr Gibbs - Running back - College: University of Alabama
*/
```

2. Create a function called `getSuperbowlWinners` that takes in one parameter - `array` - which represents an array of NFL team objects like the one in data.js. This function should use the native filter method to return a new array of only the NFL team objects that have won a Superbowl (note that in the `bestPlayoffResults` arrays a Superbowl appearance is marked as "Final" at the round key).

3. Create a function called `getTeamsByCollege` that takes in two parameters - `array` & `team`; `array` represents an array of NFL team objects like the one in data.js; `team` is a string of the college a player attended. This function should use the native filter method to return a new array of only the NFL team objects who have a player that attended the input college.

4. Create a function called `mapTeams` that takes in one parameter - `array` - which represents an array of NFL team objects like the one in data.js. This function should use the native map method to return a new array of objects that looks like the example below. For the `bestPlayer` and `bestPlayoffResult` keys only need to access the current team's zero index player and playoff result.

```javascript
// example output
mapTeams(teams);
/*
RETURNS =>
[
    {team: 'New Orleans Saints', bestPlayer: 'Alvin Kamara', bestPlayoffResult: '2009 Final'},
    {team: 'Washington D.C. Commanders', bestPlayer: 'Jayden Daniels', bestPlayoffResult: '1991 Final'},
    {team: 'Cincinnati Bengals', bestPlayer: 'Joe Burrow', bestPlayoffResult: '2021 Final'},
    {team: 'Detroit Lions', bestPlayer: 'Jared Goff', bestPlayoffResult: '2023 Conference Championship'}
];
*/
```

5. Create a function called `reducePlayoffResults` that takes in one parameter - `array` - which represents an array of NFL team objects like the one in data.js. This function should use the native reduce method to return a new array of strings, where each string follows this format: `<result of game> <year of playoff game> <round of playoff game> against the <opponent in playoff game>`.

```javascript
// example output
reducePlayoffResults(teams);
/*
RETURNS =>
[
    'Won 2009 Final against the Indianapolis Colts', 
    'Lost 2018 Conference Championship against the Los Angeles Rams', 
    'Won 1991 Final against the Buffalo Bills', 
    'Won 1987 Final against the Denver Broncos', 
    'Lost 2021 Final against the Los Angeles Rams', 
    'Lost 2022 Conference Championship against the Kansas City Chiefs', 
    'Lost 2023 Conference Championship against the San Francisco 49ers'
]
*/
```

6. Create a function called `funnyTeams` that takes in one parameter - `array` - which represents an array of NFL team objects like the one in data.js. This function should use the native reduce method to return a string of each team's name preceeded by the college name of their zero index best player.

```javascript
// example output
funnyTeams(teams);
/*
RETURNS =>
"University of Tennessee Saints\nLSU Commanders\nLSU Bengals\nUniversity of California Lions\n"
*/
```
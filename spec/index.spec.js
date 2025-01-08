describe("Bootcamp Tutoring Week 2 - Mini-assessment", function(){

    describe("logBestPlayers", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
        });
      
        afterEach(function () {
        console.log.restore();
        });
        it('should use the forEach method twice', function(){
            const func = logBestPlayers.toString();
            const regex = /.forEach\(/g;
            const match = func.match(regex);
            console.log(match);
            assert.equal(match.length > 1, true);
        });
        it('should log the correct data', function(){
            const correct = [
                "Alvin Kamara - Running Back - College: University of Tennessee",
                "Jayden Daniels - Quarterback - College: LSU",
                "Terry McLaurin - Wide Receiver - College: Ohio State",
                "Joe Burrow - Quarterback - College: LSU",
                "Ja'Marr Chase - Wide Receiver - College: LSU",
                "Jared Goff - Quarterback - College: University of California",
                "Jahmyr Gibbs - Running back - College: University of Alabama"
            ];
            logBestPlayers(teams);
            console.log.args.forEach((item, index) => {
                assert.equal(item[0], correct[index]);
            });
        });
    });

    describe("getSuperBowlWinners", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', function(){
            const result = getSuperBowlWinners(teams);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = getSuperBowlWinners(teams);
            const correct = [teams[0], teams[1]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', function(){
            const result = getSuperBowlWinners(teams);
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("getTeamsByCollege", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', function(){
            const result = getTeamsByCollege(teams, 'LSU');
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = getTeamsByCollege(teams, 'LSU');
            const correct = [teams[1], teams[2]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', function(){
            const result = getTeamsByCollege(teams, 'LSU');
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("mapTeams", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', function(){
            const result = mapTeams(teams);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = mapTeams(teams);
            const correct = [
                {team: 'New Orleans Saints', bestPlayer: 'Alvin Kamara', bestPlayoffResult: '2009 Final'},
                {team: 'Washington D.C. Commanders', bestPlayer: 'Jayden Daniels', bestPlayoffResult: '1991 Final'},
                {team: 'Cincinnati Bengals', bestPlayer: 'Joe Burrow', bestPlayoffResult: '2021 Final'},
                {team: 'Detroit Lions', bestPlayer: 'Jared Goff', bestPlayoffResult: '2023 Conference Championship'}
            ];
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', function(){
            const result = mapTeams(teams);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("reducePlayoffResults", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return an array', function(){
            const result = reducePlayoffResults(teams);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = reducePlayoffResults(teams);
            const correct = [
                'Won 2009 Final against the Indianapolis Colts', 
                'Lost 2018 Conference Championship against the Los Angeles Rams', 
                'Won 1991 Final against the Buffalo Bills', 
                'Won 1987 Final against the Denver Broncos', 
                'Lost 2021 Final against the Los Angeles Rams', 
                'Lost 2022 Conference Championship against the Kansas City Chiefs', 
                'Lost 2023 Conference Championship against the San Francisco 49ers'
            ]
            assert.deepEqual(result, correct);
        });
        it('should use the native reduce method', function(){
            const result = reducePlayoffResults(teams);
            Array.prototype.reduce.called.should.be.true;
        });
    });
});
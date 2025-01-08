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

    describe("getSuperBowlWinners", function(){
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
});
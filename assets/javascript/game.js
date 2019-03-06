/* =========================================
go to game 
see instructions see 4 gems, variables 
click a gem 
update page variables 
win conditions
lose conditions 
reset game 
*/

var game = {
    gemOne: 0,
    gemTwo: 0,
    gemThree: 0,
    gemFour: 0,
    targetNum: 0,
    currentNum: 0,
    wins: 0,
    losses: 0,

    updateScreen: function(){
        
     },


    gemClick: function (gem) {
        currentNum + this.gem;
        this.checkCondition();
        this.updateScreen();
    },


    checkCondition: function (currentNum, targetNum) {
        if (this.currentNum === this.targetNum) {
            alert("You won!");
            this.wins++;
            this.newGame();
        }
        else if (this.currentNum > this.targetNum) {
            alert("Better luck next time");
            this.losses++;
            this.newGame();
        }
    },

    // checkWins: function () { console.log(game.targetNum, game.currentNum, game.wins, game.losses) },


    newGame: function () {
        function crystalCalc() {
            this.num = Math.floor(Math.random() * (12 - 1 + 1) + 1)
            return num
        }
        function numberCalc() {
            this.num = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            return num
        }

        this.targetNum = numberCalc();
        this.gemOne = crystalCalc();
        this.gemTwo = crystalCalc();
        this.gemThree = crystalCalc();
        this.gemFour = crystalCalc();
        this.currentNum = 0;
    },

    // checkStart: function () {
    //     console.log(game.targetNum, game.gemOne, game.gemTwo, game.gemThree, game.gemFour)
    // },

}
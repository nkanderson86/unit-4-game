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

    updateScreen: function () {
        $("#target-num").text(this.targetNum);
        $("#wins").text(this.wins);
        $("#losses").text(this.losses);
        $("#user-score").text(this.currentNum);

    },


    gemClick: function (gem) {
        this.currentNum += gem;
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

        console.log

        $("#gem-one").attr("value", this.gemOne);
        $("#gem-two").attr("value", this.gemTwo);
        $("#gem-three").attr("value", this.gemThree);
        $("#gem-four").attr("value", this.gemFour);

    },

}


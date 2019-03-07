/* =========================================Pseudo code from the start 
go to game 
see instructions see 4 gems, variables 
click a gem 
hide instructions & start button
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

    // method to update my page to reflect the numbers from the current game, as well as the running tally of wins and losses.
    updateScreen: function () {
        $("#target-num").text(this.targetNum);
        $("#wins").text(this.wins);
        $("#losses").text(this.losses);
        $("#user-score").text(this.currentNum);

    },

    // method to add the value of each gem to the current number variable, update the screen, and check for a win or loss.
    gemClick: function (gem) {
        this.currentNum += gem;
        this.checkCondition();
        this.updateScreen();
    },

    // checking for a win or a loss here, and if either is true calling a new game.
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

    // newGame method, generate the random numbers for my target number and each gem button. Sets the value of each gem button to the random number, the value attribute of that button is used to add to the total in the gemClick method.

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

        $("#gem-one").attr("value", this.gemOne);
        $("#gem-two").attr("value", this.gemTwo);
        $("#gem-three").attr("value", this.gemThree);
        $("#gem-four").attr("value", this.gemFour);

    },

}



$(document).ready(function () {

    // random number functions


    // variables declaration, setting everything to zero and the startGame function will assign values
    var randomNum = 0;

    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    var totalGuess = 0;
    var wins = 0;
    var losses = 0;
    // gameWon & gameOver functions needed here 

    //set up on click event to start game 

    function startGame() {
        // reset values for variables -- used at start of game 
        randomNum = numberCalc();
        crystal1 = crystalCalc();
        crystal2 = crystalCalc();
        crystal3 = crystalCalc();
        crystal4 = crystalCalc();

        // fill in target number, user score, wins & losses on screen
        $("#target-num").text(randomNum);
        $("#user-score").text(totalGuess);
        $("#wins").text(wins);
        $("#losses").text(losses);

    }


    // on click 

    $("#button-1").click(function () {
        totalGuess += crystal1;
        if (gameWon()) {
            winUpdate();
        }
        else if (gameLost()) {
            lossUpdate();
        }

        displayUpdate();

    })






})
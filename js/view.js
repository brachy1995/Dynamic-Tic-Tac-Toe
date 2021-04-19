
var playerFirstSelections = [];
  var playerSecondSelections = [];
  var currentPlayer = 0;
  var boardSize=3;
    $('#board-size').on('change', function() {
         boardSize = $(".board-size option:selected").val();
         drawBoard();
      });

            // Main Function for drawing a Board
    function drawBoard() {
      var parent = document.getElementById('play-board');
      setParentIdToChild(parent);
      //creates Row and Column of board
      createRowAndColumnInBoard();
      setWinnerCombination();
    }

      function setParentIdToChild(parent) {
        this.parent = parent;
        while (this.parent.hasChildNodes()) {
          this.parent.removeChild(this.parent.firstChild);
        }
      }

      function createRowAndColumnInBoard() {
        this.setColumn = 1; //local varaible for setting column
      for (size = 0; size < boardSize; size++) {
        // adding row from the input
        this.row = document.createElement('tr');
        for (rowIndex = 0; rowIndex < boardSize; rowIndex++) {
          // adding column as per row..here row=column
          this.column = document.createElement('td');
          this.column.id = this.setColumn; // setting col.id = 1;
          this.column.addEventListener('click', setHandler);
          row.appendChild(this.column);
          this.setColumn++;
        }
        this.parent.appendChild(this.row);
      }
    }




  var setHandler = function (e) {
        if($(this).data('clicked')) {
            alert('This button is been clicked already');
        }
        else{
            if (currentPlayer == 0) {
                this.innerHTML = 'X';
                playerFirstSelections.push(parseInt(this.id));
                playerFirstSelections.sort(function (a, b) {
                  return a - b; // sorting in accending order
                });
                this.classList.add('x');
              } else {
                this.innerHTML = 'O';
                playerSecondSelections.push(parseInt(this.id));
                playerSecondSelections.sort(function (a, b) {
                  return a - b; // sorting in accending order
                });
                this.classList.add('o');
              }
              // check whether if it has a  Winner
              if (hasAWinner()) {
                if (currentPlayer == 0) {
                  alert('X Wins the game');
                } else {
                  alert('O Wins the game');
                }
                //  whether X wins or O wins;
                reset();
                drawBoard();
              } else if (
                playerSecondSelections.length + playerFirstSelections.length ==
                boardSize * boardSize
              ) {
                alert('Game Over');
                reset();
                drawBoard();
              } else {
                currentPlayer = currentPlayer === 0 ? 1 : 0;
                $(this).data('clicked', true);
              }
        }
         };
 //Reset function
 function reset() {
  currentPlayer = 0;
  playerFirstSelections = [];
  playerSecondSelections = [];
}

  window.addEventListener('load', drawBoard);



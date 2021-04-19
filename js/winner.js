var winners = [];
function setValueForRowAndColumn(){
  var valueForRow = 1;
  var valueForColumn = 1;

  for (j = 0; j < boardSize; j++) {
    //for pushing rows into winners array
    this.rowIndex = [];
    //i = rowNum
    for (i = 0; i < boardSize; i++) {
      this.rowIndex.push(valueForRow);
      valueForRow++;
    }
    // console.log(this.rowIndex);
    winners.push(this.rowIndex);
    //for pushing columns into winners array
    this.columnIndex = [];
    this.tempvalueForColumn = valueForColumn;
    //i = colNum
    for (i = 0; i < boardSize; i++) {
      this.columnIndex.push(this.tempvalueForColumn);
      this.tempvalueForColumn += boardSize;
    }
    winners.push(this.columnIndex);
    valueForColumn++;
  }
}
function setValueForDiagonals(){
  var valueForDiagonal = 1;
  this.diagonalIndexOne = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    this.diagonalIndexOne.push(valueForDiagonal);
    valueForDiagonal += boardSize + 1;
  }
  winners.push(this.diagonalIndexOne);
  valueForDiagonal = boardSize;
  this.diagonalIndexTwo = [];
  // l = Digonal Num
  for (l = 0; l < boardSize; l++) {
    this.diagonalIndexTwo.push(valueForDiagonal);
    valueForDiagonal += boardSize - 1;
  }
  winners.push(this.diagonalIndexTwo);
}

function hasAWinner() {
    this.win = false;
    this.playerSelections = [];
    this.playerSelections =
      currentPlayer == 0 ? playerFirstSelections : playerSecondSelections;
    if (this.playerSelections.length >= boardSize) {
      // setting winners from its length
      for (sets = 0; sets < winners.length; sets++) {
        this.setWinner = winners[sets];
        this.setFound = true;
        for (rowIndex = 0; rowIndex < setWinner.length; rowIndex++) {
           this.found = false;
          for (s = 0; s < this.playerSelections.length; s++) {
            if (this.setWinner[rowIndex] == this.playerSelections[s]) {
              this.found = true;
              break;
            }
          }
          if (this.found == false) {
            this.setFound = false;
            break;
          }
        }
        if (this.setFound == true) {
          this.win = true;
          break;
        }
      }
    }
    return this.win;
  }

  function setWinnerCombination() {
    setValueForRowAndColumn();
    setValueForDiagonals();
  }




class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex]) {
      return;
    }
    this.gameField[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

  getWinner() {
    const field = this.gameField;
    // rows
    for (let i = 0; i < this.gameField.length; i++) {
      if (
        field[i].every((elem) => {
          return elem === field[i][0] && elem !== null;
        })
      ) {
        return field[i][0];
      }
    }
    // columns
    for (let i = 0; i < field[0].length; i++) {
      if (
        field[0][i] === field[1][i] &&
        field[0][i] === field[2][i] &&
        field[0][i] !== null
      ) {
        return field[0][i];
      }
    }
    // diag rigth
    if (
      field[0][0] === field[1][1] &&
      field[0][0] === field[2][2] &&
      field[0][0] !== null
    ) {
      return field[0][0];
    }
    if (
      field[0][2] === field[1][1] &&
      field[0][2] === field[2][0] &&
      field[0][2] !== null
    ) {
      return field[0][2];
    }
    return null;
  }

  noMoreTurns() {
    return !this.gameField.some((row) => row.includes(null));
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;

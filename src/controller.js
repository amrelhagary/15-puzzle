'use strict';

import { Tile } from "./model";

export class Controller {

  constructor(conf) {
    this.boardModel = conf.boardModel;
    this.boardView = conf.boardView;
    this.movesElement = conf.movesElement;
  }


  startGame() {
    this.resetMoves();
    this.boardView.setController(this);
    this.boardView.render(this.boardModel.create());
  }

  moveThisTile(tile) {
    let tableRow = parseInt(tile.x);
    let tableColumn = parseInt(tile.y);

    if (
      this.checkIfMoveable(tableRow, tableColumn, "up") ||
      this.checkIfMoveable(tableRow, tableColumn, "down") ||
      this.checkIfMoveable(tableRow, tableColumn, "left") ||
      this.checkIfMoveable(tableRow, tableColumn, "right")) {

      this.incrementMoves();
    }
    else {
      alert("ERROR: Cannot move tile!\nTile must be next to a blank space.");
    }

    if (this.checkIfWinner()) {
      alert(`Congratulations! You solved the puzzle in ${this.movesElement.textContent} moves.`);
      this.startGame();
    }

  }

  checkIfMoveable(rowCoordinate, columnCoordinate, direction) {
    // The following variables an if else statements
    // make the function work for all directions.
    let rowOffset = 0;
    let columnOffset = 0;
    let rows = parseInt(this.boardModel.rows);
    let cols = parseInt(this.boardModel.cols);

    if (direction == "up") {
      rowOffset = -1;
    }
    else if (direction == "down") {
      rowOffset = 1;
    }
    else if (direction == "left") {
      columnOffset = -1;
    }
    else if (direction == "right") {
      columnOffset = 1;
    }

    let arrayForBoard = this.boardModel.tiles;
    // Check if the tile can be moved to the spot.
    // If it can, move it and return true.
    if (rowCoordinate + rowOffset >= 0 && columnCoordinate + columnOffset >= 0 &&
      rowCoordinate + rowOffset < rows && columnCoordinate + columnOffset < cols
    ) {
      const newPos = arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset].value;
      const oldPos = arrayForBoard[rowCoordinate][columnCoordinate].value;

      if (newPos == 0) {
        //swap the oldPos with newPos
        arrayForBoard[rowCoordinate + rowOffset][columnCoordinate + columnOffset].value = oldPos;
        arrayForBoard[rowCoordinate][columnCoordinate].value = newPos;
        this.boardModel.tiles = arrayForBoard;
        this.boardView.render(this.boardModel);
        return true;
      }
    }

    return false;
  }

  resetMoves() {
    let e = this.movesElement;
    e.innerHTML = 0;
  }

  incrementMoves() {
    let e = this.movesElement;
    let textMoves = parseInt(e.textContent);
    textMoves++;
    e.innerHTML = textMoves;
  }

  checkIfWinner() {
    let count = 1;
    let arrayForBoard = this.boardModel.tiles;
    for (let i = 0; i < this.boardModel.rows; i++) {
      for (let j = 0; j < this.boardModel.cols; j++) {
        if (arrayForBoard[i][j] != count) {
          if (!(count === this.boardModel.rows * this.boardModel.cols && arrayForBoard[i][j] === 0)) {
            return false;
          }
        }
        count++;
      }
    }

    return true;
  }
}

'use strict';

export class Tile {
    constructor(value, x, y) {
      this.value = value;
      this.x = x;
      this.y = y;
    }

    toString() {
      return `v: ${this.value}, x: ${this.x}, y: ${this.y}`;
    }
}

export class Board {

  constructor(cols, rows) {
    this.cols = cols;
    this.rows = rows;
  }

  getBoard() {
    return this.arrayForBoard;
  }

  setTiles(tiles) {
    this.tiles = tiles;
  }

  create() {
    const r = this.rows;
    const c = this.cols;

    const usedNumbers = new Array( r * c );
    const arrayOfNumbers = new Array ( r * c );

    // main board array
    var arrayForBoard = new Array(r);
    for(let i = 0 ; i < r; i++) {
        arrayForBoard[i] = new Array(c);
    }
    
    // setup temporary array locating unique numbers
    for(let i = 0; i < r * c; i++) {
      usedNumbers[i] = 0;
    }

    // fill arrayOfNumbers start with random number
    for(let i = 0; i < r * c; i++) { 
      let randomNumber = Math.floor(Math.random() * r * c);
      if(usedNumbers[randomNumber] == 0 ) {
        usedNumbers[randomNumber] = 1;
        arrayOfNumbers[i] = randomNumber;
      } else {
        i--;
      }
    }

    let count = 0;
    for(let i = 0 ; i < r; i++) {
      for(let j = 0; j < c; j++) {
        let value = arrayOfNumbers[count++];
        let tile = new Tile(value, i , j);
        arrayForBoard[i][j] = tile;
      }
    }
    
    this.setTiles(arrayForBoard);

    return this;
  }

  toString() {
    return `${this.rows} x ${this.cols}`;
  }

}

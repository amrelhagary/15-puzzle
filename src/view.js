'use strict';

import { Tile } from "./model";

export class BoardView {

  constructor(targetElement) {
    window.BoardView = this;
    this.element = targetElement;
  }

  setController(controller) {
    this.controller = controller;
  }

  render(board) {
    
    let tableGrid = document.createElement('table');
    tableGrid.setAttribute('id', 'tableGrid');

    for(let i = 0; i < board.rows; i++) {
      
      let tr  = document.createElement('tr');

      for(let j = 0; j < board.cols; j++) {
        
        let v = board.tiles[i][j].value;
        let e = document.createElement('td');
        if( v == 0 ) {
          let txt = document.createTextNode('');
          e.appendChild(txt);
          e.setAttribute('class', 'blank');
        } else {
          let txt = document.createTextNode(v);
          e.appendChild(txt);
          e.setAttribute('class', 'tile');
        }
        e.setAttribute('x', i);
        e.setAttribute('y', j);
        e.setAttribute('v', v);

        if(!this.controller) {
          throw 'no controller associate with view';
        }

        e.addEventListener('click', window.BoardView.moveThisTile)
        tr.appendChild(e);
      }

      tableGrid.appendChild(tr);
    }

    if(document.getElementById('tableGrid')) {
      document.getElementById('tableGrid').replaceWith(tableGrid);
    } else {
      this.element.appendChild(tableGrid);
    }

  }

  moveThisTile(e) {
    let v = e.target.getAttribute('v');
    let x = e.target.getAttribute('x');
    let y = e.target.getAttribute('y');
    let tile = new Tile(v, x, y);
    window.BoardView.controller.moveThisTile(tile);
  }
}

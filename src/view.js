import { Tile } from "./model";
import { Controller } from './controller';

export class BoardView {

  constructor(targetElement) {
    this.element = targetElement;
  }

  setController(controller) {
    this.controller = new Controller();
  }

  render(board) {

    let tableGrid = document.createElement('table');

    for(let i = 0; i < board.rows; i++) {
      
      let tr  = document.createElement('tr');

      for(let j = 0; j < board.cols; j++) {
        
        
        let td = null;
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

        e.addEventListener('click', this.controller.moveThisTile)
        tr.appendChild(e);
      }

      tableGrid.appendChild(tr);
    }

    this.element.appendChild(tableGrid);
  };
}

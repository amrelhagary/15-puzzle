import './index.scss';
import { Board } from './model';
import { Controller } from './controller';
import { BoardView } from './view';

// initialize the board
try {
    var targetElement = document.getElementById('root');
    var boardModel = new Board(4, 4).create();
    var boardView = new BoardView(targetElement);
    var controller = new Controller(boardModel, boardView);
    controller.initialize();
} catch(e) {
    console.error(e);
}

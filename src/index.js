'use strict';

import './index.scss';
import { Board } from './model';
import { Controller } from './controller';
import { BoardView } from './view';

// initialize the board
try {
    var targetElement = document.getElementById('root');
    var movesElement = document.getElementById('moves');
    var boardModel = new Board(4, 4);
    var boardView = new BoardView(targetElement);

    var conf = {
        movesElement: movesElement,
        boardModel: boardModel,
        boardView: boardView
    };

    var controller = new Controller(conf);
    
    var buttonstartNewGame = document.getElementById('startNewGame');
    buttonstartNewGame.addEventListener('click', function() {
        controller.startGame();
    });

    controller.startGame();
} catch(e) {
    console.error(e);
}

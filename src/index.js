'use strict';

import './index.scss';
import { Board } from './model';
import { Controller } from './controller';
import { BoardView } from './view';

// initialize the board
try {
    var targetElement = document.getElementById('root');
    var movesElement = document.getElementById('moves');
    var cols = document.getElementById('cols');
    var rows = document.getElementById('rows');

    var boardModel = new Board(3, 3);
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

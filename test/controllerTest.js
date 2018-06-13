'use strict';

import { Controller as BoardController } from '../src/controller';
import { BoardView } from '../src/view';
import { Tile, Board } from '../src/model';

const chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

const sinon = require('sinon');
const jsdom = require('mocha-jsdom');


describe('Testing Number of cols and rows', function() {
    
    it('should have a cols and rows', function() {
        var boardModel = new Board(3, 3);
        expect(boardModel.cols).to.equal(3);
        expect(boardModel.rows).to.equal(3);
    })

    it('should number of tiles equal to cols multiple of rows', function() {
        var boardModel = new Board(3, 3);
        boardModel.create();
        var length = boardModel.tiles.reduce((count, row) => {
            return count + row.length;
        }, 0);
        expect(length).to.equal(9);
    })
});


describe('Testing board controller object', function() {

    var rootElement;
    var movesElement;

    // mocking the jsdom
    jsdom();

    beforeEach(function() {
        rootElement = document.createElement('div');
        // rootElement.setAttribute('id', 'root');
        movesElement = document.createElement('span');
        // movesElement.setAttribute('id', 'moves');
    });

    it('should create an instance of controller', function() {

        var boardModel = new Board(3, 3).create();
        var boardView = new BoardView(rootElement);

        var conf = {
            movesElement: movesElement,
            boardModel: boardModel,
            boardView: boardView
        };
    
        var controller = new BoardController(conf);
        controller.startGame();
        expect(controller).to.be.an.instanceof(BoardController);
    });
});
'use strict';

import { Tile, Board } from '../src/model';

const chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

describe('Testing Tile Model', function() {

    it('should create an instance of Tile', function() {
        var tile = new Tile(1, 0, 0);
        expect(tile.value).to.be.equal(1);
        expect(tile.x).to.be.equal(0);
        expect(tile.y).to.be.equal(0);
        expect(tile).to.be.an.instanceof(Tile);
    });
});

describe('Testing Board Model', function() {

    it('should create an instance of BoardModel', function() {
        var board = new Board(3, 3);
        expect(board.cols).to.be.equal(3);
        expect(board.rows).to.be.equal(3);
        expect(board).to.be.an.instanceof(Board);
    });
});

describe('Testing Board Creation', function() {

    it('should 2d array filled with tiles object', function() {
        var board = new Board(3, 3);
        expect(board.cols).to.be.equal(3);
        expect(board.rows).to.be.equal(3);
        expect(board).to.be.an.instanceof(Board);
    });
});
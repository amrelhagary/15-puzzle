export class Controller {

  constructor(boardModel, boardView) {
    this.boardModel = boardModel;
    this.boardView = boardView;
  }

  initialize() {
    this.boardView.setController(this);
    this.boardView.render(this.boardModel);
  };

  moveThisTile (e) {
    console.log(e.target.getAttribute('v'));
  }
  
}

import React from 'react';

import './Board.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  drop(event) {
    const data = JSON.parse(event.dataTransfer.getData('sleddog/component') || '');
    event.preventDefault();
  }
  dragOver(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Board">
        <div className="layout" onDragOver={event => this.dragOver(event)}
          onDropCapture={event => this.drop(event)}></div>
      </div>
    )
  }
}

export default Board;
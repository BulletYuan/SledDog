import React from 'react';
import ErrorHandler from './services/ErrorHandler';

import Header from './components/header/Header';
import Side from './components/side/Side';

import './App.scss';
import './base.scss';

import MenuData from './mock/menu.json';
import Board from './components/board/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    const errorHandler = new ErrorHandler();
    errorHandler.watch();
  }
  initMenu() {
    return MenuData.data;
  }
  render() {
    const menu = this.initMenu();
    return (
      <div className="App">
        <Header />
        <div className="body flex flex-justify-start flex-align-stretch">
          <Side menu={menu} />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;

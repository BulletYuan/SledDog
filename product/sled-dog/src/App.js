import React from 'react';

import Header from './components/header/Header';
import Side from './components/side/Side';

import './App.scss';
import './base.scss';

function initMenu() {
  const menu = [];
  const basicMenu = {
    title: 'Basic',
    children: [
      {
        title:'Text',
        module:'',
        style:'',
      },
      {
        title:'Image',
        module:'',
        style:'',
      },
      {
        title:'Video',
        module:'',
        style:'',
      }
    ]
  }
  menu.push(basicMenu);
  return menu;
}

function App() {
  const menu = initMenu();
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Side menu={menu} />
      </div>
    </div>
  );
}

export default App;

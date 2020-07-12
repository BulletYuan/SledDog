import React from 'react';
import './Header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Header flex flex-justify-between flex-align-stretch">
        <p className="logo">SLED<span>Dog</span></p>
      </div>
    )
  }
}
export default Header;

import React from 'react';
import './Side.scss';

function renderSubMenu(mc) {
  return (
    <a className="subMenu">{mc.title}</a>
    {renderMenu(mc.children)}
  )
}

function renderMenu(menu){
  return menu.map((mc, i) =>
      <ul>
        <li key={i}>{mc.children&&mc.children.length>0?renderSubMenu(mc):mc.title}</li>
      </ul>
    )
}

function Side(props) {
  console.log(props);
  const { menu } = props;
  return (
    <div className="Side">
      <ul>
        {menu.map((m, i) => (<li key={i}>{m.children && m.children.length > 0 ? renderSubMenu(m) : m.title}</li>))}
      </ul>
    </div>
  )
}
export default Side;

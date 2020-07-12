import React from 'react';
import './Side.scss';

class Side extends React.Component {
  constructor(props) {
    super(props);
    const { menu } = this.props;
    this.state = {
      menu,
    }
  }

  dragStart(event, data) {
    event.dataTransfer.setData('sleddog/component', JSON.stringify(data));
    const dom = event.currentTarget;
    dom.classList.add('draging');
  }
  dragExit(event) {
    console.log('dragExit')
    const dom = event.currentTarget;
    dom.classList.remove('draging');
  }

  activeSubMenu(mc, i) {
    const { menu } = this.state;
    mc.active = !mc.active;
    menu.splice(i, 1, mc);
    this.setState({
      menu,
    })
  }

  renderSubMenu(mc, i) {
    const cls = mc.active ? 'sub-menu active' : 'sub-menu';
    return (
      <div key={i} className={cls}>
        <p onClick={() => this.activeSubMenu(mc, i)}>{mc.title}</p>
        <ul>
          {this.renderMenu(mc.children)}
        </ul>
      </div>
    )
  }

  renderMenu(menu = []) {
    if (menu && menu.length > 0) {
      return menu.map((mi, i) => {
        if (mi.children && mi.children.length > 0) {
          return this.renderSubMenu(mi, i);
        } else {
          return (
            <li key={i} draggable onDragStart={event => this.dragStart(event, mi)}
              onDragExit={event => this.dragExit(event)}
              onDragEnd={event => this.dragExit(event)}>
              {
                mi.title
              }
            </li>
          )
        }
      })
    }
  }

  render() {
    return (
      <div className="Side">
        <ul>
          {this.renderMenu(this.state.menu)}
        </ul>
      </div>
    )
  }
}
export default Side;

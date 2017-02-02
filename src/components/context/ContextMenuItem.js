import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextMenuItem.scss');
}

export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="li" className="ax-context-menu__item">
        <a { ...rest } className="ax-context-menu__item-link">
          { children }
        </a>
      </Base>
    );
  }
}

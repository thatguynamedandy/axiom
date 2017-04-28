import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import classnames from 'classnames';
import './ContextMenuItem.css';


export default class ContextMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
  };

  render() {
    const { children, focused, ...rest } = this.props;
    const classes = classnames('ax-context-menu__item', {
      'ax-context-menu__item--focused': focused,
    });

    return (
      <Base Component="li">
        <button { ...rest } className={ classes }>
          { children }
        </button>
      </Base>
    );
  }
}

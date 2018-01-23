import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import CheckBox from '../form/CheckBox';

export default class ContextMenuItemMulti extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    selected: PropTypes.bool,
  };

  render() {
    const { children, disabled, focused, selected, ...rest } = this.props;
    const classes = classnames('ax-context-menu__item-multi', {
      'ax-context-menu__item-multi--disabled': disabled,
      'ax-context-menu__item-multi--focused': focused,
    });

    return (
      <div className={ classes } disabled={ disabled }>
        <CheckBox { ...rest } checked={ selected } disabled={ disabled }>
          { children }
        </CheckBox>
      </div>
    );
  }
}

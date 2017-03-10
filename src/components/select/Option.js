import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import {
  Base,
  ContextMenuItem,
  Icon,
} from 'bw-axiom';

export default class Option extends Component {
  static propTypes = {
    children: PropTypes.node,
    focused: PropTypes.bool,
    selected: PropTypes.bool,
    value: PropTypes.any.isRequired,
  };

  render() {
    const { children, focused, selected, ...rest } = this.props;
    const classes = classnames('ax-select__option', {
      'ax-select__option--active': selected,
    });

    return (
      <ContextMenuItem { ...rest } focused={ focused }>
        <Base className={ classes }>
          { do { if (selected) {
            <Icon name="tick" />;
          } } }
          { children }
        </Base>
      </ContextMenuItem>
    );
  }
}

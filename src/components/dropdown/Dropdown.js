import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  DropdownTarget,
  DropdownContent,
  Position,
  PositionTarget,
  PositionContent,
  findComponent,
} from 'bw-axiom';

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.string,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func,
    openDropdown: PropTypes.func,
  };

  static childContextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
  };

  static defaultProps = {
    position: 'bottom',
  };

  getChildContext() {
    return {
      closeDropdown: ::this.close,
      openDropdown: ::this.open,
    };
  }

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  open() {
    const { openDropdown = () => {} } = this.context;
    this.setState({ isVisible: true });
    openDropdown();
  }

  close() {
    const { closeDropdown  = () => {} } = this.context;
    this.setState({ isVisible: false });
    closeDropdown();
  }

  render() {
    const { children, position, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position
          { ...rest }
          isVisible={ isVisible }
          onMaskClick={ ::this.close }
          position={ position }>
        <PositionTarget>{ findComponent(children, DropdownTarget) }</PositionTarget>
        <PositionContent>{ findComponent(children, DropdownContent) }</PositionContent>
      </Position>
    );
  }
}

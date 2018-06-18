import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { findComponent } from '@brandwatch/axiom-utils';
import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import { DropdownSourceRef } from './DropdownSource';
import { DropdownTargetRef } from './DropdownTarget';

/* eslint-disable react/no-find-dom-node */
export default class Dropdown extends Component {
  static propTypes = {
    /**
     * Children inside Dropdown should contain all of and
     * only DropdownTarget and DropdownSource
     */
    children: PropTypes.node.isRequired,
    /**
     * Adds control to enable or disable showing the DropdownSource
     */
    enabled: PropTypes.bool,
    /** Controls the starting offset of the content */
    offset: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * Invoked when the Dropdown is closed.
     */
    onRequestClose: PropTypes.func,
    /**
     * Invoked when the Dropdown is opened.
     */
    onRequestOpen: PropTypes.func,
    /**
     * Controls the starting position around DropdownTarget in which the
     * DropdownSource will attempt to be placed. If that position is not available
     * due to collision, it will be placed according to the flip behaviour  until
     * a valid position is found.
     */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /** Toggle that allows the arrow of the Context component to be hidden */
    showArrow: PropTypes.bool,
  };

  static childContextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
  };

  static defaultProps = {
    enabled: true,
    position: 'bottom',
    showArrow: true,
  };

  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  componentDidMount() {
    document.addEventListener('click', e => this.handleClick(e), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', e => this.handleClick(e), true);
  }

  getChildContext() {
    return {
      closeDropdown: () => this.close(),
      openDropdown: () => this.open(),
    };
  }

  open() {
    const { onRequestOpen } = this.props;

    this.setState({ isVisible: true });

    if (onRequestOpen) onRequestOpen();
  }

  close() {
    const { onRequestClose } = this.props;

    this.setState({ isVisible: false });

    if (onRequestClose) onRequestClose();
  }

  handleClick(event) {
    if (this._content && !ReactDOM.findDOMNode(this._content).contains(event.target)) {
      this.close();
    }
  }

  render() {
    const { children, offset, position, ...rest } = this.props;
    const { isVisible } = this.state;

    return (
      <Position
          { ...rest }
          isVisible={ isVisible }
          offset={ offset }
          onMaskClick={ () => this.close() }
          position={ position }>
        <PositionTarget>
          { React.cloneElement(findComponent(children, DropdownTargetRef)) }
        </PositionTarget>
        <PositionSource ref={ (el) => this._content = el }>
          { findComponent(children, DropdownSourceRef) }
        </PositionSource>
      </Position>
    );
  }
}

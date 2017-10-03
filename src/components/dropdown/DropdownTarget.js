import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export const DropdownTargetRef = 'DropdownTarget';

export default class DropdownTarget extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static contextTypes = {
    openDropdown: PropTypes.func.isRequired,
  };

  static typeRef = DropdownTargetRef;

  handleClick(...args) {
    const { children } = this.props;
    const { openDropdown } = this.context;
    const { onClick = () => {} } = children.props;

    openDropdown();
    onClick(...args);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onClick: this.handleClick.bind(this),
    });
  }
}

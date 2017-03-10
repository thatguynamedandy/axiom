import React, { Component, PropTypes, cloneElement } from 'react';
import {
  TextInputIcon,
  Context,
  ContextMenu,
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from 'bw-axiom';
import SelectInput from './SelectInput';

export default class Select extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    const index = Math.max(props.children.findIndex((child) => child.props.selected), 0);

    this.state = {
      focusedIndex: index,
      value: props.children[index].props.value,
    };
  }

  handleMouseEnter(index) {
    this.setState({ focusedIndex: index });
  }

  handleSelect() {
    this.setState(({ focusedIndex }, { children }) =>
      ({ value: children[focusedIndex].props.value }));
  }

  focusNext() {
    this.setState(({ focusedIndex }, { children }) =>
      ({ focusedIndex: (focusedIndex === children.length - 1 ) ? 0 : focusedIndex + 1 }));
  }

  focusPrev() {
    this.setState(({ focusedIndex }, { children }) =>
      ({ focusedIndex: (focusedIndex === 0) ? children.length - 1 : focusedIndex - 1 }));
  }

  filter(str) {
    const regex = new RegExp(`^${ str }`);
    this.setState(({ focusedIndex }, { children }) => {
      const match = children.findIndex(({ props }) => regex.test(props.value));
      return { focusedIndex: (match >= 0) ? match : focusedIndex };
    });
  }

  render() {
    const { children, ...rest } = this.props;
    const { focusedIndex, value } = this.state;

    const mappedChildren = children.map((child, index) =>
      cloneElement(child, {
        onClick: ::this.handleSelect,
        onMouseEnter: this.handleMouseEnter.bind(this, index),
        selected: child.props.value === value,
        focused: index === focusedIndex,
      }));

    return (
      <Dropdown>
        <DropdownButton>
          <SelectInput
              filter={ ::this.filter }
              focusNext={ ::this.focusNext }
              focusPrev={ ::this.focusPrev }
              handleSelect={ ::this.handleSelect }
              value={ value }
              { ...rest }>
            <TextInputIcon name="chevron-down" />
          </SelectInput>
        </DropdownButton>

        <DropdownMenu>
          <Context position="bottom">
            <ContextMenu>
              { mappedChildren }
            </ContextMenu>
          </Context>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';
import {
  TextInput,
  TextInputIcon,
} from 'bw-axiom';


export default class SelectInput extends Component {
  static propTypes = {
    filter: PropTypes.func.isRequired,
    focusNext: PropTypes.func.isRequired,
    focusPrev: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
    openDropdown: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentWillUnmount() {
    clearTimeout(this.searchTimeout);
  }

  clearSearch() {
    this.setState({ search: '' });
  }

  handleKeyDown(event) {
    const { key } = event;
    const { closeDropdown, openDropdown } = this.context;
    const { focusPrev, focusNext, filter, handleSelect } = this.props;

    switch (key) {
    case 'Enter':
      event.preventDefault();
      handleSelect();
      closeDropdown();
      break;
    case 'Tab':
      closeDropdown();
      break;
    case 'Escape':
      closeDropdown();
      break;
    case ' ': //Space
      openDropdown();
      break;
    case 'ArrowDown':
      openDropdown();
      focusNext();
      break;
    case 'ArrowUp':
      openDropdown();
      focusPrev();
      break;
    default:
      if (/^[a-zA-Z0-9]+$/.test(key)) {
        clearTimeout(this.searchTimeout);
        const search = `${ this.state.search }${ key }`;
        filter(search);
        this.setState({ search });
        this.searchTimeout = setTimeout(::this.clearSearch, 500);
      }
    }
  }

  render() {
    const { value, ...rest } = this.props;

    return (
      <TextInput
          { ...omit(rest, ['focusNext', 'focusPrev', 'filter', 'handleSelect']) }
          onKeyDown={ ::this.handleKeyDown }
          placeholder={ null }
          readOnly={ true }
          value={ value }>
        <TextInputIcon name="chevron-down" />
      </TextInput>
    );
  }
}

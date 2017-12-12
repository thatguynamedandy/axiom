import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import SearchForm from '../SearchForm';

class SearchFormExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      SearchForm: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      SearchForm: components.SearchForm,
    };

    const initalProps = {
      SearchForm: {
      },
    };

    const initialPropOptions = {
      SearchForm: {
      },
    };

    return (
      <ExampleConfig
          hasVisual={ false }
          initialPropOptions={ initialPropOptions }
          initialProps={ initalProps }
          propTypes={ propTypes }>
        <SearchForm { ...initalProps.SearchForm } />
      </ExampleConfig>
    );
  }
}


export default [ SearchFormExample ];

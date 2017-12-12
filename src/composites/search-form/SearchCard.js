import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from '../../components/card/Card';
import GridCell from '../../components/grid/GridCell';
import Grid from '../../components/grid/Grid';
import TextInput from '../../components/form/TextInput';
import SearchCardType from './SearchCardType';
import SearchCardOptions from './SearchCardOptions';

export default class SearchCard extends Component {

  static propTypes = {
    operator: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { operator, ...rest } = this.props;
    const { active } = this.state;

    return (
      <Card
          { ...rest }
          border={ false }
          onMouseEnter={ () => this.setState({ active: true } ) }
          onMouseLeave={ () => this.setState({ active: false } ) }>
        <div style={ { margin: 12 } }>
          <Grid horizontalGutters="tiny" space="x4" verticalAlign="middle">
            { operator && (
              <GridCell shrink>
                { operator }
              </GridCell>
            )}
            <GridCell shrink>
              <SearchCardType />
            </GridCell>
            <GridCell>
              <TextInput />
            </GridCell>
            { active && (
              <GridCell shrink>
                <SearchCardOptions />
              </GridCell>
            ) }
          </Grid>
        </div>
      </Card>
    );
  }
}

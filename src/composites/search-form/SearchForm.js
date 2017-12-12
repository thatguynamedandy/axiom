import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SearchCard from './SearchCard';
import GridCell from '../../components/grid/GridCell';
import Grid from '../../components/grid/Grid';
import Card from '../../components/card/Card';
import CardList from '../../components/card/CardList';
import Form from '../../components/form/Form';
import Button from '../../components/button/Button';
import ButtonGroup from '../../components/button/ButtonGroup';
import Paragraph from '../../components/typography/Paragraph';
import Link from '../../components/typography/Link';

export default class SearchForm extends Component {

  render() {

    return (
      <div style={ { width: 320 } }>
        <Form onSubmit={ (e) => e.preventDefault() }>
          <Paragraph>
            Find authors who match the following...
          </Paragraph>
          <CardList>
            <SearchCard operator="AND" />
            <SearchCard operator="AND" />
            <Card>
              <div style={ { marginLeft: 12 } }>
                <Grid horizontalGutters="tiny" verticalAlign="middle">
                  <GridCell shrink>
                    OR
                  </GridCell>
                  <GridCell>
                    <CardList style="seamless">
                      <SearchCard style={ { borderTop: 0 } } />
                      <SearchCard style={ { borderBottom: 0 } } />
                    </CardList>
                  </GridCell>
                </Grid>
              </div>
            </Card>
            <SearchCard operator="AND" />
          </CardList>
          <ButtonGroup>
            <Button style="secondary">Add</Button>
            <Button>Search</Button>
          </ButtonGroup>
          <div style={ { margin: 10 } }>
            <Link>Add exclusion</Link>
          </div>
        </Form>
      </div>
    );
  }
}

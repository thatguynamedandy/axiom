import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  Option,
  Select,
  TextInput,
} from 'bw-axiom';

const vegetables = [
  'apple',
  'banana',
  'grape',
  'grapefruit',
  'lemon',
  'melon',
  'peach',
  'pear',
  'plum',
];

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Select">
        <Snippet>
          <TextInput label="test" />
          <Select label="Vegetable"
              placeholder="Select vegetable...">
            { vegetables.map((vegetable, index) =>
              <Option key={ index } value={ vegetable }>{ vegetable }</Option>
            )}
          </Select>
        </Snippet>
      </Example>
    );
  } }

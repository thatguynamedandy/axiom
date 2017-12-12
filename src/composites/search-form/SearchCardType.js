import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../components/button/Button';
import ButtonIcon from '../../components/button/ButtonIcon';
import ButtonGroup from '../../components/button/ButtonGroup';
import Dropdown from '../../components/dropdown/Dropdown';
import DropdownTarget from '../../components/dropdown/DropdownTarget';
import Context from '../../components/context/Context';
import DropdownContent from '../../components/dropdown/DropdownContent';
import DropdownMenu from '../../components/dropdown/DropdownMenu';
import DropdownMenuItem from '../../components/dropdown/DropdownMenuItem';

export default class SearchCardType extends Component {

  render() {
    return (
      <ButtonGroup joined>
        <Button style="secondary" >
          Tweet
        </Button>
        <Dropdown>
          <DropdownTarget>
            <Button style="secondary">
              <ButtonIcon name="chevron-down" />
            </Button>
          </DropdownTarget>
          <DropdownContent>
            <Context>
              <DropdownMenu>
                <DropdownMenuItem>
                  Bio
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Tweet
                </DropdownMenuItem>
              </DropdownMenu>
            </Context>
          </DropdownContent>
        </Dropdown>
      </ButtonGroup>
    );
  }
}

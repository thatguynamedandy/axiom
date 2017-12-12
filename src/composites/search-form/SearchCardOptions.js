import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../components/button/Button';
import ButtonIcon from '../../components/button/ButtonIcon';
import Dropdown from '../../components/dropdown/Dropdown';
import DropdownTarget from '../../components/dropdown/DropdownTarget';
import Context from '../../components/context/Context';
import DropdownContent from '../../components/dropdown/DropdownContent';
import DropdownMenu from '../../components/dropdown/DropdownMenu';
import DropdownMenuItem from '../../components/dropdown/DropdownMenuItem';

export default class SearchCardOptions extends Component {
  render() {

    return (
      <Dropdown>
        <DropdownTarget>
          <Button shape="circle" size="small" style="secondary" >
            <ButtonIcon name="ellipsis" />
          </Button>
        </DropdownTarget>
        <DropdownContent>
          <Context>
            <DropdownMenu>
              <DropdownMenuItem>
                Add alternative (OR)
              </DropdownMenuItem>
              <DropdownMenuItem>
                Delete
              </DropdownMenuItem>
            </DropdownMenu>
          </Context>
        </DropdownContent>
      </Dropdown>
    );
  }
}

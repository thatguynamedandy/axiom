import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import TextIcon from '../Typography/TextIcon';

export default class TableHeaderLabel extends Component {
  static propTypes = {
    /** Table header label */
    children: PropTypes.node,
    /** Expands table column */
    grow: PropTypes.bool,
    /** Makes label clickable */
    onClick: PropTypes.func,
    /** Shrinks table column */
    shrink: PropTypes.bool,
    /** Selects the column and sets the sort direction */
    sortDirection: PropTypes.oneOf(['ascending', 'descending']),
    /** Indicates the column is sortable if false it will remove the cloaked icon
    indicating sort direction */
    sortable: PropTypes.bool,
    /** Set text-align */
    textAlign: PropTypes.oneOf(['left', 'right']),
  };

  static defaultProps = {
    textAlign: 'left',
    sortable: true,
  }

  render() {
    const {
      children,
      grow,
      onClick,
      shrink,
      sortDirection,
      textAlign,
      sortable,
      ...rest
    } = this.props;

    const className = classnames(
      'ax-table__header-label',
      `ax-table__header-label--align-${textAlign}`,
      {
        'ax-table__header-label--grow': grow,
        'ax-table__header-label--selected': sortDirection !== undefined,
        'ax-table__header-label--shrink': shrink,
      }
    );

    return (
      <Base { ...rest } Component="th" className={ className }>
        <button
            className="ax-table__header-button"
            disabled={ !onClick }
            onClick={ onClick }>

          { children }

          { sortable && ( <TextIcon
              cloak={ sortDirection === undefined }
              name={ sortDirection === 'descending' ? 'triangle-down' : 'triangle-up' }
              spaceLeft={ textAlign === 'left' ? 'x2' : undefined }
              spaceRight={ textAlign === 'right' ? 'x2' : undefined } />
          ) }
        </button>
      </Base>
    );
  }
}

import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class CardContent extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-card__content');

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(CardContent)(
  addDisplayName('CardContent'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
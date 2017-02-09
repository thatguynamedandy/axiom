import React, { Children, Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { Base, LabelIcon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Label.scss');
}

export default class Label extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['white', 'success', 'error']),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'white',
    size: 'medium',
  };

  render() {
    const {
      children,
      color,
      full,
      size,
      ...rest
    } = this.props;

    const classes = classnames('ax-label', {
      [`ax-label--${color}`]: color,
      [`ax-label--${size}`]: size,
      'ax-label--full': full === true,
      [`ax-label--full--${full}`]: full & full !== true,
    });

    const themeMap = {
      white: 'light',
      success: 'dark',
      error: 'dark',
    };

    const mappedChildren = Children.toArray(children).map((child, index, array) =>
      child.type !== LabelIcon ? child : cloneElement(child, {
        isEnd: index === array.length - 1,
        isStart: index === 0,
        theme: themeMap[color],
        size,
      })
    );

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { mappedChildren }
      </Base>
    );
  }
}

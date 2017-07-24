import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Word.css';

export default class Word extends Component {
  static propTypes = {
    /** Delay of appearance animation */
    animationDelay: PropTypes.string,
    /** Fill color of the word */
    color: PropTypes.oneOf([
      'rose',
      'pink',
      'purple',
      'lilac',
      'blue',
      'teal',
      'green',
      'chartreuse',
      'amber',
      'orange',
      'brown',
      'grey',
    ]),
    /** Disabled state of the word **/
    disabled: PropTypes.bool,
    /** Font family of the word */
    font: PropTypes.oneOf(['Roboto, Helvetica, Arial, sans-serif']).isRequired,
    /** Font size of the word */
    fontSize: PropTypes.string,
    /** Hide the word **/
    hidden: PropTypes.bool,
    /** The content of the word */
    text: PropTypes.string,
    /** Where the word should be horizontal positioned from */
    textAnchor: PropTypes.oneOf([
      'start',
      'middle',
      'end',
      'inherit',
    ]),
    /** x coordinate of the word */
    x: PropTypes.number.isRequired,
    /** y coordinate of the word */
    y: PropTypes.number.isRequired,
    /** onClick handler */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    animationDelay: '0',
    textAnchor: 'middle',
  };

  render() {
    const {
      animationDelay,
      color,
      disabled,
      font,
      fontSize,
      hidden,
      onClick,
      text,
      textAnchor,
      x,
      y,
      ...rest
    } = this.props;

    const classes = classnames('ax-word', {
      [`ax-word--${color}`]: color,
      'ax-word--clickable': onClick,
      'ax-word--disabled': disabled,
      'ax-word--hidden': hidden,
    });

    const style = {
      fontFamily: font,
      fontSize,
      animationDelay,
    };

    return (
      <text { ...rest }
          className={ classes }
          onClick={ onClick }
          style={ style }
          textAnchor={ textAnchor }
          transform={ `translate(${x},${y})` }>
        { text }
      </text>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import './QuicklinksLayout.css';

const QuicklinksLayout = React.createClass ({ 
  propTypes: {
    className: React.PropTypes.string,
  },

  getDefaultProps() {
    return {className: ""};
  },

  render () {
    return (
      <div className={"quicklinks " + this.props.className}>
        {this.props.children}
      </div>
    )
  }
});

export default QuicklinksLayout;







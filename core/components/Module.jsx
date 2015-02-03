/**
 * Module component
 * Renders the passed handler
 */

var React = require('react');

var Module = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.element.isRequired
  },

  /**
   * Renders module handler, which was passed as a property
   */
  render:function () {
    return this.props.handler;
  }
});

module.exports = Module;

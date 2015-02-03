/**
 * Module used by default
 */

var React = require('react');

var DefaultModule = React.createClass({
  propTypes:{
    handler: React.PropTypes.element.isRequired
  },

  /**
   * Renders module handler, which was passed as a property
   */
  render:function () {
    return this.props.handler;
  }
});

module.exports = DefaultModule;

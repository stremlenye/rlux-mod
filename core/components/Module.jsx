/**
 * Module component
 * Renders the passed handler
 */

var React = require('react');

var Module = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.any.isRequired
  },

  /**
   * Renders module handler, which was passed as a property
   */
  render:function () {
    return React.createFactory(this.props.handler)();
  }
});

module.exports = Module;

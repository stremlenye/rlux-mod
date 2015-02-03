/**
 * Module used by default
 */

var React = require('react');

var DefaultModule = React.createClass({
  propTypes:{
    handler: React.PropTypes.any.isRequired
  },

  /**
   * Renders module handler, which was passed as a property
   */
  render:function () {
    return React.createFactory(this.props.handler)();
  }
});

module.exports = DefaultModule;

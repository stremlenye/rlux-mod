/**
 * Base element, which will display active module on demand
 */

var React = require('react');
var defaultModuleStore = require('../stores').defaultModule;
var activeModuleStore = require('../stores').activeModule;

var App = React.createClass({

  getInitialState: function() {
    return {
      activeModule: defaultModuleStore.getDefaultModule()
    };
  },

  componentDidMount: function() {
    activeModuleStore.subscribe(onChange);
  },

  componentWillUnmount: function() {
    activeModuleStore.unsubscribe(onChange);
  },

  onChange:function () {
    this.setState({
      activeModule:activeModuleStore.getActiveModule()
    });
  },

  render: function() {
    return (
      this.state.activeModule
    );
  }
});

module.exports = App;

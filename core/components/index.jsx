/**
 * Base element, which will display active module on demand
 */

var React = require('react');
var actions = require('../actions');
var activeModuleStore = require('../stores/activeModule');

var Module = require('./Module');
var DefaultModule = require('./DefaultModule');

var App = React.createClass({

  componentDidMount: function() {
    React.Children.forEach(this.props.children, function (child,index) {
      //Reason why we need this check is specs if React
      //http://facebook.github.io/react/docs/top-level-api.html#react.children.map
      if(child === null && typeof(child) === 'undefined'){
        return;
      }
      if(child instanceof DefaultModule){
        actions.registerModule('default', child);
        return;
      }
      if(child instanceof Module){
        var name = child.name;
        actions.registerModule(name, child);
        return;
      }
      throw "App element should be supplied with propper child type elements: Module or DefaultModule";
    });
    activeModuleStore.subscribe(this.onChange);
    actions.loadModule('default');
  },

  componentWillUnmount: function() {
    activeModuleStore.unsubscribe(this.onChange);
  },

  onChange: function () {
    this.setState({
      activeModule: activeModuleStore.getActiveModule()
    });
  },

  render: function () {
    return state.activeModule;
  }

});

module.exports = App;

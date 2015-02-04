/**
 * Base element, which will display active module on demand
 */

var React = require('react');
var actions = require('../actions');
var modulesStore = require('../stores/modules');
var activeModuleStore = require('../stores/activeModule');
var Promise = require('promise');

//TODO cover trace initialization with 'dev' modifier to disable in production mode
var Trace = require('../stores').trace;

var App = React.createClass({
  /**
   * Registers child as a module in core.
   */
  registerModule: function (child) {
    //Reason why we need this check is specs if React
    //http://facebook.github.io/react/docs/top-level-api.html#react.children.map
    if(child === null && typeof(child) === 'undefined'){
      return;
    }
    if(child.type.displayName === "DefaultModule"){
      actions.registerModule("default", child);
      return {'default': child};
    }
    if(child.type.displayName === "Module"){
      var name = child.props.name;
      actions.registerModule(name, child);
      return {name: child};
    }
    throw "App element should be supplied with propper child type elements: Module or DefaultModule";
  },

  /**
   * Proccesses props.children object to travers over them and register
   * as modules in core
   */
  proccessChildren: function () {
    React.Children.map(this.props.children, function (child,index) {
      return this.registerModule(child);
    },this);
  },

  componentWillMount: function() {
    this.proccessChildren();
    activeModuleStore.subscribe(this.onChange);
    actions.loadModule('default');
  },

  componentWillUnmount: function() {
    activeModuleStore.unsubscribe(this.onChange);
  },

  onChange: function () {
    this.setState({
      isActiveModuleDefined: activeModuleStore.isDefined(),
      activeModuleName:activeModuleStore.getActiveModule()
    });
  },

  getInitialState: function() {
    return {
      isActiveModuleDefined:false
    };
  },

  /**
   * Renders the active module component.
   * If active component isn't awailable in the moment renders nothing
   */
  render: function () {
    if(this.state.isActiveModuleDefined){
      var moduleComponent = modulesStore.getModule(this.state.activeModuleName);
      return moduleComponent;
    }
    else
      return false;
  }

});

module.exports = App;

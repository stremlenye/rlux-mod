/**
 * Base element, which will display active module on demand
 */

var React = require('react');
var actions = require('../actions');
var modulesStore = require('../stores/modules');
var activeModuleStore = require('../stores/activeModule');
var Promise = require('promise');
var immutable = require('immutable');

//TODO cover trace initialization with 'dev' modifier to disable in production mode
var Trace = require('../stores').trace;

var App = React.createClass({
  getInitialState: function() {
    return {
      isActiveModuleDefined:false
    };
  },

  children: immutable.Map({}),

  componentDidMount: function() {
    var ch = React.Children.map(this.props.children, function (child,index) {
      //Reason why we need this check is specs if React
      //http://facebook.github.io/react/docs/top-level-api.html#react.children.map
      if(child === null && typeof(child) === 'undefined'){
        return;
      }
      if(child.type.displayName === "DefaultModule"){
        return {'default': child};
      }
      if(child.type.displayName === "Module"){
        var name = child.props.name;
        return {name: child};
      }
      throw "App element should be supplied with propper child type elements: Module or DefaultModule";
    },this);
    for(var prop in ch){
      this.children = this.children.merge(immutable.Map(ch[prop]));
    }
    activeModuleStore.subscribe(this.onChange);
    actions.loadModule('default');
  },

  componentWillUnmount: function() {
    activeModuleStore.unsubscribe(this.onChange);
  },

  onChange: function () {
    var isDefined = activeModuleStore.isDefined();
    var activeModuleName = activeModuleStore.getActiveModule();

    this.setState({
      isActiveModuleDefined: isDefined,
      activeModuleName:activeModuleName
    });
  },

  render: function () {

    if(this.state.isActiveModuleDefined){
      return this.children.get(this.state.activeModuleName);
    }
    else
      return <div>Loading</div>;
  }

});

module.exports = App;

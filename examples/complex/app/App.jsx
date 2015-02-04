/**
 * Simple React Application entry point
 */

var React = require('react');
var Dashboard = require('./modules/Dashboard');
var App = require('../../../core').App;
var DefaultModule = require('../../../core').DefaultModule;
var Module = require('../../../core').Module;

var Application =
      (<App>
        <DefaultModule handler={Dashboard} />
      </App>);

React.render(Application, document.body);

module.exports = Application;

/**
 * Simple React Application entry point
 */

var React = require('react');
var Dashboard = require('./modules/Dashboard');
var App = require('rlux').App;
var DefaultModule = require('rlux').DefaultModule;
var Module = require('rlux').Module;

var Application =
      (<App>
        <DefaultModule handler={Dashboard} />
      </App>);

React.render(Application, document.body);

module.exports = Application;

/**
 * Simple React Application entry point
 */

var React = require('react');

//rlux components
var App = require('../../../core').App;
var DefaultModule = require('../../../core').DefaultModule;
var Module = require('../../../core').Module;

//Modules
var Index = require('./modules/index');
var Dashboard = require('./modules/dashboard');
var Products = require('./modules/products');

var Application =
      (<App>
        <DefaultModule handler={Index} />
        <Module handler={Dashboard} />
        <Module handler={Products} />
      </App>);

React.render(Application, document.body);

module.exports = Application;

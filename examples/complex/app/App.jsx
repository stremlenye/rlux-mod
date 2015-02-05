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

//Settings initialization
var Settings = require('../../../core').Settings;
Settings.set('api_access', {
  "access_token":"mwAjsOPX0qWHnqkRFH0eX8cFMztTg7pS",
  "token_type":"Bearer",
  "expires_in":172800,
  "scope":"manage_project:stremlenyes-stuff",
  "projectKey":"stremlenyes-stuff"
});
Settings.set('culture','en');

var Application =
      (<App>
        <DefaultModule handler={Index} />
        <Module name="dashboard" handler={Dashboard} />
        <Module name="products" handler={Products} />
      </App>);

React.render(Application, document.body);

module.exports = Application;

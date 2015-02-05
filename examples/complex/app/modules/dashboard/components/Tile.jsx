/**
 * Tile with statistic information about data retrieved from the data store
 * with the supplied data source property
 */

var React = require('react');
var dataStore = require('../stores');
var constants = require('../constants');

var Tile = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return this.getState();
  },

  getState: function () {
    return {
      status: dataStore.getStatus(this.props.source),
      data: dataStore.get(this.props.source)
    };
  },

  componentDidMount: function() {
    dataStore.subscribe(this.onChange);
  },

  componentWillUnmount: function() {
    dataStore.unsubscribe(this.onChange);
  },

  onChange: function () {
    this.setState(this.getState());
  },

  render: function() {
    switch (this.state.status) {
      case constants.stores.statuses.loading:
        return this.renderSpinner();
      case constants.stores.statuses.failed:
        return this.renderError();
      case constants.stores.statuses.ready:
        return this.renderData(this.state.data);
    }
  },

  renderSpinner: function () {
    return <div {...this.props}>Loading...</div>;
  },

  renderError: function () {
    return <div {...this.props}>An error accured while data retriving</div>;
  },

  renderData: function (data) {
    return (<div {...this.props}>
              <h1>{this.props.title}</h1>
              <p>{"Total amount: " + data.length}</p>
            </div>);
  }

});

module.exports = Tile;

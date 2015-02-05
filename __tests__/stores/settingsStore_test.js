/**
 * Settings store tests in concept of
 * http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html
 */

jest.dontMock('../../core/stores/settings');
jest.dontMock('immutable');
jest.dontMock('React');

describe("Settings store", function() {
  var constants = require('../../core/constants');
  var immutable = require('immutable');
  var React = require('react');

  var addActionPayload = {
    source: constants.payloadSources.core,
    action: {
      type: constants.actions.setSetting,
      key: 'new_setting',
      value: {some:'value'}
    }
  };

  var Dispatcher;
  var settingsStore;
  var callback;

  beforeEach(function() {
    Dispatcher = require('../../core/dispatcher');
    settingsStore = require('../../core/stores/settings');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no settings', function() {
    var all = settingsStore.getAll();
    expect(all.size).toBe(0);
  });

  it('adds new setting', function() {
    callback(addActionPayload);
    var settings = settingsStore.getAll();
    expect(settings.size).toBe(1);
    expect(settings.keys().next().value).toEqual('new_setting');
    var setting = settingsStore.get('new_setting');
    expect(setting).not.toBeNull();
    expect(setting).toBeDefined();
  });
});

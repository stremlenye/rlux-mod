/**
 * Modules store tests in concept of
 * http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html
 */

jest.dontMock('../../core/stores/modules');
jest.dontMock('immutable');
jest.dontMock('React');

describe("Modules store", function() {
  var constants = require('../../core/constants');
  var immutable = require('immutable');
  var React = require('react');

  var addActionPayload = {
    source: constants.payloadSources.core,
    action: {
      type: constants.actions.registerModule,
      name: 'new_module',
      module: <div />
    }
  };

  var Dispatcher;
  var modulesStore;
  var callback;

  beforeEach(function() {
    Dispatcher = require('../../core/dispatcher');
    modulesStore = require('../../core/stores/modules');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no modules', function() {
    var all = modulesStore.getModules();
    expect(all.size).toBe(0);
  });

  it('adds new module', function() {
    callback(addActionPayload);
    var modules = modulesStore.getModules();
    expect(modules.size).toBe(1);
    expect(modules.keys().next().value).toEqual('new_module');
    var module = modulesStore.getModule('new_module');
    expect(module).not.toBeNull();
    expect(module).toBeDefined();
  });
});

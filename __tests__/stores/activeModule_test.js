/**
 * Active module store test in concept of
 * http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html
 */

jest.dontMock('../../core/stores/activeModule');
jest.dontMock('React');

describe("Active module store", function() {
  var constants = require('../../core/constants');
  var React = require('react');

  var setActiveModulePayload = {
    source: constants.payloadSources.core,
    action: {
      type: constants.actions.loadModule,
      module: 'module'
    }
  };

  var Dispatcher;
  var activeModuleStore;
  var callback;

  beforeEach(function() {
    Dispatcher = require('../../core/dispatcher');
    activeModuleStore = require('../../core/stores/activeModule');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no active module', function() {
    var module = activeModuleStore.getActiveModule();
    expect(module).toBeUndefined();
    var isDefined = activeModuleStore.isDefined();
    expect(isDefined).toBe(false);
  });

  it('sets new Active module', function() {
      callback(setActiveModulePayload);
      var module = activeModuleStore.getActiveModule();
      expect(module).not.toBeNull();
      expect(module).not.toBeUndefined();
      var isDefined = activeModuleStore.isDefined();
      expect(isDefined).toBe(true);
  });
});

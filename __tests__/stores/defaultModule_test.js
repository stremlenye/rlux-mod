/**
 * Default module test in concept of
 * http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html
 */

jest.dontMock('../../core/stores/defaultModule');
jest.dontMock('React');

describe("Default module store", function() {
  var constants = require('../../core/constants');
  var React = require('react');

  var setDefaultModulePayload = {
    source: constants.payloadSources.core,
    action: {
      type: constants.actions.setDefaultModule,
      module: <div />
    }
  };

  var Dispatcher;
  var defaultModuleStore;
  var callback;

  beforeEach(function() {
    Dispatcher = require('../../core/dispatcher');
    defaultModuleStore = require('../../core/stores/defaultModule');
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no default module', function() {
    var module = defaultModuleStore.getDefaultModule();
    expect(module).toBeUndefined();
    var isDefined = defaultModuleStore.isDefined();
    expect(isDefined).toBe(false);
  });

  it('sets new default module', function() {
      callback(setDefaultModulePayload);
      var module = defaultModuleStore.getDefaultModule();
      expect(module).not.toBeNull();
      var isDefined = defaultModuleStore.isDefined();
      expect(isDefined).toBe(true);
  });
});

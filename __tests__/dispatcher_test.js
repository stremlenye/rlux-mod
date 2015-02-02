jest.dontMock('../core/dispatcher');
jest.autoMockOff();

describe("Dispatcher", function() {
  var Dispatcher = require('../core').Dispatcher;
  var Promise = require('promise');

  var _dispatchToken;

  afterEach(function() {
    if (_dispatchToken)
      Dispatcher.unregister(_dispatchToken);
  });

  it("should be able to be obtained from core", function() {
    expect(Dispatcher).not.toBeNull();
  });

  it("should register handlers", function() {
    var handler = function(payload) {};
    _dispatchToken = Dispatcher.register(handler);
    expect(_dispatchToken).not.toBeNull();
  });

  pit("should handle view action", function() {
    return new Promise(function(fulfill, reject) {
      var handler = function(payload) {
        expect(payload).not.toBeNull();
        fulfill("dispatched");
      };
			_dispatchToken = Dispatcher.register(handler);

      expect(Dispatcher.handleViewAction).not.toBe(null);
      expect(function() {
        Dispatcher.handleViewAction("payload");
      }).not.toThrow();
    });
  });

  pit("should handle server action", function() {
    return new Promise(function(fulfill, reject) {
      var handler = function(payload) {
        expect(payload).not.toBeNull();
        fulfill("dispatched");
      };
			_dispatchToken = Dispatcher.register(handler);

      expect(Dispatcher.handleServerAction).not.toBe(null);
      expect(function() {
        Dispatcher.handleServerAction({});
      }).not.toThrow();
    });
  });

  pit("should handle core action", function() {
    return new Promise(function(fulfill, reject) {
      var handler = function(payload) {
        expect(payload).not.toBeNull();
        fulfill("dispatched");
      };
			_dispatchToken = Dispatcher.register(handler);

      expect(Dispatcher.handleCoreAction).not.toBe(null);
      expect(function() {
        Dispatcher.handleCoreAction({});
      }).not.toThrow();
    });
  });

  pit("should handle error action", function() {
    return new Promise(function(fulfill, reject) {
      var handler = function(payload) {
        expect(payload).not.toBeNull();
        fulfill("dispatched");
      };
      _dispatchToken = Dispatcher.register(handler);

      expect(Dispatcher.handleErrorAction).not.toBe(null);
      expect(function() {
        Dispatcher.handleErrorAction({});
      }).not.toThrow();
    });
  });
});

describe("Dispatcher", function () {
  var Dispatcher = require('../../core').Dispatcher;

  it("should be able to be obtained from core", function () {
    expect(Dispatcher).not.toBe(null);
  });

  it("should register handlers", function () {
    var dispatchToken = Dispatcher.register(function () {});
    expect(dispatchToken).not.toBe(null);
  });

  it("should handle view action",function () {
    expect(Dispatcher.handleViewAction).not.toBe(null);
    Dispatcher.handleViewAction({});
  });

  it("should handle server action",function () {
    expect(Dispatcher.handleServerAction).not.toBe(null);
    Dispatcher.handleServerAction({});
  });

  it("should handle error action",function () {
    expect(Dispatcher.handleErrorAction).not.toBe(null);
    Dispatcher.handleErrorAction({});
  });
});

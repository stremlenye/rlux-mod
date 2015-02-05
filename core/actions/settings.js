/**
 * Settings related actions
 */

var dispatcher = require('../dispatcher');
var constants = require('../constants');

var settingsActionCreators = {
  setSetting: function (key, value) {
    dispatcher.handleCoreAction({
      type:constants.actions.setSetting,
      key:key,
      value: value
    });
  }
};

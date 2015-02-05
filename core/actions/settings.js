/**
 * Settings related actions
 */

var dispatcher = require('../dispatcher');
var constants = require('../constants');

var settingsActionCreators = {
  setSetting: function (key, value, group) {
    dispatcher.handleCoreAction({
      type:constants.actions.setSetting,
      group: group ? group: 'global',
      key:key,
      value: value
    });
  }
};

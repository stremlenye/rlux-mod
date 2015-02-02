/**
 * core constants
 */
/*jslint node: true */
'use strict';

var prefix = 'core_';

var constants = {
  payloadSources: {
    view: 'ActionSourse_View',
    server: 'ActionSourse_Server',
    error: 'ActionSourse_Error',
    core: 'ActionSource_Core'
  },
  actions:{
    registerModule:prefix + 'registerModule',
    setDefaultModule: prefix + 'setDefaultModule',
    loadModule: prefix + 'loadModule',
    moduleNotFound: prefix + 'moduleNotFound'
  }
};

module.exports = constants;

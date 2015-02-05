/**
 * Products module constants
 */
var prefix = 'productsModule_';

var productsConstants = {
  actions:{
    productsLoaded: prefix + 'productsLoaded',
    productLoadingFailed: prefix + 'productLoadingFailed'
  },
  stores:{
    products:{
      statuses:{
        empty: 'empty',
        actual: 'actual',
        error: 'error'
      }
    }
  }
};

module.exports = productsConstants;

/**
 * Single product item view
 */

var React = require('react');
var Settings = require('../../../../../../core').Settings;

var Product = React.createClass({

  getInitialState: function() {
    var culture = Settings.get('culture');
    return {
      locale: culture ? culture: 'en'
    };
  },

  propTypes: {
    product:React.PropTypes.object.isRequired
  },

  /**
   * Returns products name
   */
  getName: function (product, locale) {
    return product.name[locale];
  },

  /**
   * Returns products description
   */
  getDescription: function (product, locale) {
    return product.description[locale];
  },

  /**
   * returns products preview image
   */
  getPreview: function (product) {
    var firstImg = product.masterVariant.images[0];
    if(firstImg){
      return firstImg.url;
    }
    return '';
  },

  render: function() {
    return (
      <div {...this.props}>
        <h2>{this.getName(this.props.product, this.state.locale)}</h2>
        <p>{this.getDescription(this.props.product, this.state.locale)}</p>
        <img src={this.getPreview(this.props.product)} height="250"/>
      </div>
    );
  }

});

module.exports = Product;

#Mixins

###ModuleActivatioMixin
Allow to switch active modules

```
var Index = React.createClass({
  mixins:[ModuleActivationMixin],

  /**
   * Loads module with passed name
   */
  loadModule: function (name) {
    this.activateModule(name);
  },

  …
});
```

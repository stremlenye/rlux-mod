# rlux-mod
Simple modularity framework for building web applications based on Flux architecture with ReactJS.

After some research I realised that declarative approach for React based applications should be more suitable.
So I decided to rewrite imperative API (e.g `core.registerModule`) to someting like
[react-router](https://github.com/rackt/react-router):

```
<App>
  <DefaultModule handler={DefaultModuleHandler} />
  <Module name="Module_Name" handler={ModuleHandler} />
  <Module name="Another_Module_Name" handler={AnotherModuleHandler} />
</App>
```
`Module` component is a common module registration item, which supplied by module name and React Component handler as a properties;

`DefaultModule` component is a default startup module (e.g. Index module to render navigation links).

###In depth
The inner logic gets App.props.children and iterate through them to register modules in modules store while application starting.

On render stage App component should just choose the proper active Module element and render only one child.
In its turn, Module component will render the handler property passed before.

To activate any module from the outside of the core, lib exports [ModuleActivationMixin](https://github.com/stremlenye/rlux-mod/tree/master/core/mixins).

###Utilities
In addition to rlux 'kind-of-framework' it has its own implemented simple http client and settings share utility.
Main approach to implement them was to reduce amount of dependencies in core, but provide most necessary functions for front-end framework and leave module developers freedom to use what ever they want.
Could be referenced by
`require('rlux').Http` and
`require('rlux').Settings`

###Development helpers
To make framework more verbose it is implemented special fake store, which prints all actions payloads to the standart console output.

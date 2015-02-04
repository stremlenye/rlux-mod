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

The inner logic would get App.props.children and iterate through to register modules by itself on application start.
So we don't have to test weird old stile API – just Flux architecture elements and React component with simple logic.

On render stage component should just choose the proper active Module element and render only one child.

In its turn, Module component will render the handler property passed before.

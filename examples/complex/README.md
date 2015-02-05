#Comple application example using rlux core

###Structure

```
|– index.html
|– app
|–– App.jsx //application bootstrap and startup point
|–– modules //modules containing folder
|––– dashboard //Dashboard view module based on Flux with React views
|––– index //Common index page with navigation options to two installed modules
|––– products //Products view module based on Flux with React views
```

###Notes
All modules uses one dispatcher exposed by core of rlux, so every single module could react in any action in application, so the Flux main idea of one way and single data flow isn't corrupted by framework itself.
This approach helps to handle application level action by any module, and any module could spread its actions among any other.

###Run
To run example in browser use `node server` command.

It is configured to use webpack with dev-server plugin + react-hot-reloader to obtain code changes continuously without server restart and repacking bundle.

[http://webpack.github.io](webpack)
[https://github.com/gaearon/react-hot-loader](hot-reloader)

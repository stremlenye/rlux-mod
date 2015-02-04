#Simple application example using rlux core

###Structure
Application structure is pretty simple and includes two main elements: App.jsx component and modules folder.

In current example contains the fake Dashboard module with one ReactJs Component to be displayed which we would evolve in next example.

```
|–app

|––modules //modules folder to organize all modules in one place

|–––Dashboard //Static page module

|––––index.jsx

|–App.jsx //Application bootstrap point. Initialize rlux App module with Dashboard module

```

App.jsx bootstraps rlux App component with Dashboard module as a default module to load:

```
var Application =
      (<App>
        <DefaultModule handler={Dashboard} />
      </App>);

React.render(Application, document.body);
```

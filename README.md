### nutstrap-i18n-web

This module contains AngularJS functionality to manage *internationalisation* including Flash decorators and resource bundle loading.

#### Using the i18n module

Include the library in your main angular file  (app.coffee / app.js).

```
dependencies = [
    'myApp.i18n'
]
```
and add the module into angular

```
@i18nModule = angular.module('myApp.i18n', ['ngI18n', 'myApp.common'])
```

finally you can add the js to your html, (index.html)


```
To compile coffeescript, copy files to dist and concat into one use respectively grunt tasks: coffee, copy and uglify.
grunt dist runs all those tasks.
Complete, minified js file can be found in dist/i18n-module.min.js
```


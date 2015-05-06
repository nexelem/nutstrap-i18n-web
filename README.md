### angular-i18n-web

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
<script src="libs/i18n-web/dist/i18n-module.min.js" type="text/javascript"></script>
```


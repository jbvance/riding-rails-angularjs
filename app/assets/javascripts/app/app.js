(function() {

  angular.module('myApp', ['ngRoute', 'myApp.controllers','myApp.services'])
    .config(function($routeProvider, $sceDelegateProvider) {
      $routeProvider.when('/', {
          templateUrl: '/templates/dashboard.html',
          controller: 'HomeController'
        })
        .otherwise({
          redirectTo: '/'
        });
        
      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://srv*.assets.example.com/**'
      ]);
    
      // The blacklist overrides the whitelist so the open redirect here is blocked.
      $sceDelegateProvider.resourceUrlWhitelist(['**']);
        
    });
    
})();

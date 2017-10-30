

var myApp  = angular.module('MyApp', ["ngRoute"]) ;
  myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
        templateUrl: 'views/userList.html', 
        controller:  'usersController',
        })

    .when('/Dashboard/:userid', {
        templateUrl: 'views/dashboard.html',
        controller: 'userDetailsController',
        label : 'UserDashboard'

        })
    .when('/postDetails/:postid',{
        templateUrl: 'views/postDetails.html',
        controller: 'postDetailsController',
        label: 'PostDetails'
    
        })
    .otherwise({
        redirectTo: '/'
        });
}]);


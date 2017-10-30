

myApp.controller('usersController', ['$scope',"$http" ,function($scope,$http) {

    
     $http.get('http://jsonplaceholder.typicode.com/users')
    .then(function(data) {
       $scope.userlist  = data.data;
    });
 
}]);


myApp.controller('userDetailsController', ['$scope','$routeParams',"$http" ,function($scope,$routeParams,$http) {
  
  $scope.userid =  $routeParams.userid ;
  $scope.userDetails = {};

    var url = "https://jsonplaceholder.typicode.com/posts?userId="+ $scope.userid;

    $http.get(url)
    .then(function(data) {
       $scope.userDetails.PostsList  = data.data;
       $scope.userDetails.postslistSize = data.data.length;
    });

    var url = "https://jsonplaceholder.typicode.com/todos?userId="+ $scope.userid;

    $http.get(url)
    .then(function(data) {
       $scope.userDetails.ToDoList  = data.data;
       $scope.userDetails.todolistSize = data.data.length;
    });
}]);

myApp.controller('postDetailsController', ['$scope','$routeParams',"$http" ,function($scope,$routeParams,$http) {

  $scope.postid =  $routeParams.postid ;

    var url = "https://jsonplaceholder.typicode.com/posts/"+ $scope.postid ;

      $http.get(url)
      .then(function(data) {
         $scope.postDetails  = data.data;
    });

  $scope.postDetails = {};
    var url = "https://jsonplaceholder.typicode.com/comments?postId="+ $scope.postid;
    
      $http.get(url)
      .then(function(data) {

         $scope.postDetails.CommentsList  = data.data;
         $scope.postDetails.commentslistSize = data.data.length;
    });

}]);
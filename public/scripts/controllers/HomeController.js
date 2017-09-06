myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
getUserInfo();

function getUserInfo() {
  $http.get('/users')
    .then(function (response) {
      console.log(response);
      //$scope.activeCompanies = response.data;
    });
}

}]);

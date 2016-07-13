function MainController($scope) {
  $scope.contact = {
    name: 'Alexandria Woods',
    email: 'awoods@trigeda.com',
    phone: '1234567'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);

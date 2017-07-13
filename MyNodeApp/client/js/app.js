
angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: 'views/HelloWorld.html',
    controller: 'helloWorldController'
    }

    var viewState = {
        name: 'viewgraph',
        url: '/viewgraph',
        templateUrl: 'views/ViewGraph.html',
        controller: 'myAppController'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(viewState);
  }]);
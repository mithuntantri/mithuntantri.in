angular.module("mithuntantri", ["ui.router"])
.run(['$rootScope', '$state', function($rootScope, $state){

}])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider){
          $compileProvider.debugInfoEnabled(false);
          $locationProvider.html5Mode(true);
          $urlRouterProvider.otherwise("/");
          $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "partials/home.html",
                controller: "homeController",
                data: {pageTitle: ' :  Home'},
            })
}])

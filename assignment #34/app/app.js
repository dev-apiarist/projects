var artApp = angular.module("artApp", ["ngRoute", "ngAnimate"]);

// ROUTING

artApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/about", {
        templateUrl: "views/about.html",
      })
      .when("/enroll", {
        templateUrl: "views/enroll.html",
      })

      .when("/contact", {
        templateUrl: "views/contact.html",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

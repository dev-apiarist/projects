var bikeApp = angular.module("bikeApp", ["ngRoute", "ngAnimate"]);

// ROUTING

bikeApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/register", {
        templateUrl: "views/register.html",
      })
      .when("/cart", {
        templateUrl: "views/cart.html",
      })
      .when("/parts", {
        templateUrl: "views/parts.html",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

// CONTROLLER

bikeApp.controller("bikeController", [
  "$scope",
  "$http",

  function ($scope, $http) {
    $scope.cart = [];
    $scope.addCart = function (part) {
      $scope.cart.push(part);
    };

    $scope.removeItem = function (item) {
      var removedItem = $scope.cart.indexOf(item);
      $scope.cart.splice(removedItem, 1);
      console.log($scope.cart.length);
    };

    $http.get("data/parts.json").then(function (response) {
      $scope.parts = response.data;
    });
  },
]);

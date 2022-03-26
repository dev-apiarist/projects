let glassesApp = angular.module("glassesApp", ["ngRoute", "ngAnimate"]);

glassesApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/glasses", {
        templateUrl: "views/glasses.html",
      })
      .when("/cart", {
        templateUrl: "views/cart.html",
      })
      .when("/form", {
        templateUrl: "views/form.html",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);
glassesApp.controller("glassesController", [
  "$scope",
  "$http",

  function ($scope, $http) {
    $scope.cart = [];

    totalAmount = () => {
      let totalItems = $scope.cart.map(
        (element) => element.price * element.qty
      );
      $scope.total = totalItems.reduce((a, b) => {
        return a + b;
      }, 0);
    };

    $scope.addCart = function (glass) {
      if ($scope.cart.indexOf(glass) == -1) {
        glass.qty = 1;
        $scope.cart.push(glass);
      } else {
        glass.qty++;
      }

      totalAmount();
    };

    $scope.removeItem = function (index) {
      let removedItem = $scope.cart.indexOf(index);

      $scope.cart.splice(removedItem, 1);
      totalAmount();
    };

    $http.get("data/glasses.json").then(function (response) {
      $scope.glasses = response.data;
    });
  },
]);

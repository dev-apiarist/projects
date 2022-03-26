let includeApp = angular.module("includeApp", ["ngRoute"]);

includeApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.htm",
      })
      .when("/biography", {
        templateUrl: "views/biography.htm",
      })
      .when("/music", {
        templateUrl: "views/music.htm",
      })

      .when("/photos", {
        templateUrl: "views/photos.htm",
      })
      .when("/gigs", {
        templateUrl: "views/gigs.htm",
      })
      .when("/blogs", {
        templateUrl: "views/blogs.htm",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

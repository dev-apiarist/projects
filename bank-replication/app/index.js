const bankApp = angular.module("bankApp", ["ngRoute"]);

// ROUTING

bankApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/media", {
        templateUrl: "views/media.html",
      })
      .when("/careers", {
        templateUrl: "views/careers.html",
      })
      .when("/investor-relations", {
        templateUrl: "views/investor-relations.html",
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
      })

      .otherwise({
        redirectTo: "/home",
      });
  },
]);

let slideIndex = 1;
carousel(slideIndex);

function plusSlides(n) {
  carousel((slideIndex += n));
}

function carousel(n) {
  let x = document.getElementsByClassName("carousel-slides");
  // slideIndex++;
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
  // setTimeout(carousel, 3000);
}

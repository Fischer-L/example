(function () {
  var rootScope = window.rootScope = {};
  rootScope.id = "rootScope";
  rootScope.on = function (event, listener) {
    listener(event, "next", "current");
  };
  rootScope.fireLoad = function () {
    rootScope.on("load", function (event, next, current) {console.log(event, next, current); console.log(rootScope.id + " the next is " + next);
    });};
})();

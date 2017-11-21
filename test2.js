(function () {
  var rootScope = {};
  rootScope.id = "rootScope";
  rootScope.on = function (event, listener) {
    listener(event, "next", "current");
  };
  rootScope.on("load", function (event, next, current) {
    console.log(event, next, current);
    console.log(rootScope.id + " the next is " + next);
  });
})();

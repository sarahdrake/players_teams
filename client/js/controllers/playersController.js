myAppModule.controller("PlayersController", function ($scope, PlayerFactory) {
  $scope.players = [];
  console.log("PlayersController initiated")

  // when this controller is loaded, fetch the player list
  PlayerFactory.getPlayers(function (players) {
    $scope.players = players;
    console.log(players);

  })

  // pass new player info to the PlayerFactory
  $scope.addPlayer = function () {
    PlayerFactory.addPlayer($scope.newPlayer)
    $scope.newPlayer = {}; // reset newPlayer form
  }

  // pass $index to PlayerFactory to removePlayer
  $scope.removePlayer = function($index){
    PlayerFactory.removePlayer($index);
  }

})

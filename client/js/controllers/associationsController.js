myAppModule.controller("AssociationsController", function($scope, PlayerFactory, TeamFactory){
  $scope.players = [];
  $scope.teams = [];
  console.log("AssociationsController initiated")

  //When this controller is loaded, fetch the players list
  PlayerFactory.getPlayers(function (players) {

    $scope.players = players;


  })

  //When this controller is loaded, fetch the team list
  TeamFactory.getTeams(function (teams) {

      $scope.teams = teams;

  })

  //Pass the player index and team name to create association
  $scope.addPlayerToTeam = function (data) {
    PlayerFactory.addPlayerToTeam($scope.newAssoc);
    console.log($scope.newAssoc);

  }

  //Pass $index to PlayerFactory to remove the player's team
  $scope.removePlayerFromTeam = function ($index) {
    console.log("associations remove player")
    PlayerFactory.removePlayerFromTeam($index);
  }
})

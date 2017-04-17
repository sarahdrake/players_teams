myAppModule.controller("TeamsController", function ($scope, TeamFactory) {

  $scope.teams = [];

  // when this controller is loaded -> fetch the team list
  TeamFactory.getTeams(function (teams) {
    $scope.teams = teams;

  })
  // pass new team info to the TeamFactory
  $scope.addTeam = function () {
    TeamFactory.addTeam($scope.newTeam)
    $scope.newTeam = {}; // reset newTeam form
  }
  // pass $index to TeamFactory to removePlayer
  $scope.removeTeam = function ($index) {
    TeamFactory.removeTeam($index);

  }

})

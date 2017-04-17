myAppModule.factory("TeamFactory", function () {
  // initialize our list of teams
  var teams = [
    {name: "Hawks"},
    {name: "Wolverines"},
    {name: "Spartans"}
  ];

  var factory = {};

  // passs the team list to a controllers
  factory.getTeams = function (callback) {
    callback(teams);
  }

  // add a new team to the list
  factory.addTeam = function (team) {
    teams.push(team);
  }

  //remove the team from the list
  factory.removeTeam = function ($index) {
    teams.splice(teams.indexOf($index), 1);

  }
  return factory
})

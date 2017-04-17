// this is the first javascript file to load, so it initializes the module
var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("PlayerFactory", function () {
  // initialize our list of players
  var players = [
    {name: "Drake", team: "Hawks"},
    {name: "Boyce", team: "Hawks"},
    {name: "Merty", team: "Hawks"},
    {name: "Geena", team: "Hawks"},
    {name: "Pedrick", team: "Hawks"},
    {name: "JB", team: "Hawks"}
  ];

  var factory = {};

  // pass the player list to the controller
  factory.getPlayers = function (callback) {
    callback(players);
  }

  // add new player to the list
  factory.addPlayer =function (player) {
    player.team = ""; // new players don't belong to a team
    players.push(player);
  }
  // remove a player from the list
  factory.removePlayer = function($index){
    players.splice($index, 1);
  }

  // set a player's team name
  factory.addPlayerToTeam = function (data) {
    players[data.playerIdx].team = data.team;
  }
  // reset a player's team name to an empty string
  factory.removePlayerFromTeam = function ($index) {
    players[$index].team = "";

  }

  return factory;


})

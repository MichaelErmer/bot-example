var package = require('./package.json');
var _ = require('lodash');

var Module = function (bot) {
  this.bot = bot;
  this.name = package.name;
  this.version = package.version;
  this.help = function () {
    // RETURN HELP STRING FOR YOUR COMMANDS or AT LEAST YOUR COMMANDS Object.keys(this.commands)
    // For basic help add them to the package
    // This funciton can be used to generate a dynamic help, it is called at !help
    return package.commands;
  };
  this.commands = {};

  this.commands.example = function(channel, args, user) {
    var response = "Hello, "+user.name;
    // Do some async stuff
    // remove Timeout for your module
    // user is a user instance of slack, user.name is the "nice name"
    setTimeout(function() {
      bot.postMessage(channel, response);
    }, 500);
  };

};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;
'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({
initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    // var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Hi!'
    ));
    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someOption',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];
    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someOption;
    //   done();
    // }.bind(this));
  },
  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('scss'),
        this.destinationPath('scss')
      );
    }
  }
  // install: function () {
  //   this.installDependencies();
  // }
});
/**
 * Created by victoryan on 15/8/17.
 */
require('coffee-script/register');
var fs = require('fs'),
  argv = require('yargs').argv,
  tasks = fs.readdirSync('./gulp_dir/tasks/');

// --release flag when executing a task
//global.release = argv.release;

tasks.forEach(function (task) {
  require('./tasks/' + task);
});

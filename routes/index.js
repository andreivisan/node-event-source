var express = require('express');
var router = express.Router();
var fs = require("fs");

var taskEvents = require('../task-events')

/* GET home page. */
router.get('/', getTasks, function(req, res) {
    console.log('Tasks: %s', JSON.stringify(req.tasks.tasks));
  res.render('index', { title: 'Task manager' , tasks: req.tasks.tasks});
});

router.get('/start-task', function(req, res) {
    taskEvents.emit('startTimer', res);
});

function getTasks(req, res, next) {
    var filePath = "tasks.json";
    var fileContent = fs.readFileSync(filePath);
    req.tasks = JSON.parse(fileContent);
    next();
}

module.exports = router;

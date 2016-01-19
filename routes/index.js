var express = require('express');
var router = express.Router();

var taskEvents = require('../task-events')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/start-task', function(req, res) {
    taskEvents.emit('startTimer', res);
})

module.exports = router;

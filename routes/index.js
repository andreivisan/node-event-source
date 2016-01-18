var express = require('express');
var router = express.Router();
var events = require('events');
var eventEmitter = new events.EventEmitter();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/start-task', function(req, res) {
    console.log("start task server");
    
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    //eventEmitter.emit('startTimer', {data: "data"});
    res.write('data: ' + 'blablabla' + '\n\n');
})

module.exports = router;

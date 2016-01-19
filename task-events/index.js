var EventEmitter = require('events');
var util = require('util');

function TaskEmitter() {
    EventEmitter.call(this);
}

util.inherits(TaskEmitter, EventEmitter);

var taskEmitter = new TaskEmitter();

taskEmitter.on('startTimer', function(res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    
    setInterval(function() {
        res.write("data: " + (new Date()).toLocaleTimeString() + '\n\n');    
    }, 1000);
});

module.exports = taskEmitter;
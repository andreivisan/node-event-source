var startTaskEvent;

function startTimer(index) {
    $("#started-at-"+index).html((new Date()).toLocaleTimeString());
    startTaskEvent = new EventSource('/start-task');
    startTaskEvent.onmessage = function(e) {
        $("#finished-at-"+index).html(e.data);
    }
}

function stopTimer() {
    startTaskEvent.close();
}
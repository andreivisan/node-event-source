var startTaskEvent;

function startTimer() {
    $("#started-at").html((new Date()).toLocaleTimeString());
    startTaskEvent = new EventSource('/start-task');
    startTaskEvent.onmessage = function(e) {
        $("#finished-at").html(e.data);
    }
}

function stopTimer() {
    startTaskEvent.close();
}
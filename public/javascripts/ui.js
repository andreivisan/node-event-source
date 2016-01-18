function startTimer() {
    var startTaskEvent = new EventSource('/start-task');
    startTaskEvent.onmessage = function(e) {
        console.log('start timer client');
        console.log(e.data);
    }
}
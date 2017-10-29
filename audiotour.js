$(document).ready(function () {
    //play();
});

function play() {
    document.getElementById('audiofile').play();
}

function pause() {
    document.getElementById('audiofile').pause();
}

function restart() {
    document.getElementById('audiofile').load();
    document.getElementById('audiofile').play();
}

function selectLanguage(language) {
    $("#language").hide();
    $("#status").show();
}

function geosuccess(e) {
    $("#speed").html('your speed is ' + e.coords.speed.x + ' m/s');
}

function geofailure(e) {
    $("#speed").html('unable to determine your speed');
}

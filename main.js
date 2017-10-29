$(document).ready(function () {
    $("#status").hide();

    if (navigator.onLine) {
        $("#onlinestatus").html('YOU ARE ONLINE');
        $("#download").show();
    } else {
        $("#onlinestatus").html('YOU APPEAR TO BE OFFLINE');
        $("#download").hide();
    }

    window.applicationCache.addEventListener('cached', function (e) {
        $("#status").html("<a href='audiotour1.html'>START AUDIO TOUR</a>");
        $("#language").hide();
        $("#status").show();
        // if (e.message != undefined) {
        //     $("#cacheevent").html("checking " + e.message);
        // }
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('noupdate', function (e) {
        $("#status").html("<a href='audiotour1.html'>START AUDIO TOUR</a>");
        $("#language").hide();
        $("#status").show();
        // if (e.message != undefined) {
        //     $("#cacheevent").html("checking " + e.message);
        // }
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('updateready', function (e) {
        $("#status").html("<a href='audiotour1.html'>START AUDIO TOUR</a>");
        $("#language").hide();
        $("#status").show();
        // if (e.message != undefined) {
        //     $("#cacheevent").html("checking " + e.message);
        // }
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('checking', function (e) {
        // if (e.message != undefined) {
        //     $("#cacheevent").html("checking " + e.message);
        // }
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('downloading', function (e) {
        // if (e.message != undefined) {
        //     $("#cacheevent").html("downloading " + e.message);
        // }
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('error', function (e) {
        // $("#cacheevent").html("error " + e.message);
        // $("#cachestatus").html(window.applicationCache.status);
        if (window.applicationCache.status === 1) {
            $("#status").html("<a href='audiotour1.html'>START AUDIO TOUR</a>");
            $("#language").hide();
            $("#status").show();
        }
    }, false);

    window.applicationCache.addEventListener('obsolete', function (e) {
        // $("#cacheevent").html("obsolete " + e.message);
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.addEventListener('progress', function (e) {
        // $("#cacheevent").html("progress " + e.message);
        var percentageLoaded = Math.ceil(e.loaded / e.total * 100);
        $("#loaded").html(percentageLoaded);
        // $("#cachestatus").html(window.applicationCache.status);
    }, false);

    window.applicationCache.update();

    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        window.applicationCache.swapCache();
    }

    // if (navigator.geolocation) {
    //     var optn = {
    //         enableHighAccuracy: true,
    //         timeout: Infinity,
    //         maximumAge: 0
    //     };
    //     // Get the user's current position
    //     navigator.geolocation.getCurrentPosition(showPosition, showError, optn);
    // } else {
    //     alert('Geolocation is not supported in your browser');
    // }
    //startWatch();
});

function showPosition(position) {
    document.write('Latitude: ' + position.coords.latitude + '. Longitude: ' + position.coords.longitude + '. Speed: ' + position.coords.speed);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function startWatch() {
    if (navigator.geolocation) {
        var optn = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        };
        watchId = navigator.geolocation.watchPosition(showPosition, showError, optn);
    } else {
        alert('Geolocation is not supported in your browser');
    }
}

function stopWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}
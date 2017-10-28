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

    if (window.DeviceMotionEvent) {
        var lastTimestamp;
        var speedX = 0,
            speedY = 0,
            speedZ = 0;
        window.addEventListener('devicemotion', function (event) {
            var currentTime = new Date().getTime();
            if (lastTimestamp === undefined) {
                lastTimestamp = new Date().getTime();
                return; //ignore first call, we need a reference time
            }
            //  m/s² / 1000 * (miliseconds - miliseconds)/1000 /3600 => km/h (if I didn't made a mistake)
            speedX = event.acceleration.x / 1000 * ((currentTime - lastTimestamp / 1000)) / 3600;
            //... same for Y and Z
            lastTimestamp = currentTime;
            //if (speedX > 0.1) {
                $("#speed").html(Math.ceil(speedX));
            //}
        }, false);
    }
});
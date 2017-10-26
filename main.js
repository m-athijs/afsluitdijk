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
});




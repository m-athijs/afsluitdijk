window.applicationCache.addEventListener('cached', function (e) {
    $("#status").html("<a href='#'>start audio tour</a>");
    if (e.message != undefined) {
        $("#cacheevent").html("checking " + e.message);
    }
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('noupdate', function (e) {
    $("#status").html("<a href='#'>start audio tour</a>");
    if (e.message != undefined) {
        $("#cacheevent").html("checking " + e.message);
    }
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('updateready', function (e) {
    $("#status").html("<a href='#'>start audio tour</a>");
    if (e.message != undefined) {
        $("#cacheevent").html("checking " + e.message);
    }
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('checking', function (e) {
    if (e.message != undefined) {
        $("#cacheevent").html("checking " + e.message);
    }
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('downloading', function (e) {
    if (e.message != undefined) {
        $("#cacheevent").html("downloading " + e.message);
    }
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('error', function (e) {
    $("#cacheevent").html("error " + e.message);
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('obsolete', function (e) {
    $("#cacheevent").html("obsolete " + e.message);
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.addEventListener('progress', function (e) {
    $("#cacheevent").html("progress " + e.message);
    $("#cachestatus").html(window.applicationCache.status);
}, false);

window.applicationCache.update();

if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
}
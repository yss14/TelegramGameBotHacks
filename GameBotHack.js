var DESIRED_SCORE = 300;

var R = (location.hash || "").substr(1),
    R = R.replace(/[\?&].*/g, "");

function gb(a, c, b) {
    var e = new XMLHttpRequest,
        d = [],
        f;
    for (f in c) d.push(encodeURIComponent(f) + "=" + encodeURIComponent(c[f]));
    e.onreadystatechange = function () {
        4 == e.readyState &&
            200 == e.status && b(JSON.parse(e.responseText))
    };
    e.open("POST", a, !0);
    e.send(d.join("&"))
}

gb("/api/setScore", {
    data: R,
    score: DESIRED_SCORE || 0
}, function (a) {
    console.log("Success");
    console.log(a);
});
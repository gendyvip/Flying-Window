var start = document.getElementById("startFly")
var stop = document.getElementById("stopFly")
var x = 0, y = 0
var flying = true;
start.addEventListener("click", function () {
    myWindow = window.open("", "", "width=100, height=100");
    interval = setInterval(function () {
        flyingWindow()
    }, 50)
})

function flyingWindow() {
    myWindow.moveTo(x, y);

    if (flying) {
        x += 20;
        y += 20;
    } else {
        x -= 20;
        y -= 20;
    }
    if (x + 100 >= screen.availWidth || y + 100 >= screen.availHeight) {
        flying = false;
    }
    if (x < 0 || y < 0) {
        flying = true;
    }
}

stop.addEventListener("click", function () {
    clearInterval(interval)
    myWindow.close()
})




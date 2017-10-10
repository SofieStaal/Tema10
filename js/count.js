document.addEventListener("DOMContentLoaded", function () {

    var seconds = 0;
    var minutes = 0;

    setInterval(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }

        if (seconds < 10) {
            secondsText = "0" + seconds;
        } else {
            secondsText = seconds;
        }

        if (minutes < 10) {
            minutesText = "0" + minutes;
        } else {
            minutesText = minutes;
        }

        document.querySelector('#tid').textContent = minutesText + ":" + secondsText;

    }, 1000);
});

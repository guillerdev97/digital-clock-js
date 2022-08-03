"use strict"

const clock = document.querySelector(".clockTime");

const getClockTime = function () {
    const dateObject = new Date();
    const timeElements = {
        hour: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        seconds: dateObject.getSeconds()
    }
    clock.innerHTML = `${timeElements.hour} hrs : ${timeElements.minutes} min : ${timeElements.seconds} sec`;
}

setInterval(getClockTime, 1000);
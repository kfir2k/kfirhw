import { Timeuntil, interval } from "./services.js"


document.getElementById("userInput").addEventListener("change", (event) => {

    window.clearInterval(interval)
    console.log(event);
    console.log(event.target.value)
    let timer = new Timeuntil(event.target.value)
    timer.createTimer("timer")


});


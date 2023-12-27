
export let interval
export class Timeuntil {


    constructor(estOffset, hours, min, sec) {


        this.estOffset = Number(estOffset)
        this.hours = hours;
        this.min = min;
        this.sec = sec;
    }

    createTimer(element) {

        interval = setInterval(() => {

            let getTime = new Date;
            let utcOffset = getTime.getTimezoneOffset() / 60


            getTime.setHours(getTime.getHours() + utcOffset + this.estOffset);
            // getTime.setHours()

            console.log("Get HOURS", getTime.getHours());


            this.hours = getTime.getHours().toString().padStart(2, '0');;
            this.min = getTime.getMinutes().toString().padStart(2, '0');
            this.sec = getTime.getSeconds().toString().padStart(2, '0');;


            document.getElementById(element).innerHTML = `${this.hours}:${this.min}:${this.sec}`



        }, 100)
        console.log("test", interval);


    }




}



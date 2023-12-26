export class Timeuntil {
    constructor(hours, min, sec) {
        this.hours = hours;
        this.min = min;
        this.sec = sec;
    }

    createTimer(element) {


        setInterval(() => {

            let getTime = new Date;
            console.log('DATE CLASS', getTime);


            this.hours = getTime.getHours().toString().padStart(2, '0');;
            this.min = getTime.getMinutes().toString().padStart(2, '0');
            this.sec = getTime.getSeconds().toString().padStart(2, '0');;

            document.getElementById(element).innerHTML = `${this.hours}:${this.min}:${this.sec}`



        }, 1000)

    }


}



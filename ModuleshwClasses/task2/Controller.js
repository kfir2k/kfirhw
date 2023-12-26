import { getData } from "./Services.js";
import { display5Posts, displaySpecificID } from "./display.js";
let checkUsed = false

export async function controller() {
    if (checkUsed === false) {

        let myData = await getData()
        console.log(typeof (myData));
        display5Posts(myData)
        checkUsed = true;
    } else {
        alert("youve already got your info")
    }
}

export async function controllerIdInput() {
    checkUsed = true;
    const id = document.getElementById('idInput');
    const idValue = id.value;
    console.log(`user id from controller ${idValue}`);
    let myData = await getData()
    displaySpecificID(myData, idValue)
}
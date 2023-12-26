export function printRandom() {
    let randomNumer = getRandomNumber(1000)
    console.log(`from print`, randomNumer);
    document.getElementById("output").innerHTML = `${randomNumer}`


}

function getRandomNumber(number) {
    console.log(number, typeof (number));
    return Math.floor(Math.random() * number)
}





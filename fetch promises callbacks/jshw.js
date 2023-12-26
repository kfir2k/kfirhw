let div = document.getElementById("div");




function randomNumber(number) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * number);
            console.log(`random number from interval ${randomNumber}`);
            resolve(randomNumber)
        }, 1000);

    })
}



async function main() {
    let num = prompt(`enter number`)
    div.innerHTML = await randomNumber(num)

}

main()


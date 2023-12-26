const xhr = new XMLHttpRequest();
const countryImage = document.getElementById("countryImage");

let getData = (country) => {
    let myPromise = new Promise((resolve, reject) => {
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                let obj = JSON.parse(xhr.response);
                let imgUrl = obj[0].flags.png;
                console.log("inside onload of get data", imgUrl);
                resolve(imgUrl)
            } else {
                console.log("error from else");
                reject("Error", xhr)
            }
        };
        xhr.open("GET", `https://restcountries.com/v3.1/name/${country}`);
        xhr.send();

    })
    return (myPromise)


};

let printData = async () => {
    try {
        let country = prompt("Enter country name");
        console.log("before await", country);
        let flagDisplay = await getData(country);
        console.log("flag display", flagDisplay);
        countryImage.src = flagDisplay

    } catch (error) {
        console.error(error);
        countryImage.src = "errore.jpg"
        // Handle the error here (e.g., show an error message to the user)
    }
}



document.getElementById("btn").addEventListener("click", printData)







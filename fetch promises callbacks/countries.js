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

let printData = () => {
    let country = prompt("enter country name")
    const p = getData(country)
    p.then((data) => {
        console.log(data);
        countryImage.src = data;
    }).catch(() => {
        countryImage.src = "errore.jpg"
        console.log("error from catch");
    })
}



document.getElementById("btn").addEventListener("click", printData)







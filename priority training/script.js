



function getTopOrders() {
    console.log("🚀 ~ file: script.js:25 ~ getTopOrders ~ 1:")
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://demoen.softsolutions.co.il/odata/priority/tabula.ini/demo/SOF_FORMS");
        xhr.setRequestHeader("Authorization", "Basic d21zOjEyMzQ1");
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send();





    })

}


let myPromis = getTopOrders()
myPromis.then((data) => {
    console.log(data);
})



const xhr = new XMLHttpRequest();
const demo = document.getElementById("demo");
const btn = document.getElementById("btn");

const myPromise = new Promise((resolve, reject) => {
    console.log("before promise");
    xhr.onload = () => {
        console.log("onload");
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("in if");
            let users = JSON.parse(xhr.response);
            let user1 = JSON.stringify(users[0])
            demo.innerHTML = user1
            resolve(users);
        } else {
            reject('Error: '+ xhr.status);
        }
    }
})

document.getElementById("btn").addEventListener("click", () => {
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.send()
 

})
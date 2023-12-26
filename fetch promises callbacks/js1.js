// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Get the element with the id "demo" and store it in the variable "demo"
const demo = document.getElementById("demo");

// Log a message to the console indicating that we are before the promise declaration
console.log("Before promise declaration");

// Create a new Promise that takes two parameters: resolve and reject
const myPromise = new Promise((resolve, reject) => {
    // Log a message to the console indicating that we are inside the promise
    console.log("In promise");

    // Set up an event handler for the XMLHttpRequest's onload event
    xhr.onload = () => {
        // Log a message to the console indicating that we are inside the onload event
        console.log("In onload");

        // Check if the status of the XMLHttpRequest is in the range of success (200-299)
        if (xhr.status >= 200 && xhr.status < 300) {
            // Log a message to the console indicating that we are inside the if statement
            console.log("In if");

            // Parse the JSON response from the server
            let users = JSON.parse(xhr.response);

            // Stringify the first user in the array
            let user1 = JSON.stringify(users[0]);

            // Resolve the promise with the stringified user1
            resolve(user1);
        } else {
            // If the status is not in the success range, reject the promise with an error message
            reject('Error: ' + xhr.status);
        }
    };
});

console.log("After settings");
document.getElementById("btn").addEventListener("click", () => {
    console.log("Btn click");

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    myPromise.then((data) => {
        console.log("In promise then");
        console.log(data);
        demo.innerHTML = data;
    }).catch((error) => {
        // If there's an error, log an error message to the console
        console.log("ERROR");
    });
});

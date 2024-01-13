

// task3
// ===========================


// async function getData() {

//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//         if (response.ok) {
//             let data = await response.json();
//             console.log("All posts form server", data);
//         } else {
//             console.log("problem with response", response.status);
//         }
//     } catch {
//         console.log("fetch faild  ");
//     }
// }
// getData()




// task4
// ===========================

// async function getData() {

//     try {
//         let response = await fetch(`https://jsonplaceh2333442222older.typicod232323e.com/posts`)

//         if (response.ok) {
//             let data = await response.json();
//             console.log("All posts form server", data);
//         } else {
//             console.log("problem with response", response.status);
//         }
//     } catch (error) {
//         console.error(`Fetch didnt work: ${error.message}`);
//     }
// }

// getData()














// task5
// ===========================

document.getElementById('myForm').addEventListener('submit', event => event.preventDefault());

async function getData() {

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments`)

        if (response.ok) {
            let data = response.json();
            // console.log("All posts form server", data);
            return data
        } else {
            console.log("problem with response", response.status);
        }
    } catch (error) {
        console.error(`Fetch didnt work: ${error.message}`);
    }
}


function display5Posts(arry) {

    const filteredArray = arry.filter(obj => obj.postId <= 5);
    let displayArea = document.getElementById("div")
    const tableHead = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>

    `;
    let table = "";
    filteredArray.forEach(obj => {

        table += `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>${obj.body}</td>
        </tr>
        `



    })
    displayArea.innerHTML += `<table>${tableHead}${table}</table>`;

}


function displaySpecificID(arry, userid) {

    checkUsed = true;
    const obj = arry.find(obj => obj.postId === Number(userid));
    let displayArea = document.getElementById("div")

    console.log(obj, userid);
    const tableHead = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Description</th>
    `;
    let table = "";
    table = `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td>${obj.body}</td>
        </tr>
        `




    displayArea.innerHTML = `<table>${tableHead}${table}</table>`;


}

let checkUsed = false
async function controller() {


    if (checkUsed === false) {

        let myData = await getData()
        console.log(typeof (myData));
        console.log(myData);
        display5Posts(myData)
        checkUsed = true;
    } else {
        alert("youve already got your info")
    }




}

async function controllerIdInput() {
    const id = document.getElementById('idInput');
    const idValue = id.value;
    console.log(`user id from controller ${idValue}`);
    // alert("stop")
    let myData = await getData()
    displaySpecificID(myData, idValue)




}

document.getElementById("btn").addEventListener("click", controller);
document.getElementById('userIdBtn').addEventListener('click', controllerIdInput)


// task 6
// =============


// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// let raw = JSON.stringify({
//     "title": "my first post",
//     "body": "test",
//     "userId": 101
// });

// let requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
// };

// fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//     .then((response) => {

//         console.log("STATUS CODE", response.status);
//         return response.text()

//     })
//     .then(result => console.log("POST TO SEVER", result))
//     .catch(error => console.log('error', error));







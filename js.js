const div = document.getElementById("div");
const xhr = new XMLHttpRequest()

xhr.onload = function () {


    usersArry = JSON.parse(xhr.responseText)
    console.log(usersArry);
    for (let user; user < usersArry.) {

    }


};



xhr.open("GET", 'https://jsonplaceholder.typicode.com/users')

xhr.send()




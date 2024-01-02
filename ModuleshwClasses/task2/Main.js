import { controller, controllerIdInput } from './Controller.js'
    document.getElementById('myForm').addEventListener('submit', event => event.preventDefault());
document.getElementById("btn").addEventListener("click", controller);
document.getElementById('userIdBtn').addEventListener('click', controllerIdInput)
export function display5Posts(arry) {
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

export function displaySpecificID(arry, userid) {

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
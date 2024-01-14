class Users {
    #users

    async getUsers() {

        this.#users = await this.#getUsersFromServer()
        // console.log("in get users", this.#users);
        return this.#users


    }

    setUsers() {

    }



    async #getUsersFromServer() {

        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let arry = await response.json()
        // console.log("from get users from server", arry);
        return arry



    }





}


function controller() {
    let myUsers = new Users();
    myUsers.getUsers()
        .then(users => {
            console.log(users);
        })
        .catch(error => {
            console.error(error);
        });
}


controller();





// let myUsers = new Users()
// console.log(myUsers.getUsers());    
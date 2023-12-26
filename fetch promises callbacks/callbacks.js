const getUserData = new Promise((resolve, reject) => {
    const userData = { userId: 173, name: 'John', emailConfirmation: true, emailConfirmationDate: "17/04/2020" } // getUserDataFromApi(173);
    if (userData) resolve(userData);
    else reject(new Error('Error'));    
});

const checkEmailConfirmation = user => {
    if (user.emailConfirmation) return Promise.resolve(user.emailConfirmationDate);
}

getUserData
    .then(checkEmailConfirmation)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
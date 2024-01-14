//function contactsList(id: string, contactsArry: string[]) {
//	if (contactsArry.length === 0) {
//		console.log("There is no arry legnth");
//		return null
//	}

	
//	let foundContact = contactsArry.find((contact) => id === contact);

//	if (foundContact) {
//		return `Contact found:${foundContact}`
//    } else {
//        return "No contact was found with this id";
//    }
//}



//console.log(contactsList("211303482",["207583717","211303482"]));
//console.log(contactsList("207583717",["207583717","211303482"]));
//console.log(contactsList("32",["207583717","211303482"]));


//console.log("==========================================");



function contactsListObj(id: string, contactsArryOfObjects: object[]) {
	if (contactsArryOfObjects.length === 0) {
		console.log("There is no arry legnth");
		return null
	}

	
	let foundContact = contactsArryOfObjects.find((contact) => {
			return id === (contact as { id: string }).id;
	})
	if (foundContact) {
		return foundContact
    } else {
        return "No contact was found with this id";
    }
}


let myContact1: { name: string , id:string, email: string, phone: string  } = {
    name: "kfir",
    id: "123456",
    email: "kfir@gmail.com",
    phone: "987654321",
};

let myContact2: { name: string , id:string, email: string, phone: string  } = {
    name: "Maital",
    id: "12345",
    email: "maital@gmail.com",
    phone: "87654321",
};



console.log(contactsListObj("123456",[myContact1 ,myContact2]));
console.log(contactsListObj("12345",[myContact1 ,myContact2]));
console.log(contactsListObj("1234",[myContact1 ,myContact2]));



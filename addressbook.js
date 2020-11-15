"use strict";

// Class Decalaration
class ContactDetails {
    // Constructor: Intialize an Object Using Param
    constructor(...params) {
        this.firstName = params[0];
        this.lastname = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    // getter and seter methods
    //firstname
    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        var regexp = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (regexp.test(firstName)) {
            this._firstName = firstName;
        } else
            throw "First Name should start with capital letter and have minimum three characters";
    }
    //lastname
    get lastname() {
        return this._lastname;
    }

    set lastname(lastname) {
        var regexp = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (regexp.test(lastname)) {
            this._lastname = lastname;
        } else
            throw "Last Name should start with capital letter and have minimum three characters";
    }
    //address
    get address() {
        return this._address;
    }

    set address(address) {
        var regexp = RegExp("^[a-zA-Z0-9 ]{4,}$");
        if (regexp.test(address)) {
            this._address = address;
        } else throw "Address should have minimum four characters";
    }

    //city
    get city() {
        return this._city;
    }

    set city(city) {
        var regexp = RegExp("^[a-zA-Z ]{4,}$");
        if (regexp.test(city)) {
            this._city = city;
        } else throw "City should have minimum four characters";
    }

    // state
    get state() {
        return this._state;
    }

    set state(state) {
        var regexp = RegExp("^[a-zA-Z ]{4,}$");
        if (regexp.test(state)) {
            this._state = state;
        } else throw "State should have minimum four characters";
    }

    // zip
    get zip() {
        return this._zip;
    }

    set zip(zip) {
        var regexp = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (regexp.test(zip)) {
            this._zip = zip;
        } else throw "Zip Code is Incorrect should be of standard format xxx xxx";
    }
    // phone
    get phone() {
        return this._phone;
    }

    set phone(phone) {
        var regexp = RegExp("^[0-9]{2} [0-9]{10}$");
        if (regexp.test(phone)) {
            this._phone = phone;
        } else throw "Phone Number is Incorrect";
    }
    // Email
    get email() {
        return this._email;
    }

    set email(email) {
        var regexp = RegExp(
            "^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$"
        );
        if (regexp.test(email)) {
            this._email = email;
        } else throw "Email is Incorrect";
    }

    //toString Method
    toString() {
        return (
            "First Name: " +
            this.firstName +
            " Last Name: " +
            this.lastname +
            " Address: " +
            this.address +
            " City: " +
            this.city +
            " State: " +
            this.state +
            " Zip: " +
            this.zip +
            " Phone number: " +
            this.phone +
            " Email: " +
            this.email
        );
    }
}

// Create New AddressBook  and  Add contact to it
let AddressBookArr = new Array();
let contact1 = new ContactDetails("Adam", "Shaw", "xyz apartments", "Mumbai", "Maharashtra", "312542", "91 9534567890", "adam@gmail.com");
let contact2 = new ContactDetails("John", "Smith", "abc apartments", "NewYork", "England", "123456", "91 9988776655", "john@yahoo.com");
let contact3 = new ContactDetails("Mark", "Boucher", "pqr apartments", "Delhi", "Delhi", "789456", "91 9874561234", "mark@rediff.com");
let contact4 = new ContactDetails("David", "Warner", "qwe apartments", "London", "Wales", "456123", "91 9975462184", "david@capg.com");

try {
    AddressBookArr.push(contact1);
    AddressBookArr.push(contact2);
    AddressBookArr.push(contact3);
    AddressBookArr.push(contact4);
} catch (e) {
    console.error("Unable to Add Contact");
}

// Function to find Contact in AddressBook
function findContact(firstName, lastname) {
    let contactObj;
    AddressBookArr.forEach((contact) => {
        if (contact.firstName == firstName && contact.lastname == lastname) {
            contactObj = contact;
        }
    });
    return contactObj;
}

// Function to edit Contact
function editContact(contact, newValue, property) {
    try {
        switch (property) {
            case "firstName":
                contact.firstName = newValue;
                break;
            case "lastname":
                contact.lastname = newValue;
                break;
            case "address":
                contact.address = newValue;
                break;
            case "city":
                contact.city = newValue;
                break;
            case "state":
                contact.state = newValue;
                break;
            case "zip":
                contact.zip = newValue;
                break;
            case "phone":
                contact.phone = newValue;
                break;
            case "email":
                contact.email = newValue;
                break;
            default:
                break;
        }
    } catch (error) {
        console.error("Unable to Edit Contact");
    }
}
// Function to Find Existing Contact and delete Contact from AddressBook
function findAndDeleteContact(firstName, lastname) {
    let contact = findContact(firstName, lastname);
    AddressBookArr.pop(contact);
}

// Function to Count Number of Contacts in AddressBook
function countContact(addressBook) {
    let count = 0;
    count = AddressBookArr.reduce(count => count + 1, 0)
    console.log("Total Number of Contacts in AddressBook: " + count);
}

// Function to Add Contact in AddressBook and ensure no duplicate exists
function addContact(contactToAdd) {
    if (AddressBookArr.find(contact => contact.firstName == contactToAdd.firstName))
        console.log("Contact Already exists!!!");
    else
        AddressBookArr.push(contact);
}

// Function to Search contact in AddressBook By city
function searchContactByCity(property,value, AddressBook) {
    let filteredAddressBook;
    switch (property) {
        case "city":
            filteredAddressBook = AddressBookArr.filter(contact => contact.city == value);
            break;
        case "state":
            filteredAddressBook = AddressBookArr.filter(contact => contact.state == value);
            break;
    }
    return filteredAddressBook;
}

// Find and Edit Contact : Calling Functions
let contactToEdit = findContact("David", "Warner");
editContact(contactToEdit, "Shaun", "firstName");
console.log(contactToEdit.toString());
console.log("/--------------------");

// Delete Contact from AddressBook Array :Calling Function
findAndDeleteContact("David", "Warner");
AddressBookArr.forEach((contactObj) => {
    console.log(contactObj.toString() + "\n");
});
console.log("/--------------------");

// Count Number of Contacts : Calling Function
console.log("COUNT CONTACT")
countContact(AddressBookArr);
console.log("/--------------------");

// Add Contact to AddressBook : Calling Function
let contact = new ContactDetails(
    "Adam",
    "Shaw",
    "xyz apartments",
    "Mumbai",
    "Maharashtra",
    "312542",
    "91 9534567890",
    "adam@gmail.com"
);
addContact(contact);

// Search Contact in AddressBook by city or state : Calling Function
console.log("SEARCH CONTACT");
let contacts = searchContactByCity("city","Delhi",AddressBookArr);
console.log(contact.toString());
console.log("/--------------------");
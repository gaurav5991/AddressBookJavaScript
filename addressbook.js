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
let contact1 = new ContactDetails(
  "Adam",
  "Shaw",
  "xyz apartments",
  "Mumbai",
  "Maharashtra",
  "312542",
  "91 9534567890",
  "adam@gmail.com"
);
let contact2 = new ContactDetails(
  "John",
  "Smith",
  "abc apartments",
  "NewYork",
  "England",
  "123456",
  "91 9988776655",
  "john@yahoo.com"
);
let contact3 = new ContactDetails(
  "Mark",
  "Boucher",
  "pqr apartments",
  "Delhi",
  "Delhi",
  "789456",
  "91 9874561234",
  "mark@rediff.com"
);
let contact4 = new ContactDetails(
  "David",
  "Warner",
  "qwe apartments",
  "London",
  "Wales",
  "456123",
  "91 9975462184",
  "david@capg.com"
);

try {
  AddressBookArr.push(contact1, contact2, contact2, contact4);
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
  count = addressBook.reduce((count) => count + 1, 0);
  console.log("Total Number of Contacts in AddressBook: " + count);
}

// Function to Add Contact in AddressBook and ensure no duplicate exists
function addContact(contactToAdd) {
  if (
    AddressBookArr.find(
      (contact) => contact.firstName == contactToAdd.firstName
    )
  )
    console.log("Contact Already exists!!!");
  else AddressBookArr.push(contact);
}

// Function to Search contact in AddressBook By city
function searchContactByCity(property, value, AddressBook) {
  let filteredAddressBook;
  switch (property) {
    case "city":
      filteredAddressBook = AddressBook.filter(
        (contact) => contact.city == value
      );
      break;
    case "state":
      filteredAddressBook = AddressBook.filter(
        (contact) => contact.state == value
      );
      break;
  }
  return filteredAddressBook;
}

// Function to view Contact by City or State
function viewContact(property, value, addressBook) {
  let contactMap = new Map();
  switch (property) {
    case "City":
      addressBook.forEach((contact) => {
        if (!contactMap.get(contact.city)) {
          contactMap.set(contact.city, [contact]);
        } else {
          contactMap.get(contact.city).push(contact);
        }
      });
      break;
    case "State":
      addressBook.forEach((contact) => {
        if (!contactMap.get(contact.state)) {
          contactMap.set(contact.state, [contact]);
        } else {
          contactMap.get(contact.state).push(contact);
        }
      });
      break;
  }
  return contactMap;
}

// Count by city/state
function countByProperty(property, addressBookArr) {
  let countMap = new Map();
  switch (property) {
    case "city":
      let contactMapCity = viewContact("city", addressBookArr);
      contactMapCity.forEach((value, key) => {
        countMap.set(key, value.length);
      });
      break;
    case "state":
      let contactMapState = viewContact("state", addressBookArr);
      contactMapState.forEach((value, key) => {
        countMap.set(key, value.length);
      });
      break;
  }
  return countMap;
}

// Sort by firstName, city, state or zip
function sortByProperty(property, addressBookArr) {
  switch (property) {
    case "firstName":
      return addressBookArr.sort((con1, con2) =>
        con1.firstName > con2.firstName ? 1 : -1
      );
      break;
    case "city":
      return addressBookArr.sort((con1, con2) =>
        con1.city > con2.city ? 1 : -1
      );
      break;
    case "state":
      return addressBookArr.sort((con1, con2) =>
        con1.state > con2.state ? 1 : -1
      );
      break;
    case "zip":
      return addressBookArr.sort((con1, con2) =>
        con1.zip > con2.zip ? 1 : -1
      );
      break;
  }
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
console.log("COUNT CONTACT");
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
let contacts = searchContactByCity("city", "Delhi", AddressBookArr);
console.log(contacts.toString());
console.log("/--------------------");

// View Contact in AddressBook by city or state : Calling Function
try {
  let xyz = viewContact("state", "Delhi", AddressBookArr);
  AddressBookArr.forEach((contact) => console.log(contact.toString()));
} catch (error) {
  console.log("Cannot view Contact. Some input fields are incorrect");
}

// Count Contact in AddressBook by city or state : Calling Function
let countMap = countByProperty("city", AddressBookArr);
console.log("COUNT CONTACT");
console.log(countMap);
console.log("/-----------------");

// Sort by first name
let addressBookNameSort = sortByProperty("firstName", AddressBookArr);
console.log("SORT CONTACT BY FIRST NAME");
addressBookNameSort.forEach((contact) => console.log(contact.toString()));
console.log("/------------------");

// Sort by city
let addressBookCitySort = sortByProperty("city", AddressBookArr);
console.log("SORT CONABY CITY");
addressBookCitySort.forEach((contact) => console.log(contact.toString()));
console.log("/------------------");

// Sort by state
let addressBookStateSort = sortByProperty("state", AddressBookArr);
console.log("SORT BY STATE");
addressBookStateSort.forEach((contact) => console.log(contact.toString()));
console.log("/------------------");

// Sort by zip
let addressBookZipSort = sortByProperty("zip", AddressBookArr);
console.log("SORT BY ZIP");
addressBookZipSort.forEach((contact) => console.log(contact.toString()));
console.log("/------------------");

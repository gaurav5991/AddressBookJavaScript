"use strict";

// Class Decalaration
class ContactDetails{
    // Constructor: Intialize an Object Using Param
    constructor(...params){
        this.firstName = params[0];
        this.lastname  = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    // getter and seter methods
    //firstname
    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        var regexp = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(regexp.test(firstName)){
            this._firstName = firstName;
        }
        else throw 'First Name should start with letter and have a minimum of three characters';
    }
    //lastname
    get lastname(){
        return this._lastname;
    }
    
    set lastname(lastname){
        var regexp = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
        if(regexp.test(lastname)){
            this._lastname = lastname;
        }
        else throw 'Last Name should start with letter and have a minimum of three characters';
    }
    //address
    get address(){
        return this._address;
    }
    
    set address(address){
        var regexp = RegExp('^[a-zA-Z0-9 ]{4,}$');
        if(regexp.test(address)){
            this._address = address;
        }
        else throw 'Address should have minimum of four characters';
    }

    //city
    get city(){
        return this._city;
    }
    
    set city(city){
        var regexp = RegExp('^[a-zA-Z ]{4,}$');
        if(regexp.test(city)){
            this._city = city;
        }
        else throw 'City should have minimum of four characters';
    }

    // state
    get state(){
        return this._state;
    }
    
    set state(state){
        var regexp = RegExp('^[a-zA-Z ]{4,}$');
        if(regexp.test(state)){
            this._state = state;
        }
        else throw 'State should have minimum of four characters';
    }

    // zip
    get zip(){
        return this._zip;
    }
    
    set zip(zip){
        var regexp = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if(regexp.test(zip)){
            this._zip = zip;
        }
        else throw 'Zip is not of standard format'
    }
    // phone
    get phone(){
        return this._phone;
    }
    
    set phone(phone){
        var regexp = RegExp('^[0-9]{2} [0-9]{10}$');
        if(regexp.test(phone)){
            this._phone = phone;
        }
        else throw 'Phone Number is Incorrect'
    }
    // Email
    get email(){
        return this._email;
    }
    
    set email(email){
        var regexp = RegExp('^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$');
        if(regexp.test(email)){
            this._email = email;
        }
        else throw 'Email is Incorrect'
    }

    //toString Method
    toString(){
        return "First Name: "+this.firstName + " Last Name: "+this.lastname + " Address: "+this.address+
                " City: "+this.city+" State: "+this.state+" Zip: "+this.zip+" Phone number: "+this.phone+" Email: "+this.email;
    }
}



"use strict";
let arr = [1, 2, "harsh"]; // Array
let arr2 = [1, "harsh"]; // Tuples
// Enumeration  key-value pairs
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["ABANDONED"] = "abandoned status code 500";
    StatusCode["NOTFOUND"] = "not found status code 404";
})(StatusCode || (StatusCode = {}));
let a;
function abcd(a) {
}
// class 
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("Milton", 1200);
class Music {
    constructor(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
let m1 = new Music("Shape of you", "Ed Sheeran", "shape.jpg", 3.5, true);
// abstract class 
class payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class UPI extends payment {
}
// functions
function abcdef(name, age, gender) {
    console.log(name, age, gender);
}
abcdef("harse", 25, "male");
// ... rest/spread
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
function friends(...args) {
    console.log(args);
}
friends("sumit", "aman", "abhay");
// spread
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr3 = [...arr1];
function abcd(a, b) {
    if (typeof a === "string" && typeof b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("Invalid arguments");
}
// Generics
function logger(a) {
    console.log(a);
}
logger("hey");
logger(12);
logger(true);
logger(undefined);
// type assertion
let a1 = "harsh";
let b2 = a1.length;
// type Guard - type narrowing
function abc(arg) {
    if (typeof arg === "string") {
        return arg.length;
    }
    else if (typeof arg === "number") {
        return arg;
    }
    else {
        throw new Error("Invalid argument");
    }
}
abc(12);
abc("harsh");
class tvRemote {
    switchTvoff() {
        console.log("switching of tv");
    }
}
class carRemote {
    switchCaroff() {
        console.log("switching off car");
    }
}
const tv = new tvRemote();
const car = new carRemote();
function switchOffRemote(device) {
    if (device instanceof tvRemote) {
        device.switchTvoff();
    }
    if (device instanceof carRemote) {
        device.switchCaroff();
    }
}
switchOffRemote(tv);
switchOffRemote(car);

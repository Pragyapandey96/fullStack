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

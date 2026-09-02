let arr = [1, 2, "harsh"]  // Array

let arr2: [number, string] = [1, "harsh"] // Tuples

// Enumeration  key-value pairs

enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
} 

enum StatusCode {
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

interface User {
    name: string;
    email: string;
    password: string;
}

interface Admin extends User{
    admin: boolean;
}

// let a: number | null | string

type value = number | null | string;  // |- union

let a: value;

 type user = {
    name: string;
    email: string;
 }

 type admin = user & {
    getDetails(user: string):void
 }

 function abcd(a: admin){
    
 }

 // class 

 class Device {
    name = "lg";
    price = 12000;
    category = "digital";
 }

 let d1 = new Device();
 let d2 = new Device();

class BottleMaker {
    constructor(public name: string, public price: number){}
}

let b1 = new BottleMaker("Milton", 1200);

class Music {
    constructor(public name: string, public artist: string, public thumbnail: string, public length: number, public free: boolean){}
}

let m1 = new Music("Shape of you", "Ed Sheeran", "shape.jpg", 3.5, true);
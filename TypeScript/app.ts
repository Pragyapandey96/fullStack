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


// abstract class 

class payment {
    constructor(protected amount: number, protected account: number){}
    isPaymentValid(amount: number){
        return this.amount > 0;
    }
}
class UPI extends payment{

}

// functions

function abcdef(name:string, age: number, gender: string){
    console.log(name, age, gender);
}

abcdef("harse", 25, "male");


// ... rest/spread

function sum(...arr: number[]){
    console.log(arr);
    
}

sum(1,2,3,4,5,6,7,8,9);


function friends(...args: string[]){
    console.log(args);
    
}

friends("sumit", "aman", "abhay");

// spread

let arr1 = [1,2,3,4,5,6,7,8,9];
let arr3 = [...arr1];


// function overloading

function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: string, b?: any){
    if(typeof a === "string" && typeof b === undefined){
        console.log("hey");
    } 
    if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else throw new Error("Invalid arguments");
}


// Generics

function logger<T>(a: T){
    console.log(a);
    
}

logger<string>("hey");
logger<number>(12);
logger<boolean>(true);
logger<undefined>(undefined);

// type assertion

let a1: any = "harsh";
let b2 = (a1 as string).length;


// type Guard - type narrowing
function abc(arg: string | number){
    if(typeof arg === "string"){
       return arg.length;
    }  
    else if(typeof arg === "number"){
        return arg;
    }
    else {
        throw new Error("Invalid argument");
    }
}


abc(12);
abc("harsh");


class tvRemote {
   switchTvoff(){
    console.log("switching of tv");
   }
}

class carRemote {
     switchCaroff(){
        console.log("switching off car");
     }
}

const tv = new tvRemote();
const car = new carRemote();

function switchOffRemote(device: tvRemote | carRemote){
    if(device instanceof tvRemote){
        device.switchTvoff();
    }
    if(device instanceof carRemote){
        device.switchCaroff();
    }
}

switchOffRemote(tv);
switchOffRemote(car);
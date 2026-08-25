"use strict";
// function addTwo(num){
//     num.toupperCase() // this will give error because num is of type number and number does not have toUpperCase method
//     return num + 2;
// }
// addTwo("5");
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
// function getValue(myVal: number): boolean | string {
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
//     }
const getHello = (s) => {
    return s;
};
addTwo(5);

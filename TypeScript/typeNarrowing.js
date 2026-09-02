"use strict";
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `Chai Order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return "Serving default masala chai";
}
function orderChai(size) {
    if (size === "small") {
        return "small cutting chai";
    }
    if (size === "medium" || size === "Large") {
        return `make extra chai`;
    }
    return `make order #${size}`;
}
class KulhadChai {
    serve() {
        return "Serving kulhad chai";
    }
}
class CuttingChai {
    serve() {
        return "Serving cutting chai";
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
// type ChaiOrder = {
//     type: string 
//     sugar: number
// }
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
// function MakeChai(order: Chai){
//     switch(order.type){
//         case "masala":
//             return `Making masala chai with spice level ${order.spicelevel}`;
//             break;
//         case "ginger":
//             return `Making ginger chai with amount ${order.amount}`;
//             break;
//         case "elaichi":
//             return `Making elaichi chai with aroma ${order.aroma}`;
//     }
// }
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}

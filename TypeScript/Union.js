"use strict";
let score = 33;
score = 44;
score = "55";
// let Pragya: User | Admin = {name: "Pragya", id: 44};
// Pragya = {username: "pandey", id: 55}
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

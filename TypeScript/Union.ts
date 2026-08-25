let score: number | string = 33;

score = 44;

score = "55"

// type User = {
//     name: string,
//     id: number
// }

type Admin = {
    username: string
    id: number
}

// let Pragya: User | Admin = {name: "Pragya", id: 44};

// Pragya = {username: "pandey", id: 55}

function getDbId(id: number | string){
   if(typeof id === "string"){
    id.toLowerCase();
   }
}

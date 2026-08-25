// const User = {
//     name: "Pragya",
//     email: "pragya@co.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}


// createUser({name: "Pragya", isPaid: false})


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User){
//     return {name:"", email: "", isActive: true}
// }

// createUser({name:"", email: "", isActive: true})
// export{}


// type User = {
//     readonly _id: string
//     name: string
//     email: string
//     isActive: boolean
//     creditCardDetails?: number
// }

// let myUser: User = {
//     _id: "1234",
//     name: "pragya",
//     email: "pragya@p.com",
//     isActive: false
// }

// myUser.email = "pp@p.com"
// // myUser._id = "123"


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv: number
}

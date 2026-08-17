// function addTwo(num){
//     num.toupperCase() // this will give error because num is of type number and number does not have toUpperCase method
//     return num + 2;
// }
// addTwo("5");

function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    if(isPaid === void 0) {
        isPaid = false;
    }
}

// function getValue(myVal: number): boolean | string {
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
//     }

const getHello = (s: string): string =>3333

    addTwo(5);
    getUpper("Pragya");
    // Additional logic for signing up user
    signUpUser("Pragya", "ppandey@gmail.com", false)


export{}
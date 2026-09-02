type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
    
}
type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

interface CupSize {
   size:  "small" | "large"

} 
class chai implements CupSize{
   size: "small" | "large"= "large";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean ;
// }

// for class prefer interface not type

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t);
    
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string
}
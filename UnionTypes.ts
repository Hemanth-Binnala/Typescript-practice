let age2 : number | string ;
age2 = 23;
age2 = "24"

type Loc = {
    x: number,
    y: number
}

type UnionPoint = {
    lan: number,
    long: number
}

let cords : Loc | UnionPoint = {x:23,y:45}
cords = {lan:23,long:45}

/// UNION TYPE WITH FUNCTIONS /// -- Type narrowing use cond in func

function unionAge(age : number | string) : void{
    console.log(`age is ${age}`);
}

function unoinTax (price : number | string,tax : number){
    if(typeof price == "string"){
        price = parseFloat(price.replace("$",""))
    }
    return price * tax;
}

// UNION TYPES AND ARRAYS

const numUnion : number[] =[1,2,3,4]    // accepts only number
const stuff1 : any[] = [1,"bubu",true]  // accepts any
const stuff2 : number[] | string [] = [1,2,3]  // accepts either all numbers or all string but not both.
const stuff3 : (number | string )[] = [1,2,3,'duud']  // accepts both number and string

// LITERAL TYPES

let mood : "Happy" | "sad" = "Happy";   // can be only these
mood = "sad";
// mood = "angry" // doesen;t work

type DayOfWeek = "Monday" | "tues" | "wed" | "thurs" | "fri" | "sat" | "sun"

let day : DayOfWeek = 'fri';
// SAME AS TYPE ALIAS BUT SLIGHT DIFFERENT SYNTAX - works only with object shape

// type pointInterface = {
//     x: number,
//     y:number
// }

// const pt : pointInterface = {x:23,y:56}

// interface is the same but we don't use "="

interface pointInterface {
    x: number,
    y:number
}

const pt : pointInterface = {x:23,y:56}

// ReadOnly / optional

interface PersonInterface{
    readonly userid : number, //readonly
    last : string;
    first : string;
    nick ?: string ;         // optional
    sayHi() : string;
    sayBi : () => string      // this and above are same;
}

const thomas : PersonInterface = {userid : 1234,last : "bubu",first : "dudu",
    nick : "budu",sayBi : () => {return "Hello"},sayHi: () => {return "bye"}}

// thomas.userid = 9809809;  .. -- deosn't work as it is read-only 

interface Product{
    price : number;
    name : string;
    applyDiscount(discount : number) : number;
}

const shoes : Product = {
    name : "blue shoes",
    price : 400,
    applyDiscount(amount:number){          // here in args we can send anything either amount or discount
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    }
}

// NOW COMES THE MAJOR DIFFERENCE BTW TYPE AND INTERFACE -- ACTUALYY WE CAN rEOPEN THE INTERFACES AND CAN ADD EXTRA PROPERTIES 
// WHERE AS IN TYPE IT OVERRIDES INSTEAD OF ADDING

interface Dog1{
    name : string;
    age : number
}

interface Dog1{
    breed : string;
    bark() : string
}

const pupy : Dog1 = {
    name : "cute",
    age : 3,
    breed : "shepaerd",
    bark(){
        return " bow"
    }
}

// we can extend interfaces either single or multiple interfaces

interface serviceDog extends Dog1{
    job : "Sniffer" | "Bomb squad" | "guider"
}

const chewy : serviceDog = {
    name : "allu",
    age : 24,
    breed : "july",
    bark(){
        return " bark"
    },
    job : "Sniffer"

}

// example for multiple interface

interface Human{
    name : string
}

interface Employee{
    email : string,
    readonly userid : number
}

interface Engineer extends Human,Employee{
    level : string,
    languages : string[]
}

const sai : Engineer = {
    name : "sai",
    email : "sai@gmail.com",
    userid : 23,
    level : "senior",
    languages : ["c","pythin"]
}
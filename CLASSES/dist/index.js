console.log("Hey bubu !!!!!!");
// class Player{
//     public readonly first : string;
//     public readonly last : string;
//     private score: number =0;      // in JS we use # for private but the error comes only during compilation but here it is on beforehand
//     constructor(first:string,last:string){
//         this.first = first;
//         this.last = last;
//     }
//    private secretMethod(){
//         console.log("it is a secret")
//     }
// }
// const Jack = new Player("Jack","Sparrow");
// Jack.first = "sai" -- can't do this bcz it is readonly
// In TS all properties are public by default and can make private.
// Jack.score -- doen't work as it is private
///////////SHORT HAND PROPERTY////////////////
class Player {
    // public readonly first : string;
    // public readonly last : string;
    // private score: number =0;      // in JS we use # for private but the error comes only during compilation but here it is on beforehand
    constructor(first, last, 
    // private _score : number
    _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("it is a secret");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("wrong");
        }
        this._score = newScore;
    }
}
class superPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999; // won't work as it is private but will work if protected
        this._score = 9999999; // will work with protected -- can be accessed in child classes
    }
}
const Jack = new Player("Jack", "Sparrow", 0);
Jack.fullName;
Jack.score; // GETTER
Jack.score = 99; // SETTER
class Bike {
    // color = "red";
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    // color = "red";
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket("Nike", "black");
///////////ABSTRACT CLASSES////////////////////////
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("hello");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getpay() {
        return this.salary;
    }
}
class partTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWored) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWored = hoursWored;
    }
    getpay() {
        return this.hourlyRate * this.hoursWored;
    }
}
const betty = new FullTimeEmployee("betty", "white", 97000);
console.log(betty.getpay());
const bill = new partTimeEmployee("bIll", "billersaon", 34, 56);
console.log(bill.getpay());
export {};
//# sourceMappingURL=index.js.map
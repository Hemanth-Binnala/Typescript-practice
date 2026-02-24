console.log("Hey bubu !!!!!!")

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

class Player{
    // public readonly first : string;
    // public readonly last : string;
    // private score: number =0;      // in JS we use # for private but the error comes only during compilation but here it is on beforehand
    constructor(
        public first:string,
        public last:string,
        // private _score : number
        protected _score : number
    ) {}

   private secretMethod(){
        console.log("it is a secret")
    }

    get fullName() : string{
        return `${this.first} ${this.last}`
    }

    get score() : number{
        return this._score;
    }

    set score(newScore : number){
        if(newScore < 0){
            throw new Error("wrong");
        }
        this._score = newScore;
    }

}

class superPlayer extends Player{
    isAdmin : boolean =true;
    maxScore(){
        this._score = 9999999;  // won't work as it is private but will work if protected
        this._score = 9999999;  // will work with protected -- can be accessed in child classes
    }
}

const Jack = new Player("Jack","Sparrow",0);
Jack.fullName
Jack.score       // GETTER
Jack.score = 99; // SETTER





///////////INTERFACES////////////////

interface Colorful{
    color : string;
}

interface Printable{
    print() : void;
}

class Bike implements Colorful{
    // color = "red";
    constructor(public color : string){}
}

class Jacket implements Colorful,Printable{
    // color = "red";
    constructor(public brand : string,public color : string){}
    print(){
        console.log(`${this.color} ${this.brand}`);
    }
}


const bike1 = new Bike('red');

const jacket1 = new Jacket("Nike","black")

///////////ABSTRACT CLASSES////////////////////////

abstract class Employee{
    constructor(public first : string,public last : string){}
    abstract getpay() : number;
    greet(){
        console.log("hello");
    }
}

class FullTimeEmployee extends Employee{
    constructor(first : string,last : string,private salary: number){
        super(first,last);
    }
    getpay() : number{
        return this.salary;
    }
}

class partTimeEmployee extends Employee{
    constructor(first : string,last : string
        ,private hourlyRate: number,
        private hoursWored : number
    ){
        super(first,last);
    }
    getpay(): number {
        return this.hourlyRate * this.hoursWored;
    }

}

const betty = new FullTimeEmployee("betty","white",97000)
console.log(betty.getpay());

const bill = new partTimeEmployee("bIll","billersaon",34,56)
console.log(bill.getpay());





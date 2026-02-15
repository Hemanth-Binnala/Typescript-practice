function printName(person : {first : string , last :string}) : void{
    console.log(`${person.first}${person.last}`)
}

printName({first : "sai",last : "dudu"})

let coordinate : {x: number,y:number} = {x:34,y:43}             // this and the below are same

function makeCordinate() : {x: number,y:number} {
    return {x:Math.random(),y:Math.random()}
}

//EXCESS PROPERTIES//

// printName({first : "sai",last : "dudu",age : "25"})  // doesn't work has we have exceess properites. but it is fine if we pass as below

const singer = {first : "sai",last : "dudu",age : "25",status: "hero"}
printName(singer); // takes only the necessary properties

// TYPE ALIAS// -- can be defined and can use anywhere

type Point = {
    x: number,
    y:number
}

let coordinate1 : Point = {x:34,y:43}             

function makeCordinate1() : Point {
    return {x:Math.random(),y:Math.random()}
}

function makeCordinate2(point: {x: number,y:number}) : {x: number,y:number} {
    return {x:Math.random(),y:Math.random()}
}

function makeCordinate3(point: Point): Point {
    return {x:Math.random(),y:Math.random()}
}

// also works for primitive types

type myNum = number
let num : myNum = 9;

// NESTED OBJECTS //

type Song = {
    title : string,
    artist : string,
    numStreams : number,
    credits : {
        producer : string,
        writer  :string
    }

}

function calc(song : Song) : number {
    return song.numStreams*0.003;
}

function printSong(song : Song) : void {
    console.log(song.title + song.artist);
}

const mySong : Song = {
    title : "jai ho",
    artist : "dudu",
    numStreams : 12334,
    credits : {
        producer : "bubu",writer : "ublu"
    }
}

const earn = calc(mySong)
console.log(earn)
printSong(mySong)

// optional Properties

type Point1 = {
    x : number,
    y : number,
    z?: number // OPTIONAL
}

const valid : Point ={x:23,y:67}

// READONLY MODIFIER // 

type User = {
    readonly userid : number,
    name : string
}

const user : User = {   // here it works
    userid : 234,
    name : "sai"
}

// user.userid = "233"  // doesn;t work as it is readonly property

// INTERSECTION TYPE // - WE CAN INTERSECT TWO TYPES

type Circle={
    radius : number
}

type Colorful={
    color : string
}

type ColorfulCircle = Circle & Colorful // intersection

const happyface : ColorfulCircle = {
    radius : 4, color : "red"
}

type Cat={
    numLives : number
}

type Dog={
    breed : string
}

type CatDog = Cat & Dog & {
    age : number          // can add extra
}

const jimmy : CatDog = {
    numLives : 4, breed : "red",age:23
}
function square(num : number){
    return num * num;
}

function greet(person : string){
    return `Hi ${person}`
}

const doSomething = (person : string,age: number,isFunny:boolean) => {};

function greet1(person : string = "bubu"){               /////sets default value
    return `Hi ${person}`
}

/////////////RETURN TYPE ANNOTATIONS/////////////////////// : if no return statement type annotation is set to void.

function square1(num : number) : number{
    return num * num;
}

function greet3(person : string) : string{
    return `Hi ${person}`
}

function isRandom(num:number) : string | number{           // IF RETURN TYPE HAS MORE THAN ONE RETURN TYPE USE UNION.
    if(Math.random() < 0.5) return "bub";
    else return num;
}

// IN ANONYMOUS FUNCTIONS THE TYPESCRIPT CAN DETERMINE THE TYPE ANNOTATION//////////

const col = ["red","yellow","black"]

col.map(color => {
    color.toLocaleUpperCase();
    // color.tofixed() - gives error
})

//VOID TYPE//

function printTwice(msg : string) : void{
    console.log("sai");
    // return "" - GIVES ERROR AS TYPE ANNOTATION FOR RETURN IS VOID
}


// NEVER// - indicates function should never return anything at all

function makeError(msg : string) : never{
    throw new Error(msg);
}

function infyLoop() : never{
    while(true){
        console.log("dudu");
    }
}



square(3);
greet("dudu");
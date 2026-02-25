console.log("Hello!!!!!!!!!!! ");

function printDouble(msg : string){
    console.log(msg);
}

printDouble("dudu is good boy");

const butn = document.getElementById("btn");
const butn1 = document.getElementById("btn")!;  // ! is the Type can be used we are very sure that btn id exists.
//  to see the diff on butn and butn1. we will not have null in type assertion.


butn?.addEventListener("click",function(){
    alert("Hi bubu:)")
})

//Type Assertion - use this with "as" when we know something more than the webpage

let mystery : unknown = "hello dudu!!!!"

const len = (mystery as string).length;  // though still the type is unknown it treat as string in this particular line

// EXAMPLE OF TYPE ASSERTION

const input = document.getElementById("todoinput")! as HTMLInputElement;

butn1.addEventListener("click",function(){
    alert(input.value);    // here we get error as value doen't exist in HtmlElement type for input.
    input.value = "";       // we can resolve by  type assertion adding HTMLINPUTELEMENT to above input. 
})



//////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Todo{
    text : string;
    completed  : boolean
}



const formbtn = document.getElementById("formbtn");
const formtodoinput = document.getElementById("formtodoinput")! as HTMLInputElement;
const form  = document.querySelector('form')!;
const list = document.getElementById("todoList")!;

const todos : Todo[] = readTodos();
(window as any).todos = todos;
todos.forEach(createTodoElement)

function readTodos() : Todo[]{
    const todoJSON = localStorage.getItem("todos");
    if(todoJSON == null) return [];
    return JSON.parse(todoJSON);
}

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function handleSubmit(e : SubmitEvent){
    e.preventDefault();
    const newTodo : Todo = {
        text : formtodoinput.value,
        completed :false
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    // const newTodoText = formtodoinput.value;
    // const newLI = document.createElement("Li");
    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";
    // newLI.append(newTodoText);
    // newLI.append(checkbox);
    // list.append(newLI);
    // localStorage.setItem("todos",JSON.stringify(todos));
    saveTodos();
    formtodoinput.value = "";
    console.log("submitted");

}

function createTodoElement(todo : Todo){
    
    const newLI = document.createElement("Li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change",function(){
        todo.completed = checkbox.checked;
        saveTodos();
    })
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener("submit",handleSubmit);

/////////////////////////GENERICS/////////////////////////

// Generics are those which the input type and return same type.


function identity<Type>(item : Type) : Type{
    return item;
}
// insteat of "Type" we can write "T"
function identity1<T>(item : T) : T{
    return item;
}


identity<number>(7);
identity1<string>("hello");

function getRandomElement<T>(list : T[]) : T {
    if (list.length === 0) {
        throw new Error("List cannot be empty");
    }
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx]!;
}

console.log(getRandomElement<string>(["a","b","c"]));
console.log(getRandomElement<number>([1,34,556,345,344]));

getRandomElement(["afsdfs","dsadb","c"]) // with the list input it can read the type and is called Inferred Generic type

//  GENERICS WITH MULTIPLE OBJECTS // for multiple use differnt words each 

function merge<T,U>(obj1 : T,obj2 : U) : T & U{
    return{
        ...obj1,
        ...obj2
    }
}

const combObj = merge({name : "colt"},{pets : ["blue","elton"]})
merge({name : "colt"},9) // no error though 9 is non obj

// as of now in mege if we send one obj and other string 
// there won't be any error but non object won't go to comBobj so to ensure
// in merge we have only obj we need to add type constraints.

function merge1<T extends object,U extends object>(obj1 : T,obj2 : U) : T & U{
    return{
        ...obj1,
        ...obj2
    }
}

// merge1({name : "colt"},9) error as 9 is non object

interface Lengthy{
    length : number;
}

function printDoubleLength<T extends Lengthy>(thing : T) : number{
    return thing.length * 2;
}

printDoubleLength("adsA");

// DEFAULT TYPE PARAMETERS

function makeEmptyArray<T = number>() : T[]{ // here the default one is nummber 
    return [];
}

const strings = makeEmptyArray(); // by default type is number

const strings1 = makeEmptyArray<boolean>; //now it is set to boolean

//GENERIC CLASSES//

interface Song{
    title: string;
    creator : string;
}

interface Video{
    title: string;
    creator : string;
    resolution : string;
}

class PlayList<T> {
    public queue: T[] = [];
    add(el : T){
        this.queue.push(el)
    }
}

const songs = new PlayList<Song>()

const videos = new PlayList<Video>()








 


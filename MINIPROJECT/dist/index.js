console.log("Hello!!!!!!!!!!! ");
function printDouble(msg) {
    console.log(msg);
}
printDouble("dudu is good boy");
const butn = document.getElementById("btn");
const butn1 = document.getElementById("btn"); // ! is the Type can be used we are very sure that btn id exists.
//  to see the diff on butn and butn1. we will not have null in type assertion.
butn === null || butn === void 0 ? void 0 : butn.addEventListener("click", function () {
    alert("Hi bubu:)");
});
//Type Assertion - use this with "as" when we know something more than the webpage
let mystery = "hello dudu!!!!";
const len = mystery.length; // though still the type is unknown it treat as string in this particular line
// EXAMPLE OF TYPE ASSERTION
const input = document.getElementById("todoinput");
butn1.addEventListener("click", function () {
    alert(input.value); // here we get error as value doen't exist in HtmlElement type for input.
    input.value = ""; // we can resolve by  type assertion adding HTMLINPUTELEMENT to above input. 
});
const formbtn = document.getElementById("formbtn");
const formtodoinput = document.getElementById("formtodoinput");
const form = document.querySelector('form');
const list = document.getElementById("todoList");
const todos = readTodos();
window.todos = todos;
todos.forEach(createTodoElement);
function readTodos() {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON == null)
        return [];
    return JSON.parse(todoJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: formtodoinput.value,
        completed: false
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
function createTodoElement(todo) {
    const newLI = document.createElement("Li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
/////////////////////////GENERICS/////////////////////////
// Generics are those which the input type and return same type.
function identity(item) {
    return item;
}
// insteat of "Type" we can write "T"
function identity1(item) {
    return item;
}
identity(7);
identity1("hello");
function getRandomElement(list) {
    if (list.length === 0) {
        throw new Error("List cannot be empty");
    }
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 34, 556, 345, 344]));
getRandomElement(["afsdfs", "dsadb", "c"]); // with the list input it can read the type and is called Inferred Generic type
//  GENERICS WITH MULTIPLE OBJECTS // for multiple use differnt words each 
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
merge({ name: "colt" }, 9); // no error though 9 is non obj
// as of now in mege if we send one obj and other string 
// there won't be any error but non object won't go to comBobj so to ensure
// in merge we have only obj we need to add type constraints.
function merge1(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("adsA");
// DEFAULT TYPE PARAMETERS
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray(); // by default type is number
const strings1 = (makeEmptyArray); //now it is set to boolean
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
const videos = new PlayList();
//////TYPE NARROWING////////////////
// Typeof Guards
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Truthiness Guards
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (!word) {
        word; // string or undefined
        console.log("No word");
    }
    else {
        for (let c of word) {
            console.log(c);
        }
    }
};
// EQUITY NARROWING  // accepts if both are same type based on the cond
function someDemo(x, y) {
    if (x === y) {
        x;
        y;
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "OG", duration: 140 }));
console.log(getRuntime({ title: "Omi", numEpisodes: 10, episodeDuration: 30 }));
//INSTANCEOF NARROWING //  if we are having instance it eill check the instanceOf and executes if the cond is true.
function printFullDate(date) {
    if (date instanceof Date) {
        date;
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "meow";
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "oink";
        case ("cow"):
            return "Mool";
        case ("rooster"):
            return "cookoooo";
        default:
            const _exhaustivecheck = animal; // Exhaustive check to tell if we miss any case.
            return _exhaustivecheck;
    }
}
const sai = {
    name: "jacl",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(sai));
export {};
//////////    
//# sourceMappingURL=index.js.map
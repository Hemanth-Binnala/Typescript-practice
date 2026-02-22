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
export {};
//# sourceMappingURL=index.js.map
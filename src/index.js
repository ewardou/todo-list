import { todos } from "./todo";
import {addProject,addCompletedClass} from "./dom";

let todoFunctions=todos();
let lol=todoFunctions.createNewTodo("jj","jkd","jdl","jd");
let testItem=todoFunctions.createNewTodo("take the trash","none","date","priority");
let testProject=todoFunctions.createNewProject("test");

let lol2=todoFunctions.createNewTodo("aaa","aaa","aaa","aaa");
let testItem2=todoFunctions.createNewTodo("go to the bank","none","date","priority");
let testProject2=todoFunctions.createNewProject("test");

todoFunctions.addTodoToProject(testProject,lol,testItem);
todoFunctions.addTodoToProject(testProject2,lol2,testItem2);

console.log(testItem.completed);
console.log(testProject);


addProject(testProject);
addProject(testProject2);

let checkboxes=document.querySelectorAll("input");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click",(event)=>{
        addCompletedClass(event);
        // todoFunctions.markAsCompleted();
    })
})
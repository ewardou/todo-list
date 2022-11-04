import { todos } from "./todo";

let todoFunctions=todos();
let lol=todoFunctions.createNewTodo("jj","jkd","jdl","jd");
let testItem=todoFunctions.createNewTodo("take the trash","none","date","priority");
let testProject=todoFunctions.createNewProject("test");

todoFunctions.addTodoToProject(testProject,lol,testItem);

console.log(testItem.completed);
console.log(testProject);

todoFunctions.markAsCompleted(testItem);
console.log(testItem.completed);
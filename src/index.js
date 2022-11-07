import { todos } from "./todo";
import {createProject,addCompletedClass} from "./dom";

let todoFunctions=todos();
let lol=todoFunctions.createNewTodo("jj","jkd","jdl","jd");
let testItem=todoFunctions.createNewTodo("take the trash","none","date","priority");
let testProject=todoFunctions.createNewProject("test");

let lol2=todoFunctions.createNewTodo("aaa","aaa","aaa","aaa");
let testItem2=todoFunctions.createNewTodo("go to the bank","none","date","priority");
let testProject2=todoFunctions.createNewProject("test 2 lol");


todoFunctions.addTodoToProject(testProject,lol,testItem);
todoFunctions.addTodoToProject(testProject2,lol2,testItem2);

todoFunctions.addProjectToArray(testProject,testProject2);
console.log(todoFunctions.getProjects());

let testProject3=todoFunctions.createNewProject("test");
todoFunctions.addProjectToArray(testProject3);
console.log(todoFunctions.getProjects());

function getIndexOfProject(event){
    let projectContainer=event.target.closest(".project");
    let title=projectContainer.querySelector("p");
    let projectArray=todoFunctions.getProjects();
    let index;
    projectArray.forEach((project)=>{
        if (project.projectName===title.textContent){
            index=projectArray.indexOf(project);
        }
    })
    return index;
}

createProject(testProject);
createProject(testProject2);

let checkboxes=document.querySelectorAll("input");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click",(event)=>{
        addCompletedClass(event);
        let project=todoFunctions.getProjects();
        let indexOfTodo=Number(event.target.parentNode.getAttribute("data-index"));
        todoFunctions.markAsCompleted(project[getIndexOfProject(event)].todoItems[indexOfTodo]);
    });
});
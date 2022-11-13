import { todos } from "./todo";
import {createProjectElement,addCompletedClass,createMoreSection,createRemoveProjectSection} from "./dom";

//Delete test projects
let todoFunctions=todos();
let lol=todoFunctions.createNewTodo("jj","jkd","2021-11-11",false);
let testItem=todoFunctions.createNewTodo("take the trash","none","2023-02-15",false);
let testProject=todoFunctions.createNewProject("test");

let lol2=todoFunctions.createNewTodo("aaa","aaa","2018-07-10",false);
let testItem2=todoFunctions.createNewTodo("go to the bank","none","2023-08-18",false);
let testProject2=todoFunctions.createNewProject("test 2 lol");


todoFunctions.addTodoToProject(testProject,lol,testItem);
todoFunctions.addTodoToProject(testProject2,lol2,testItem2);

todoFunctions.addProjectToArray(testProject,testProject2);
console.log(todoFunctions.getProjects());

function openTodoModal(){
    let todoModal=document.querySelector(".todo-modal");
    let overlay=document.querySelector(".overlay");
    todoModal.classList.add("active");
    overlay.classList.add("active");
}

function addProjectIdentifier(event){
    let projectIndex=getIndexOfProject(event);
    let createTodoButton=document.querySelector(".todo-modal button:last-of-type");
    createTodoButton.setAttribute("data-project-index",projectIndex);
} 

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

createProjectElement(testProject);
createProjectElement(testProject2);

(function addHandlers(){
    // Project Modal
    let newProjectButton=document.querySelector("header>button");
    let overlay=document.querySelector(".overlay");
    let projectModal=document.querySelector(".project-modal");
    let todoModal=document.querySelector(".todo-modal");
    let closeButton=document.querySelectorAll(".close");
    let addProjectButton=document.querySelector(".project-modal>form>button:last-of-type");

    newProjectButton.addEventListener("click",()=>{
        overlay.classList.add("active");
        projectModal.classList.add("active");
        if (document.querySelector("span>div")){
            document.querySelector("span>div").remove();
            document.querySelector("header>button:nth-of-type(2)").classList.add("close");
            document.querySelector("header>button:nth-of-type(2)").classList.remove("open");            
        }
    });
    function closeModal(){
        overlay.classList.remove("active")
        projectModal.classList.remove("active");
        todoModal.classList.remove("active");
    };
    function resetForm(){
        document.querySelector(".project-modal>form").reset();
        document.querySelector(".project-modal p").textContent="";
        document.querySelector(".todo-modal>form>p").textContent="";
        document.querySelector(".todo-modal>form").reset();
        document.querySelector("#date").setAttribute("disabled","");
        let createTodoButton=document.querySelector(".todo-modal button:last-of-type");
        createTodoButton.removeAttribute("data-project-index");    
    }
    overlay.addEventListener("click",()=>{
        closeModal();
        resetForm();
    });
    closeButton.forEach(button=>{
        button.addEventListener("click",()=>{
            closeModal();
            resetForm();
        });
    });

    addProjectButton.addEventListener("click",()=>{
        let projectNameInput=document.querySelector(".project-modal input[type=text]");
        let message=document.querySelector(".project-modal p");
        let regex=/[\S]+/gm;
        if (!(regex.test(projectNameInput.value))){
            message.textContent="Please enter a name";
            return;
        } else if(todoFunctions.checkRepeatedProjectName(projectNameInput.value.trim())){
            message.textContent="This name is already taken, please enter another one"
            return;
        } else {
            let newProject=todoFunctions.createNewProject(projectNameInput.value.trim());
            todoFunctions.addProjectToArray(newProject);
            createProjectElement(newProject);
            resetForm();
            closeModal();
            addHandlersToPlusButtons();
        }
    });

    function addHandlersToPlusButtons(){
        let plusButtons=document.querySelectorAll(".project>button");
        plusButtons.forEach(button=>{
            button.addEventListener("click",(event)=>{
                openTodoModal();
                addProjectIdentifier(event);
            });
        })
    }
    addHandlersToPlusButtons();
    
    function addHandlersToCheckboxes(){
        let checkboxes=document.querySelectorAll("div[data-index]>input[type=checkbox]");
        checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener("click",(event)=>{
            addCompletedClass(event);
            let todo=getTodo(event);
            todoFunctions.markAsCompleted(todo);
            });
        });
    };
    addHandlersToCheckboxes();    

    //Todo Modal
    let deadlineCheckbox=document.querySelector("#deadline");
    deadlineCheckbox.addEventListener("click",(event)=>{
        let dateInput=document.querySelector("#date")
        return (event.target.checked) ? dateInput.removeAttribute("disabled") : dateInput.setAttribute("disabled","");
    });

    let addTodoButton=document.querySelector(".todo-modal button:last-of-type");
    function getTodoValues(){
        let title=document.querySelector("#title").value;
        let description=document.querySelector("#description").value;
        let date=document.querySelector("#date").value;
        let priority=document.querySelector("#priority").checked;    
        return [title,description,date,priority];
    };

    addTodoButton.addEventListener("click",(event)=>{
        let todo=todoFunctions.createNewTodo(...getTodoValues());
        console.log(todo);
        let message=document.querySelector(".todo-modal>form>p");
        let regex=/[\S]+/gm;
        if (!(regex.test(todo.title))){
            message.textContent="Please enter a title";
            return;
        };
        let projectIndex=event.target.getAttribute("data-project-index");
        let project=todoFunctions.getProjects()[projectIndex];
        todoFunctions.addTodoToProject(project,todo);
        console.log(project.todoItems);
        resetForm();
        closeModal();
        renderProjects();
    })

    function renderProjects(){
        document.querySelector(".container").textContent=""
        let projectArray=todoFunctions.getProjects();
        projectArray.forEach(project=>createProjectElement(project));
        addHandlersToPlusButtons();
        addHandlersToCheckboxes();
        addHandlersToMoreButtons();
    }

    function addMoreSection(event){
        let container=event.target.parentNode;
        let todo=getTodo(event);
        container.append(createMoreSection(todo));
        event.target.classList.add("open");
        event.target.classList.remove("close");
    };
    function removeMoreSection(event){
        let container=event.target.parentNode;
        let todoIndex=container.getAttribute("data-index");
        let moreSection=document.querySelector(`div[data-index="${todoIndex}"]>.more-todo`);
        container.removeChild(moreSection);
        event.target.classList.remove("open");
        event.target.classList.add("close");
    }
    function addHandlersToMoreButtons(){
        let moreButtons=document.querySelectorAll(".more");
        moreButtons.forEach(button=>{
            button.addEventListener("click",(event)=>{
                let presentClass=event.target.getAttribute("class");
                if (presentClass.includes("close")){
                    addMoreSection(event);
                    addHandlersToRemoveButton();
                } else {
                    removeMoreSection(event);
                }
            })
        })
    };
    addHandlersToMoreButtons();

    function getTodo(event){
        let container=event.target.closest("div[data-index]");
        let projectArray=todoFunctions.getProjects();
        let todoIndex=container.getAttribute("data-index");
        let projectIndex=getIndexOfProject(event);
        let todo=projectArray[projectIndex].todoItems[todoIndex];
        return todo;
    }
    function removeTodoElement(event){
        let project=todoFunctions.getProjects()[getIndexOfProject(event)];
        let todo=getTodo(event);
        todoFunctions.removeTodo(project,todo);
        renderProjects();
    }
    function addHandlersToRemoveButton(){
        let removeButtons=document.querySelectorAll(".remove");
        removeButtons.forEach(button=>{
            button.addEventListener("click",event=>{
                removeTodoElement(event);
            })
        })
    }
    let removeProjectButton=document.querySelector("header>button:nth-of-type(2)");
    removeProjectButton.addEventListener("click",(event)=>{
        let presentClass=event.target.getAttribute("class");
        let container=document.querySelector("span");
        if (presentClass.includes("close")){
            container.append(createRemoveProjectSection(todoFunctions.getProjects()));
            document.querySelector("span button").addEventListener("click",addHandlerToRemoveProjectButton);
            event.target.classList.remove("close");
            event.target.classList.add("open");
        } else {
            container.removeChild(container.querySelector("div"));
            event.target.classList.remove("open");
            event.target.classList.add("close");
        }
    })
    function addHandlerToRemoveProjectButton(){
        let checkboxes=document.querySelectorAll("span input[type='checkbox']");
        checkboxes.forEach(checkbox=>{
            if (checkbox.checked){
                let title=checkbox.getAttribute("id");
                let projectsArray=todoFunctions.getProjects();
                projectsArray.forEach(project=>{
                    if (project.projectName===title){
                        todoFunctions.removeProject(projectsArray[projectsArray.indexOf(project)]);
                    };
                });
                renderProjects();
            };
        });
        document.querySelector("span div").remove();
        document.querySelector("header>button:nth-of-type(2)").classList.add("close");
        document.querySelector("header>button:nth-of-type(2)").classList.remove("open");
    };
})();
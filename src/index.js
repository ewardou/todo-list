import { todos } from "./todo";
import "./style.css";
import {createProjectElement,addCompletedClass,createMoreSection,createRemoveProjectSection} from "./dom";


let todoFunctions=todos();

function openTodoModal(){
    let todoModal=document.querySelector(".todo-modal");
    let overlay=document.querySelector(".overlay");
    todoModal.classList.add("active");
    overlay.classList.add("active");
}

function addProjectIdentifier(event,className){
    let projectIndex=getIndexOfProject(event);
    let createTodoButton=document.querySelector(`${className} button:last-of-type`);
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


let addHandlers=(function(){
    // Project Modal
    let newProjectButton=document.querySelector("header>button");
    let overlay=document.querySelector(".overlay");
    let projectModal=document.querySelector(".project-modal");
    let todoModal=document.querySelector(".todo-modal");
    let closeButton=document.querySelectorAll("button.close");
    let addProjectButton=document.querySelector(".project-modal>form>button:last-of-type");
    let editModal=document.querySelector(".edit-modal");

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
        editModal.classList.remove("active");
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
            updateStorage();
        }
    });

    function addHandlersToPlusButtons(){
        let plusButtons=document.querySelectorAll(".project>button");
        plusButtons.forEach(button=>{
            button.addEventListener("click",(event)=>{
                openTodoModal();
                addProjectIdentifier(event,".todo-modal");
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
        let dateInput=document.querySelector("#date");
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
        if (checkEmptyNameField(".todo-modal",todo)){return};
        let projectIndex=event.target.getAttribute("data-project-index");
        let project=todoFunctions.getProjects()[projectIndex];
        todoFunctions.addTodoToProject(project,todo);
        console.log(project.todoItems);
        resetForm();
        closeModal();
        renderProjects();
        updateStorage();
    })
    function checkEmptyNameField(className,todo){
        let message=document.querySelector(`${className}>form>p`);
        let regex=/[\S]+/gm;
        if (!(regex.test(todo.title))){
            message.textContent="Please enter a title";
            return true;
        };
    }

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
                    addHandlersToEditButton();
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
        updateStorage();
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
                updateStorage();
            };
        });
        document.querySelector("span div").remove();
        document.querySelector("header>button:nth-of-type(2)").classList.add("close");
        document.querySelector("header>button:nth-of-type(2)").classList.remove("open");
    };

    function addHandlersToEditButton(){
        let editProjectButton=document.querySelectorAll(".more-todo img:first-of-type");
        editProjectButton.forEach(button=>{
            button.addEventListener("click",(event)=>{
                editModal.classList.add("active");
                overlay.classList.add("active");
                let todo=getTodo(event);
                getEditFormValues(todo);
                addTodoIdentifier(event);
                addProjectIdentifier(event,".edit-modal");
            });    
        });
    };
    function getEditFormValues(todo){
        let title=document.querySelector("#edit-title");
        title.value=todo.title;
        let description=document.querySelector("#edit-description");
        description.value=todo.description;
        let date=document.querySelector("#edit-date");
        date.value=todo.dueDate;
        document.querySelector("#edit-deadline").checked=false;
        document.querySelector("#edit-date").setAttribute("disabled","");
        if(todo.dueDate!==""){
            document.querySelector("#edit-deadline").checked=true;
            document.querySelector("#edit-date").removeAttribute("disabled");
        }
        let priority=document.querySelector("#edit-priority");
        priority.checked=todo.priority;
    }
    let editDeadlineCheckbox=document.querySelector("#edit-deadline");
    editDeadlineCheckbox.addEventListener("click",(event)=>{
        let dateInput=document.querySelector("#edit-date");
        return (event.target.checked) ? dateInput.removeAttribute("disabled") : dateInput.setAttribute("disabled","");
    });

    function modifyTodoValues(todo){
        todo.title=document.querySelector("#edit-title").value;
        todo.description=document.querySelector("#edit-description").value;
        todo.dueDate=document.querySelector("#edit-date").value;
        todo.priority=document.querySelector("#edit-priority").checked;
    }
    let makeChangesButton=document.querySelector(".edit-modal button:last-of-type");
    makeChangesButton.addEventListener("click",(event)=>{
        let projectIndex=event.target.getAttribute("data-project-index");
        let todoIndex=event.target.getAttribute("data-todo-index");
        let todo=todoFunctions.getProjects()[projectIndex].todoItems[todoIndex];
        modifyTodoValues(todo);
        if (checkEmptyNameField(".edit-modal",todo)){return};
        closeModal();
        renderProjects();
        updateStorage();
        document.querySelector(".edit-modal>form>p").textContent="";
    })
    function addTodoIdentifier(event){
        let container=event.target.closest("div[data-index]");
        let todoIndex=container.getAttribute("data-index");
        let createTodoButton=document.querySelector(".edit-modal button:last-of-type");
        createTodoButton.setAttribute("data-todo-index",todoIndex);
    }     
    
    return {
        renderProjects
    }
})();

if (!(localStorage.getItem("projectsRecord"))){
    initializeProjects();
    updateStorage();
    addHandlers.renderProjects();
} else {
    addHandlers.renderProjects();
}
function updateStorage(){
    let value=todoFunctions.getProjects();
    localStorage.setItem("projectsRecord",JSON.stringify(value));
};
function updateProjects(){
    return JSON.parse(localStorage.getItem("projectsRecord"));
};
function initializeProjects(){
    let testItem=todoFunctions.createNewTodo("Book flights and hotel room","","2023-07-20",true);
    let testItem2=todoFunctions.createNewTodo("Buy the tickets","","2023-03-15",true);
    let testItem3=todoFunctions.createNewTodo("Buy power bank","","",false);
    let testItem4=todoFunctions.createNewTodo("Ask friends","","",false);
    let concert=todoFunctions.createNewProject("Concert");
    todoFunctions.addTodoToProject(concert,testItem,testItem2,testItem3,testItem4);
    todoFunctions.addProjectToArray(concert);
}
console.log(todoFunctions.getProjects());
export {updateProjects}
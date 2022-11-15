import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import more from "./icons/more.svg";
import edit from "./icons/edit.svg";
import remove from "./icons/remove.svg";

function createProjectElement(project){
    let container=document.querySelector(".container");
    let projectContainer=document.createElement("div");
    let title=document.createElement("p");
    let addTodoButton=document.createElement("button");
    addTodoButton.textContent="+";

    title.textContent=`${project.projectName}`;
    projectContainer.append(title,addTodoButton);
    addTodoItems(project,projectContainer);
    projectContainer.classList.add("project");
    container.append(projectContainer);
};
function createTodoElement(todo){
    let div=document.createElement("div");
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");

    let label=document.createElement("label");
    label.textContent=`${todo.title}`;

    let date=document.createElement("p");
    if (todo.dueDate){
        let format=capitalize(formatDistanceToNow(new Date(todo.dueDate),{addSuffix:true}));
        date.textContent=format;    
    } else {
        date.textContent="";
    };

    let moreIcon=document.createElement("img");
    moreIcon.setAttribute("src",more);
    moreIcon.classList.add("more");
    moreIcon.classList.add("close");

    div.append(checkbox,label,date,moreIcon);
    if(todo.priority){
        div.classList.add("priority");
    };
    if (todo.completed){
        div.classList.add("completed");
        checkbox.checked=true;
    };
    return div;
};
function addCompletedClass(event){
    let parent=event.target.parentNode;
    if (event.target.checked){
        parent.classList.add("completed");
    } else{
        parent.classList.remove("completed");
    }
};
function addTodoItems(project,projectContainer){
    let todoList=project.todoItems;
    todoList.forEach((todo)=>{
        let item=createTodoElement(todo);
        let index=project.todoItems.indexOf(todo);
        item.setAttribute("data-index",index);
        projectContainer.append(item);
    });
};

function capitalize(string){
    return string[0].toUpperCase()+string.slice(1);
}

function createMoreSection(todo){
    let container=document.createElement("div");
    let descriptionDiv=document.createElement("div");
    let descriptionTitle=document.createElement("p");
    descriptionTitle.textContent="Description";
    let description=document.createElement("p");
    description.textContent=todo.description;
    descriptionDiv.append(descriptionTitle,description);

    let editIcon=document.createElement("img");
    editIcon.setAttribute("src",edit);
    editIcon.classList.add("edit")
    let removeIcon=document.createElement("img");
    removeIcon.setAttribute("src",remove);
    removeIcon.classList.add("remove");

    container.append(descriptionDiv,editIcon,removeIcon);
    container.classList.add("more-todo");
    return container;
}

function createRemoveProjectSection(projectsArray){
    let container=document.createElement("div");
    projectsArray.forEach(project=>{
        let p=document.createElement("p");
        let checkbox=document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("id",project.projectName);
        let label=document.createElement("label");
        label.setAttribute("for",project.projectName);
        label.textContent=project.projectName;
        p.append(checkbox,label);
        container.append(p);
    });
    let button=document.createElement("button");
    button.textContent="Remove";
    container.append(button);
    return container;
}

export {createProjectElement,addCompletedClass,createMoreSection,createRemoveProjectSection};
//Put in a factory pattern
function createProjectElement(project){
    let container=document.querySelector(".container");
    let projectContainer=document.createElement("div");
    let title=document.createElement("p");
    let addTodoButton=document.createElement("button");
    addTodoButton.textContent="+";

    title.textContent=`${project.projectName}`;
    projectContainer.append(title,addTodoButton);
    openTodoModal(addTodoButton);
    let todoList=project.todoItems;
    // Refactor this section 
    todoList.forEach((todo)=>{
        let item=createTodoElement(todo);
        let index=project.todoItems.indexOf(todo);
        item.setAttribute("data-index",index);
        projectContainer.append(item);
    });
    projectContainer.classList.add("project");
    container.append(projectContainer);
};
function createTodoElement(todo){
    let div=document.createElement("div");
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type","checkbox");

    let label=document.createElement("label");
    label.textContent=`${todo.title}`;
    div.append(checkbox,label);
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
function openTodoModal(button){
    button.addEventListener("click",()=>{
        let todoModal=document.querySelector(".todo-modal");
        let overlay=document.querySelector(".overlay");
        todoModal.classList.add("active");
        overlay.classList.add("active");
    })
}

export {createProjectElement,addCompletedClass};
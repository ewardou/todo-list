function addProject(project){
    let container=document.querySelector(".container");
    let title=document.createElement("p");
    title.textContent=`${project.projectName}`;
    container.append(title);
    let todoList=project.todoItems;
    todoList.forEach((todo)=>{
        let item=createTodoElement(todo);
        container.append(item);
    });
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

export {addProject,addCompletedClass};
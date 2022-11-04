function todos(){
    function createNewTodo(title,description,dueDate,priority,completed=false){
        return {
            title,
            description,
            dueDate,
            priority,
            completed
        };
    };
    function createNewProject(projectName){
        let todoItems=[];
        return {
            projectName,
            todoItems
        }
    };
    function addTodoToProject(project,...todo){
        project.todoItems.push(...todo);
    };
    function markAsCompleted(todo){
        return (todo.completed===false) ? todo.completed=true : todo.completed=false;
    };
    return{
        createNewTodo,
        createNewProject,
        addTodoToProject,
        markAsCompleted
    };
};
export {todos};
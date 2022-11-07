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
        let check=checkUniqueProjectName(projectName);
        if (check) {return};
        let todoItems=[];
        return {
            projectName,
            todoItems
        };
    };
    function addProjectToArray(...project){
        projects.push(...project);
    };
    let projects=[];
    let getProjects= ()=>projects;

    function addTodoToProject(project,...todo){
        project.todoItems.push(...todo);
    };
    function markAsCompleted(todo){
        (todo.completed===false) ? todo.completed=true : todo.completed=false;
        console.log(todo.completed);
    };

    function checkUniqueProjectName(projectName){
        let projectsArray=getProjects();
        let check=projectsArray.some((project)=>project.projectName===projectName);
        if (check){
            alert("This name is already assigned.");
            return check;
        };
    };
    return{
        createNewTodo,
        createNewProject,
        addTodoToProject,
        markAsCompleted,
        addProjectToArray,
        getProjects
    };
};
export {todos};
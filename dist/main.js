/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCompletedClass": () => (/* binding */ addCompletedClass),
/* harmony export */   "createProjectElement": () => (/* binding */ createProjectElement)
/* harmony export */ });
//Put in a factory pattern
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
    div.append(checkbox,label);
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
} 



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
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
        };
    };
    function addProjectToArray(...project){
        projects.push(...project);
        console.log(projects);
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

    function checkRepeatedProjectName(projectName){
        let projectsArray=getProjects();
        let check=projectsArray.some((project)=>project.projectName===projectName);
        return check;
    };
    return{
        createNewTodo,
        createNewProject,
        addTodoToProject,
        markAsCompleted,
        addProjectToArray,
        getProjects,
        checkRepeatedProjectName
    };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



//Delete test projects
let todoFunctions=(0,_todo__WEBPACK_IMPORTED_MODULE_0__.todos)();
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

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(testProject);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(testProject2);

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
    });
    function closeModal(){
        overlay.classList.remove("active")
        projectModal.classList.remove("active");
        todoModal.classList.remove("active");
    };
    function resetForm(){
        document.querySelector(".project-modal>form").reset();
        document.querySelector(".project-modal p").textContent="";
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
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(newProject);
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
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addCompletedClass)(event);
            let project=todoFunctions.getProjects();
            let indexOfTodo=Number(event.target.parentNode.getAttribute("data-index"));
            todoFunctions.markAsCompleted(project[getIndexOfProject(event)].todoItems[indexOfTodo]);
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
        projectArray.forEach(project=>(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(project));
        addHandlersToPlusButtons();
        addHandlersToCheckboxes();
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDOEI7O0FBRTdEO0FBQ0Esa0JBQWtCLDRDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSwwREFBb0I7QUFDcEIsMERBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVksMERBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywwREFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9QdXQgaW4gYSBmYWN0b3J5IHBhdHRlcm5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3Qpe1xuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHByb2plY3RDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGFkZFRvZG9CdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50PVwiK1wiO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQ9YCR7cHJvamVjdC5wcm9qZWN0TmFtZX1gO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRpdGxlLGFkZFRvZG9CdXR0b24pO1xuICAgIGFkZFRvZG9JdGVtcyhwcm9qZWN0LHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVUb2RvRWxlbWVudCh0b2RvKXtcbiAgICBsZXQgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNoZWNrYm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcblxuICAgIGxldCBsYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQ9YCR7dG9kby50aXRsZX1gO1xuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gsbGFiZWwpO1xuICAgIGlmICh0b2RvLmNvbXBsZXRlZCl7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkPXRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmZ1bmN0aW9uIGFkZENvbXBsZXRlZENsYXNzKGV2ZW50KXtcbiAgICBsZXQgcGFyZW50PWV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGFkZFRvZG9JdGVtcyhwcm9qZWN0LHByb2plY3RDb250YWluZXIpe1xuICAgIGxldCB0b2RvTGlzdD1wcm9qZWN0LnRvZG9JdGVtcztcbiAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xuICAgICAgICBsZXQgaXRlbT1jcmVhdGVUb2RvRWxlbWVudCh0b2RvKTtcbiAgICAgICAgbGV0IGluZGV4PXByb2plY3QudG9kb0l0ZW1zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLGluZGV4KTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfSk7XG59IFxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LGFkZENvbXBsZXRlZENsYXNzfTsiLCJmdW5jdGlvbiB0b2Rvcygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCB0b2RvSXRlbXM9W107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHRvZG9JdGVtc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvQXJyYXkoLi4ucHJvamVjdCl7XG4gICAgICAgIHByb2plY3RzLnB1c2goLi4ucHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9O1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgZ2V0UHJvamVjdHM9ICgpPT5wcm9qZWN0cztcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QocHJvamVjdCwuLi50b2RvKXtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMucHVzaCguLi50b2RvKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1hcmtBc0NvbXBsZXRlZCh0b2RvKXtcbiAgICAgICAgKHRvZG8uY29tcGxldGVkPT09ZmFsc2UpID8gdG9kby5jb21wbGV0ZWQ9dHJ1ZSA6IHRvZG8uY29tcGxldGVkPWZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVwZWF0ZWRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCBwcm9qZWN0c0FycmF5PWdldFByb2plY3RzKCk7XG4gICAgICAgIGxldCBjaGVjaz1wcm9qZWN0c0FycmF5LnNvbWUoKHByb2plY3QpPT5wcm9qZWN0LnByb2plY3ROYW1lPT09cHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfTtcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgICAgIG1hcmtBc0NvbXBsZXRlZCxcbiAgICAgICAgYWRkUHJvamVjdFRvQXJyYXksXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICBjaGVja1JlcGVhdGVkUHJvamVjdE5hbWVcbiAgICB9O1xufTtcbmV4cG9ydCB7dG9kb3N9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LGFkZENvbXBsZXRlZENsYXNzfSBmcm9tIFwiLi9kb21cIjtcblxuLy9EZWxldGUgdGVzdCBwcm9qZWN0c1xubGV0IHRvZG9GdW5jdGlvbnM9dG9kb3MoKTtcbmxldCBsb2w9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiampcIixcImprZFwiLFwiamRsXCIsXCJqZFwiKTtcbmxldCB0ZXN0SXRlbT10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1RvZG8oXCJ0YWtlIHRoZSB0cmFzaFwiLFwibm9uZVwiLFwiZGF0ZVwiLFwicHJpb3JpdHlcIik7XG5sZXQgdGVzdFByb2plY3Q9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdQcm9qZWN0KFwidGVzdFwiKTtcblxubGV0IGxvbDI9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiYWFhXCIsXCJhYWFcIixcImFhYVwiLFwiYWFhXCIpO1xubGV0IHRlc3RJdGVtMj10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1RvZG8oXCJnbyB0byB0aGUgYmFua1wiLFwibm9uZVwiLFwiZGF0ZVwiLFwicHJpb3JpdHlcIik7XG5sZXQgdGVzdFByb2plY3QyPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChcInRlc3QgMiBsb2xcIik7XG5cblxudG9kb0Z1bmN0aW9ucy5hZGRUb2RvVG9Qcm9qZWN0KHRlc3RQcm9qZWN0LGxvbCx0ZXN0SXRlbSk7XG50b2RvRnVuY3Rpb25zLmFkZFRvZG9Ub1Byb2plY3QodGVzdFByb2plY3QyLGxvbDIsdGVzdEl0ZW0yKTtcblxudG9kb0Z1bmN0aW9ucy5hZGRQcm9qZWN0VG9BcnJheSh0ZXN0UHJvamVjdCx0ZXN0UHJvamVjdDIpO1xuY29uc29sZS5sb2codG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpKTtcblxuZnVuY3Rpb24gb3BlblRvZG9Nb2RhbCgpe1xuICAgIGxldCB0b2RvTW9kYWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLW1vZGFsXCIpO1xuICAgIGxldCBvdmVybGF5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RJZGVudGlmaWVyKGV2ZW50KXtcbiAgICBsZXQgcHJvamVjdEluZGV4PWdldEluZGV4T2ZQcm9qZWN0KGV2ZW50KTtcbiAgICBsZXQgY3JlYXRlVG9kb0J1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbW9kYWwgYnV0dG9uOmxhc3Qtb2YtdHlwZVwiKTtcbiAgICBjcmVhdGVUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLHByb2plY3RJbmRleCk7XG59IFxuXG5mdW5jdGlvbiBnZXRJbmRleE9mUHJvamVjdChldmVudCl7XG4gICAgbGV0IHByb2plY3RDb250YWluZXI9ZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdFwiKTtcbiAgICBsZXQgdGl0bGU9cHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwicFwiKTtcbiAgICBsZXQgcHJvamVjdEFycmF5PXRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKTtcbiAgICBsZXQgaW5kZXg7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGlmIChwcm9qZWN0LnByb2plY3ROYW1lPT09dGl0bGUudGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgaW5kZXg9cHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBpbmRleDtcbn1cblxuY3JlYXRlUHJvamVjdEVsZW1lbnQodGVzdFByb2plY3QpO1xuY3JlYXRlUHJvamVjdEVsZW1lbnQodGVzdFByb2plY3QyKTtcblxuKGZ1bmN0aW9uIGFkZEhhbmRsZXJzKCl7XG4gICAgLy8gUHJvamVjdCBNb2RhbFxuICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXI+YnV0dG9uXCIpO1xuICAgIGxldCBvdmVybGF5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBsZXQgcHJvamVjdE1vZGFsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBsZXQgdG9kb01vZGFsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1tb2RhbFwiKTtcbiAgICBsZXQgY2xvc2VCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbG9zZVwiKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWw+Zm9ybT5idXR0b246bGFzdC1vZi10eXBlXCIpO1xuXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0b2RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWw+Zm9ybVwiKS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwgcFwiKS50ZXh0Q29udGVudD1cIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbW9kYWw+Zm9ybVwiKS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKTtcbiAgICAgICAgbGV0IGNyZWF0ZVRvZG9CdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLW1vZGFsIGJ1dHRvbjpsYXN0LW9mLXR5cGVcIik7XG4gICAgICAgIGNyZWF0ZVRvZG9CdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIpOyAgICBcbiAgICB9XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH0pO1xuICAgIGNsb3NlQnV0dG9uLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwgaW5wdXRbdHlwZT10ZXh0XVwiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGFsIHBcIik7XG4gICAgICAgIGxldCByZWdleD0vW1xcU10rL2dtO1xuICAgICAgICBpZiAoIShyZWdleC50ZXN0KHByb2plY3ROYW1lSW5wdXQudmFsdWUpKSl7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50PVwiUGxlYXNlIGVudGVyIGEgbmFtZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYodG9kb0Z1bmN0aW9ucy5jaGVja1JlcGVhdGVkUHJvamVjdE5hbWUocHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCkpKXtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQ9XCJUaGlzIG5hbWUgaXMgYWxyZWFkeSB0YWtlbiwgcGxlYXNlIGVudGVyIGFub3RoZXIgb25lXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0PXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICB0b2RvRnVuY3Rpb25zLmFkZFByb2plY3RUb0FycmF5KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQobmV3UHJvamVjdCk7XG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIGFkZEhhbmRsZXJzVG9QbHVzQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGRIYW5kbGVyc1RvUGx1c0J1dHRvbnMoKXtcbiAgICAgICAgbGV0IHBsdXNCdXR0b25zPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdD5idXR0b25cIik7XG4gICAgICAgIHBsdXNCdXR0b25zLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIG9wZW5Ub2RvTW9kYWwoKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0SWRlbnRpZmllcihldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkSGFuZGxlcnNUb1BsdXNCdXR0b25zKCk7XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkSGFuZGxlcnNUb0NoZWNrYm94ZXMoKXtcbiAgICAgICAgbGV0IGNoZWNrYm94ZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLWluZGV4XT5pbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCk9PntcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xuICAgICAgICAgICAgYWRkQ29tcGxldGVkQ2xhc3MoZXZlbnQpO1xuICAgICAgICAgICAgbGV0IHByb2plY3Q9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgICAgICAgICAgbGV0IGluZGV4T2ZUb2RvPU51bWJlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICAgICAgICAgIHRvZG9GdW5jdGlvbnMubWFya0FzQ29tcGxldGVkKHByb2plY3RbZ2V0SW5kZXhPZlByb2plY3QoZXZlbnQpXS50b2RvSXRlbXNbaW5kZXhPZlRvZG9dKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFkZEhhbmRsZXJzVG9DaGVja2JveGVzKCk7ICAgIFxuXG4gICAgLy9Ub2RvIE1vZGFsXG4gICAgbGV0IGRlYWRsaW5lQ2hlY2tib3g9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWFkbGluZVwiKTtcbiAgICBkZWFkbGluZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcbiAgICAgICAgbGV0IGRhdGVJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIilcbiAgICAgICAgcmV0dXJuIChldmVudC50YXJnZXQuY2hlY2tlZCkgPyBkYXRlSW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIikgOiBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKTtcbiAgICB9KTtcblxuICAgIGxldCBhZGRUb2RvQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1tb2RhbCBidXR0b246bGFzdC1vZi10eXBlXCIpO1xuICAgIGZ1bmN0aW9uIGdldFRvZG9WYWx1ZXMoKXtcbiAgICAgICAgbGV0IHRpdGxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLmNoZWNrZWQ7ICAgIFxuICAgICAgICByZXR1cm4gW3RpdGxlLGRlc2NyaXB0aW9uLGRhdGUscHJpb3JpdHldO1xuICAgIH07XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcbiAgICAgICAgbGV0IHRvZG89dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKC4uLmdldFRvZG9WYWx1ZXMoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICBsZXQgcHJvamVjdEluZGV4PWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIik7XG4gICAgICAgIGxldCBwcm9qZWN0PXRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKVtwcm9qZWN0SW5kZXhdO1xuICAgICAgICB0b2RvRnVuY3Rpb25zLmFkZFRvZG9Ub1Byb2plY3QocHJvamVjdCx0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS50ZXh0Q29udGVudD1cIlwiXG4gICAgICAgIGxldCBwcm9qZWN0QXJyYXk9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0PT5jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSk7XG4gICAgICAgIGFkZEhhbmRsZXJzVG9QbHVzQnV0dG9ucygpO1xuICAgICAgICBhZGRIYW5kbGVyc1RvQ2hlY2tib3hlcygpO1xuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
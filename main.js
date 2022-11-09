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

let checkboxes=document.querySelectorAll("div[data-index]>input[type=checkbox]");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click",(event)=>{
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addCompletedClass)(event);
        let project=todoFunctions.getProjects();
        let indexOfTodo=Number(event.target.parentNode.getAttribute("data-index"));
        todoFunctions.markAsCompleted(project[getIndexOfProject(event)].todoItems[indexOfTodo]);
    });
});

(function addHandlers(){
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
        }
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUM4Qjs7QUFFN0Q7QUFDQSxrQkFBa0IsNENBQUs7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDBEQUFvQjtBQUNwQiwwREFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLDBEQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9QdXQgaW4gYSBmYWN0b3J5IHBhdHRlcm5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3Qpe1xuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHByb2plY3RDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGFkZFRvZG9CdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUb2RvQnV0dG9uLnRleHRDb250ZW50PVwiK1wiO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQ9YCR7cHJvamVjdC5wcm9qZWN0TmFtZX1gO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRpdGxlLGFkZFRvZG9CdXR0b24pO1xuICAgIG9wZW5Ub2RvTW9kYWwoYWRkVG9kb0J1dHRvbik7XG4gICAgbGV0IHRvZG9MaXN0PXByb2plY3QudG9kb0l0ZW1zO1xuICAgIC8vIFJlZmFjdG9yIHRoaXMgc2VjdGlvbiBcbiAgICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xuICAgICAgICBsZXQgaXRlbT1jcmVhdGVUb2RvRWxlbWVudCh0b2RvKTtcbiAgICAgICAgbGV0IGluZGV4PXByb2plY3QudG9kb0l0ZW1zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLGluZGV4KTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9FbGVtZW50KHRvZG8pe1xuICAgIGxldCBkaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hlY2tib3g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpO1xuXG4gICAgbGV0IGxhYmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudD1gJHt0b2RvLnRpdGxlfWA7XG4gICAgZGl2LmFwcGVuZChjaGVja2JveCxsYWJlbCk7XG4gICAgcmV0dXJuIGRpdjtcbn07XG5mdW5jdGlvbiBhZGRDb21wbGV0ZWRDbGFzcyhldmVudCl7XG4gICAgbGV0IHBhcmVudD1ldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBvcGVuVG9kb01vZGFsKGJ1dHRvbil7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGxldCB0b2RvTW9kYWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLW1vZGFsXCIpO1xuICAgICAgICBsZXQgb3ZlcmxheT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0RWxlbWVudCxhZGRDb21wbGV0ZWRDbGFzc307IiwiZnVuY3Rpb24gdG9kb3MoKXtcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUb2RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY29tcGxldGVkPWZhbHNlKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpe1xuICAgICAgICBsZXQgdG9kb0l0ZW1zPVtdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICB0b2RvSXRlbXNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb0FycmF5KC4uLnByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKC4uLnByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgfTtcbiAgICBsZXQgcHJvamVjdHM9W107XG4gICAgbGV0IGdldFByb2plY3RzPSAoKT0+cHJvamVjdHM7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHByb2plY3QsLi4udG9kbyl7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnB1c2goLi4udG9kbyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBtYXJrQXNDb21wbGV0ZWQodG9kbyl7XG4gICAgICAgICh0b2RvLmNvbXBsZXRlZD09PWZhbHNlKSA/IHRvZG8uY29tcGxldGVkPXRydWUgOiB0b2RvLmNvbXBsZXRlZD1mYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2codG9kby5jb21wbGV0ZWQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjaGVja1JlcGVhdGVkUHJvamVjdE5hbWUocHJvamVjdE5hbWUpe1xuICAgICAgICBsZXQgcHJvamVjdHNBcnJheT1nZXRQcm9qZWN0cygpO1xuICAgICAgICBsZXQgY2hlY2s9cHJvamVjdHNBcnJheS5zb21lKChwcm9qZWN0KT0+cHJvamVjdC5wcm9qZWN0TmFtZT09PXByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH07XG4gICAgcmV0dXJue1xuICAgICAgICBjcmVhdGVOZXdUb2RvLFxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LFxuICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0LFxuICAgICAgICBtYXJrQXNDb21wbGV0ZWQsXG4gICAgICAgIGFkZFByb2plY3RUb0FycmF5LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgY2hlY2tSZXBlYXRlZFByb2plY3ROYW1lXG4gICAgfTtcbn07XG5leHBvcnQge3RvZG9zfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0RWxlbWVudCxhZGRDb21wbGV0ZWRDbGFzc30gZnJvbSBcIi4vZG9tXCI7XG5cbi8vRGVsZXRlIHRlc3QgcHJvamVjdHNcbmxldCB0b2RvRnVuY3Rpb25zPXRvZG9zKCk7XG5sZXQgbG9sPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImpqXCIsXCJqa2RcIixcImpkbFwiLFwiamRcIik7XG5sZXQgdGVzdEl0ZW09dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwidGFrZSB0aGUgdHJhc2hcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0PXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChcInRlc3RcIik7XG5cbmxldCBsb2wyPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImFhYVwiLFwiYWFhXCIsXCJhYWFcIixcImFhYVwiKTtcbmxldCB0ZXN0SXRlbTI9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiZ28gdG8gdGhlIGJhbmtcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0Mj10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1Byb2plY3QoXCJ0ZXN0IDIgbG9sXCIpO1xuXG5cbnRvZG9GdW5jdGlvbnMuYWRkVG9kb1RvUHJvamVjdCh0ZXN0UHJvamVjdCxsb2wsdGVzdEl0ZW0pO1xudG9kb0Z1bmN0aW9ucy5hZGRUb2RvVG9Qcm9qZWN0KHRlc3RQcm9qZWN0Mixsb2wyLHRlc3RJdGVtMik7XG5cbnRvZG9GdW5jdGlvbnMuYWRkUHJvamVjdFRvQXJyYXkodGVzdFByb2plY3QsdGVzdFByb2plY3QyKTtcbmNvbnNvbGUubG9nKHRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKSk7XG5cbmZ1bmN0aW9uIGdldEluZGV4T2ZQcm9qZWN0KGV2ZW50KXtcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lcj1ldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpO1xuICAgIGxldCB0aXRsZT1wcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIGxldCBwcm9qZWN0QXJyYXk9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgIGxldCBpbmRleDtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWU9PT10aXRsZS50ZXh0Q29udGVudCl7XG4gICAgICAgICAgICBpbmRleD1wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5jcmVhdGVQcm9qZWN0RWxlbWVudCh0ZXN0UHJvamVjdCk7XG5jcmVhdGVQcm9qZWN0RWxlbWVudCh0ZXN0UHJvamVjdDIpO1xuXG5sZXQgY2hlY2tib3hlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtaW5kZXhdPmlucHV0W3R5cGU9Y2hlY2tib3hdXCIpO1xuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCk9PntcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XG4gICAgICAgIGFkZENvbXBsZXRlZENsYXNzKGV2ZW50KTtcbiAgICAgICAgbGV0IHByb2plY3Q9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgICAgICBsZXQgaW5kZXhPZlRvZG89TnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgICB0b2RvRnVuY3Rpb25zLm1hcmtBc0NvbXBsZXRlZChwcm9qZWN0W2dldEluZGV4T2ZQcm9qZWN0KGV2ZW50KV0udG9kb0l0ZW1zW2luZGV4T2ZUb2RvXSk7XG4gICAgfSk7XG59KTtcblxuKGZ1bmN0aW9uIGFkZEhhbmRsZXJzKCl7XG4gICAgbGV0IG5ld1Byb2plY3RCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlcj5idXR0b25cIik7XG4gICAgbGV0IG92ZXJsYXk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIGxldCBwcm9qZWN0TW9kYWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGFsXCIpO1xuICAgIGxldCB0b2RvTW9kYWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLW1vZGFsXCIpO1xuICAgIGxldCBjbG9zZUJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsb3NlXCIpO1xuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbD5mb3JtPmJ1dHRvbjpsYXN0LW9mLXR5cGVcIik7XG5cbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpe1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRvZG9Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbD5mb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbCBwXCIpLnRleHRDb250ZW50PVwiXCI7XG4gICAgfVxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ1dHRvbi5mb3JFYWNoKGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGFsIGlucHV0W3R5cGU9dGV4dF1cIik7XG4gICAgICAgIGxldCBtZXNzYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbCBwXCIpO1xuICAgICAgICBsZXQgcmVnZXg9L1tcXFNdKy9nbTtcbiAgICAgICAgaWYgKCEocmVnZXgudGVzdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKSkpe1xuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudD1cIlBsZWFzZSBlbnRlciBhIG5hbWVcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmKHRvZG9GdW5jdGlvbnMuY2hlY2tSZXBlYXRlZFByb2plY3ROYW1lKHByb2plY3ROYW1lSW5wdXQudmFsdWUudHJpbSgpKSl7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50PVwiVGhpcyBuYW1lIGlzIGFscmVhZHkgdGFrZW4sIHBsZWFzZSBlbnRlciBhbm90aGVyIG9uZVwiXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3UHJvamVjdD10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgdG9kb0Z1bmN0aW9ucy5hZGRQcm9qZWN0VG9BcnJheShuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
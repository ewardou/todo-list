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
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(project){
    let container=document.querySelector(".container");
    let projectContainer=document.createElement("div");
    let title=document.createElement("p");
    title.textContent=`${project.projectName}`;
    projectContainer.append(title);
    let todoList=project.todoItems;
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

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProject)(testProject);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProject)(testProject2);

let checkboxes=document.querySelectorAll("input");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click",(event)=>{
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addCompletedClass)(event);
        let project=todoFunctions.getProjects();
        let indexOfTodo=Number(event.target.parentNode.getAttribute("data-index"));
        todoFunctions.markAsCompleted(project[getIndexOfProject(event)].todoItems[indexOfTodo]);
    });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUN1Qjs7QUFFdEQsa0JBQWtCLDRDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbURBQWE7QUFDYixtREFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0KXtcbiAgICBsZXQgY29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50PWAke3Byb2plY3QucHJvamVjdE5hbWV9YDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgbGV0IHRvZG9MaXN0PXByb2plY3QudG9kb0l0ZW1zO1xuICAgIHRvZG9MaXN0LmZvckVhY2goKHRvZG8pPT57XG4gICAgICAgIGxldCBpdGVtPWNyZWF0ZVRvZG9FbGVtZW50KHRvZG8pO1xuICAgICAgICBsZXQgaW5kZXg9cHJvamVjdC50b2RvSXRlbXMuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsaW5kZXgpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChpdGVtKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG59O1xuZnVuY3Rpb24gY3JlYXRlVG9kb0VsZW1lbnQodG9kbyl7XG4gICAgbGV0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGVja2JveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIik7XG5cbiAgICBsZXQgbGFiZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50PWAke3RvZG8udGl0bGV9YDtcbiAgICBkaXYuYXBwZW5kKGNoZWNrYm94LGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmZ1bmN0aW9uIGFkZENvbXBsZXRlZENsYXNzKGV2ZW50KXtcbiAgICBsZXQgcGFyZW50PWV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0LGFkZENvbXBsZXRlZENsYXNzfTsiLCJmdW5jdGlvbiB0b2Rvcygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCBjaGVjaz1jaGVja1VuaXF1ZVByb2plY3ROYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKGNoZWNrKSB7cmV0dXJufTtcbiAgICAgICAgbGV0IHRvZG9JdGVtcz1bXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgICAgdG9kb0l0ZW1zXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9BcnJheSguLi5wcm9qZWN0KXtcbiAgICAgICAgcHJvamVjdHMucHVzaCguLi5wcm9qZWN0KTtcbiAgICB9O1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgZ2V0UHJvamVjdHM9ICgpPT5wcm9qZWN0cztcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QocHJvamVjdCwuLi50b2RvKXtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMucHVzaCguLi50b2RvKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1hcmtBc0NvbXBsZXRlZCh0b2RvKXtcbiAgICAgICAgKHRvZG8uY29tcGxldGVkPT09ZmFsc2UpID8gdG9kby5jb21wbGV0ZWQ9dHJ1ZSA6IHRvZG8uY29tcGxldGVkPWZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVW5pcXVlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpe1xuICAgICAgICBsZXQgcHJvamVjdHNBcnJheT1nZXRQcm9qZWN0cygpO1xuICAgICAgICBsZXQgY2hlY2s9cHJvamVjdHNBcnJheS5zb21lKChwcm9qZWN0KT0+cHJvamVjdC5wcm9qZWN0TmFtZT09PXByb2plY3ROYW1lKTtcbiAgICAgICAgaWYgKGNoZWNrKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyBuYW1lIGlzIGFscmVhZHkgYXNzaWduZWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJue1xuICAgICAgICBjcmVhdGVOZXdUb2RvLFxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LFxuICAgICAgICBhZGRUb2RvVG9Qcm9qZWN0LFxuICAgICAgICBtYXJrQXNDb21wbGV0ZWQsXG4gICAgICAgIGFkZFByb2plY3RUb0FycmF5LFxuICAgICAgICBnZXRQcm9qZWN0c1xuICAgIH07XG59O1xuZXhwb3J0IHt0b2Rvc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCxhZGRDb21wbGV0ZWRDbGFzc30gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCB0b2RvRnVuY3Rpb25zPXRvZG9zKCk7XG5sZXQgbG9sPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImpqXCIsXCJqa2RcIixcImpkbFwiLFwiamRcIik7XG5sZXQgdGVzdEl0ZW09dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwidGFrZSB0aGUgdHJhc2hcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0PXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChcInRlc3RcIik7XG5cbmxldCBsb2wyPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImFhYVwiLFwiYWFhXCIsXCJhYWFcIixcImFhYVwiKTtcbmxldCB0ZXN0SXRlbTI9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiZ28gdG8gdGhlIGJhbmtcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0Mj10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1Byb2plY3QoXCJ0ZXN0IDIgbG9sXCIpO1xuXG5cbnRvZG9GdW5jdGlvbnMuYWRkVG9kb1RvUHJvamVjdCh0ZXN0UHJvamVjdCxsb2wsdGVzdEl0ZW0pO1xudG9kb0Z1bmN0aW9ucy5hZGRUb2RvVG9Qcm9qZWN0KHRlc3RQcm9qZWN0Mixsb2wyLHRlc3RJdGVtMik7XG5cbnRvZG9GdW5jdGlvbnMuYWRkUHJvamVjdFRvQXJyYXkodGVzdFByb2plY3QsdGVzdFByb2plY3QyKTtcbmNvbnNvbGUubG9nKHRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKSk7XG5cbmxldCB0ZXN0UHJvamVjdDM9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdQcm9qZWN0KFwidGVzdFwiKTtcbnRvZG9GdW5jdGlvbnMuYWRkUHJvamVjdFRvQXJyYXkodGVzdFByb2plY3QzKTtcbmNvbnNvbGUubG9nKHRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKSk7XG5cbmZ1bmN0aW9uIGdldEluZGV4T2ZQcm9qZWN0KGV2ZW50KXtcbiAgICBsZXQgcHJvamVjdENvbnRhaW5lcj1ldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpO1xuICAgIGxldCB0aXRsZT1wcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIGxldCBwcm9qZWN0QXJyYXk9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgIGxldCBpbmRleDtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgaWYgKHByb2plY3QucHJvamVjdE5hbWU9PT10aXRsZS50ZXh0Q29udGVudCl7XG4gICAgICAgICAgICBpbmRleD1wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5jcmVhdGVQcm9qZWN0KHRlc3RQcm9qZWN0KTtcbmNyZWF0ZVByb2plY3QodGVzdFByb2plY3QyKTtcblxubGV0IGNoZWNrYm94ZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCk9PntcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XG4gICAgICAgIGFkZENvbXBsZXRlZENsYXNzKGV2ZW50KTtcbiAgICAgICAgbGV0IHByb2plY3Q9dG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpO1xuICAgICAgICBsZXQgaW5kZXhPZlRvZG89TnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgICB0b2RvRnVuY3Rpb25zLm1hcmtBc0NvbXBsZXRlZChwcm9qZWN0W2dldEluZGV4T2ZQcm9qZWN0KGV2ZW50KV0udG9kb0l0ZW1zW2luZGV4T2ZUb2RvXSk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
function createProjectElement(project){
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

let checkboxes=document.querySelectorAll("input[type=checkbox]");
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
    let closeButton=document.querySelector(".close");
    let addProjectButton=document.querySelector(".project-modal>form>button:last-of-type");

    newProjectButton.addEventListener("click",()=>{
        overlay.classList.add("active");
        projectModal.classList.add("active");
    });
    function closeModal(){
        overlay.classList.remove("active")
        projectModal.classList.remove("active");
    };
    function resetForm(){
        document.querySelector(".project-modal>form").reset();
        document.querySelector(".project-modal p").textContent="";
    }
    overlay.addEventListener("click",()=>{
        closeModal();
        resetForm();
    });
    closeButton.addEventListener("click",()=>{
        closeModal();
        resetForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDOEI7O0FBRTdELGtCQUFrQiw0Q0FBSztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsMERBQW9CO0FBQ3BCLDBEQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWSwwREFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3Qpe1xuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHByb2plY3RDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQ9YCR7cHJvamVjdC5wcm9qZWN0TmFtZX1gO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBsZXQgdG9kb0xpc3Q9cHJvamVjdC50b2RvSXRlbXM7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCgodG9kbyk9PntcbiAgICAgICAgbGV0IGl0ZW09Y3JlYXRlVG9kb0VsZW1lbnQodG9kbyk7XG4gICAgICAgIGxldCBpbmRleD1wcm9qZWN0LnRvZG9JdGVtcy5pbmRleE9mKHRvZG8pO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIixpbmRleCk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKGl0ZW0pO1xuICAgIH0pO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVUb2RvRWxlbWVudCh0b2RvKXtcbiAgICBsZXQgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNoZWNrYm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKTtcblxuICAgIGxldCBsYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQ9YCR7dG9kby50aXRsZX1gO1xuICAgIGRpdi5hcHBlbmQoY2hlY2tib3gsbGFiZWwpO1xuICAgIHJldHVybiBkaXY7XG59O1xuZnVuY3Rpb24gYWRkQ29tcGxldGVkQ2xhc3MoZXZlbnQpe1xuICAgIGxldCBwYXJlbnQ9ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICAgfSBlbHNle1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcbiAgICB9XG59O1xuXG5leHBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LGFkZENvbXBsZXRlZENsYXNzfTsiLCJmdW5jdGlvbiB0b2Rvcygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCB0b2RvSXRlbXM9W107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHRvZG9JdGVtc1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFRvQXJyYXkoLi4ucHJvamVjdCl7XG4gICAgICAgIHByb2plY3RzLnB1c2goLi4ucHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9O1xuICAgIGxldCBwcm9qZWN0cz1bXTtcbiAgICBsZXQgZ2V0UHJvamVjdHM9ICgpPT5wcm9qZWN0cztcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG9Ub1Byb2plY3QocHJvamVjdCwuLi50b2RvKXtcbiAgICAgICAgcHJvamVjdC50b2RvSXRlbXMucHVzaCguLi50b2RvKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIG1hcmtBc0NvbXBsZXRlZCh0b2RvKXtcbiAgICAgICAgKHRvZG8uY29tcGxldGVkPT09ZmFsc2UpID8gdG9kby5jb21wbGV0ZWQ9dHJ1ZSA6IHRvZG8uY29tcGxldGVkPWZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVwZWF0ZWRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCBwcm9qZWN0c0FycmF5PWdldFByb2plY3RzKCk7XG4gICAgICAgIGxldCBjaGVjaz1wcm9qZWN0c0FycmF5LnNvbWUoKHByb2plY3QpPT5wcm9qZWN0LnByb2plY3ROYW1lPT09cHJvamVjdE5hbWUpO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfTtcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgICAgIG1hcmtBc0NvbXBsZXRlZCxcbiAgICAgICAgYWRkUHJvamVjdFRvQXJyYXksXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgICAgICBjaGVja1JlcGVhdGVkUHJvamVjdE5hbWVcbiAgICB9O1xufTtcbmV4cG9ydCB7dG9kb3N9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50LGFkZENvbXBsZXRlZENsYXNzfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRvZG9GdW5jdGlvbnM9dG9kb3MoKTtcbmxldCBsb2w9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiampcIixcImprZFwiLFwiamRsXCIsXCJqZFwiKTtcbmxldCB0ZXN0SXRlbT10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1RvZG8oXCJ0YWtlIHRoZSB0cmFzaFwiLFwibm9uZVwiLFwiZGF0ZVwiLFwicHJpb3JpdHlcIik7XG5sZXQgdGVzdFByb2plY3Q9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdQcm9qZWN0KFwidGVzdFwiKTtcblxubGV0IGxvbDI9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiYWFhXCIsXCJhYWFcIixcImFhYVwiLFwiYWFhXCIpO1xubGV0IHRlc3RJdGVtMj10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1RvZG8oXCJnbyB0byB0aGUgYmFua1wiLFwibm9uZVwiLFwiZGF0ZVwiLFwicHJpb3JpdHlcIik7XG5sZXQgdGVzdFByb2plY3QyPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChcInRlc3QgMiBsb2xcIik7XG5cblxudG9kb0Z1bmN0aW9ucy5hZGRUb2RvVG9Qcm9qZWN0KHRlc3RQcm9qZWN0LGxvbCx0ZXN0SXRlbSk7XG50b2RvRnVuY3Rpb25zLmFkZFRvZG9Ub1Byb2plY3QodGVzdFByb2plY3QyLGxvbDIsdGVzdEl0ZW0yKTtcblxudG9kb0Z1bmN0aW9ucy5hZGRQcm9qZWN0VG9BcnJheSh0ZXN0UHJvamVjdCx0ZXN0UHJvamVjdDIpO1xuY29uc29sZS5sb2codG9kb0Z1bmN0aW9ucy5nZXRQcm9qZWN0cygpKTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhPZlByb2plY3QoZXZlbnQpe1xuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyPWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIik7XG4gICAgbGV0IHRpdGxlPXByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcInBcIik7XG4gICAgbGV0IHByb2plY3RBcnJheT10b2RvRnVuY3Rpb25zLmdldFByb2plY3RzKCk7XG4gICAgbGV0IGluZGV4O1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBpZiAocHJvamVjdC5wcm9qZWN0TmFtZT09PXRpdGxlLnRleHRDb250ZW50KXtcbiAgICAgICAgICAgIGluZGV4PXByb2plY3RBcnJheS5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaW5kZXg7XG59XG5cbmNyZWF0ZVByb2plY3RFbGVtZW50KHRlc3RQcm9qZWN0KTtcbmNyZWF0ZVByb2plY3RFbGVtZW50KHRlc3RQcm9qZWN0Mik7XG5cbmxldCBjaGVja2JveGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKTtcbmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpPT57XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xuICAgICAgICBhZGRDb21wbGV0ZWRDbGFzcyhldmVudCk7XG4gICAgICAgIGxldCBwcm9qZWN0PXRvZG9GdW5jdGlvbnMuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgbGV0IGluZGV4T2ZUb2RvPU51bWJlcihldmVudC50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy5tYXJrQXNDb21wbGV0ZWQocHJvamVjdFtnZXRJbmRleE9mUHJvamVjdChldmVudCldLnRvZG9JdGVtc1tpbmRleE9mVG9kb10pO1xuICAgIH0pO1xufSk7XG5cbihmdW5jdGlvbiBhZGRIYW5kbGVycygpe1xuICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXI+YnV0dG9uXCIpO1xuICAgIGxldCBvdmVybGF5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBsZXQgcHJvamVjdE1vZGFsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbFwiKTtcbiAgICBsZXQgY2xvc2VCdXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWw+Zm9ybT5idXR0b246bGFzdC1vZi10eXBlXCIpO1xuXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKXtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcmVzZXRGb3JtKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbD5mb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1tb2RhbCBwXCIpLnRleHRDb250ZW50PVwiXCI7XG4gICAgfVxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwgaW5wdXRbdHlwZT10ZXh0XVwiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW1vZGFsIHBcIik7XG4gICAgICAgIGxldCByZWdleD0vW1xcU10rL2dtO1xuICAgICAgICBpZiAoIShyZWdleC50ZXN0KHByb2plY3ROYW1lSW5wdXQudmFsdWUpKSl7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50PVwiUGxlYXNlIGVudGVyIGEgbmFtZVwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYodG9kb0Z1bmN0aW9ucy5jaGVja1JlcGVhdGVkUHJvamVjdE5hbWUocHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCkpKXtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQ9XCJUaGlzIG5hbWUgaXMgYWxyZWFkeSB0YWtlbiwgcGxlYXNlIGVudGVyIGFub3RoZXIgb25lXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0PXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICB0b2RvRnVuY3Rpb25zLmFkZFByb2plY3RUb0FycmF5KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQobmV3UHJvamVjdCk7XG4gICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
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
let testProject2=todoFunctions.createNewProject("test");

todoFunctions.addTodoToProject(testProject,lol,testItem);
todoFunctions.addTodoToProject(testProject2,lol2,testItem2);

console.log(testItem.completed);
console.log(testProject);


(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProject)(testProject);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProject)(testProject2);

let checkboxes=document.querySelectorAll("input");
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener("click",(event)=>{
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addCompletedClass)(event);
        // todoFunctions.markAsCompleted();
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDb0I7O0FBRW5ELGtCQUFrQiw0Q0FBSztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsZ0RBQVU7QUFDVixnREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFpQjtBQUN6QjtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgIGxldCBjb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50PWAke3Byb2plY3QucHJvamVjdE5hbWV9YDtcbiAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBsZXQgdG9kb0xpc3Q9cHJvamVjdC50b2RvSXRlbXM7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCgodG9kbyk9PntcbiAgICAgICAgbGV0IGl0ZW09Y3JlYXRlVG9kb0VsZW1lbnQodG9kbyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gY3JlYXRlVG9kb0VsZW1lbnQodG9kbyl7XG4gICAgbGV0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBjaGVja2JveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIik7XG5cbiAgICBsZXQgbGFiZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50PWAke3RvZG8udGl0bGV9YDtcbiAgICBkaXYuYXBwZW5kKGNoZWNrYm94LGxhYmVsKTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmZ1bmN0aW9uIGFkZENvbXBsZXRlZENsYXNzKGV2ZW50KXtcbiAgICBsZXQgcGFyZW50PWV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZWRcIik7XG4gICAgfVxufTtcblxuZXhwb3J0IHthZGRQcm9qZWN0LGFkZENvbXBsZXRlZENsYXNzfTsiLCJmdW5jdGlvbiB0b2Rvcygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQ9ZmFsc2Upe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgICAgIGxldCB0b2RvSXRlbXM9W107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHRvZG9JdGVtc1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHByb2plY3QsLi4udG9kbyl7XG4gICAgICAgIHByb2plY3QudG9kb0l0ZW1zLnB1c2goLi4udG9kbyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBtYXJrQXNDb21wbGV0ZWQodG9kbyl7XG4gICAgICAgIHJldHVybiAodG9kby5jb21wbGV0ZWQ9PT1mYWxzZSkgPyB0b2RvLmNvbXBsZXRlZD10cnVlIDogdG9kby5jb21wbGV0ZWQ9ZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm57XG4gICAgICAgIGNyZWF0ZU5ld1RvZG8sXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgICAgIG1hcmtBc0NvbXBsZXRlZFxuICAgIH07XG59O1xuZXhwb3J0IHt0b2Rvc307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7YWRkUHJvamVjdCxhZGRDb21wbGV0ZWRDbGFzc30gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCB0b2RvRnVuY3Rpb25zPXRvZG9zKCk7XG5sZXQgbG9sPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImpqXCIsXCJqa2RcIixcImpkbFwiLFwiamRcIik7XG5sZXQgdGVzdEl0ZW09dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwidGFrZSB0aGUgdHJhc2hcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0PXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3UHJvamVjdChcInRlc3RcIik7XG5cbmxldCBsb2wyPXRvZG9GdW5jdGlvbnMuY3JlYXRlTmV3VG9kbyhcImFhYVwiLFwiYWFhXCIsXCJhYWFcIixcImFhYVwiKTtcbmxldCB0ZXN0SXRlbTI9dG9kb0Z1bmN0aW9ucy5jcmVhdGVOZXdUb2RvKFwiZ28gdG8gdGhlIGJhbmtcIixcIm5vbmVcIixcImRhdGVcIixcInByaW9yaXR5XCIpO1xubGV0IHRlc3RQcm9qZWN0Mj10b2RvRnVuY3Rpb25zLmNyZWF0ZU5ld1Byb2plY3QoXCJ0ZXN0XCIpO1xuXG50b2RvRnVuY3Rpb25zLmFkZFRvZG9Ub1Byb2plY3QodGVzdFByb2plY3QsbG9sLHRlc3RJdGVtKTtcbnRvZG9GdW5jdGlvbnMuYWRkVG9kb1RvUHJvamVjdCh0ZXN0UHJvamVjdDIsbG9sMix0ZXN0SXRlbTIpO1xuXG5jb25zb2xlLmxvZyh0ZXN0SXRlbS5jb21wbGV0ZWQpO1xuY29uc29sZS5sb2codGVzdFByb2plY3QpO1xuXG5cbmFkZFByb2plY3QodGVzdFByb2plY3QpO1xuYWRkUHJvamVjdCh0ZXN0UHJvamVjdDIpO1xuXG5sZXQgY2hlY2tib3hlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5jaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KT0+e1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcbiAgICAgICAgYWRkQ29tcGxldGVkQ2xhc3MoZXZlbnQpO1xuICAgICAgICAvLyB0b2RvRnVuY3Rpb25zLm1hcmtBc0NvbXBsZXRlZCgpO1xuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
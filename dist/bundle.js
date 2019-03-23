/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_generateData__ = __webpack_require__(/*! ./modules/generateData */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_compareData__ = __webpack_require__(/*! ./modules/compareData */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_generateTable__ = __webpack_require__(/*! ./modules/generateTable */ 2);\n\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_2__modules_generateTable__[\"a\" /* generateTable */])();\n\n// compare pre and post sorted data\nlet firstData = Object(__WEBPACK_IMPORTED_MODULE_0__modules_generateData__[\"a\" /* generateData */])(); \n\n// sort data in a specific way\n// to do... \n\n// compare data sets multiple times\n// to do... \n\n\n// pass that sorted outcome to the table\nconst colorTable = args => {\n   \tlet colors = document.getElementsByClassName('color');\n    for(let i = 0; i < colors.length; i++){\n   \t\tif (!args) {\n   \t\t\tcolors[i].style.backgroundColor = '#efefef';\n   \t\t} else {\n\t\t\tcolors[i].style.backgroundColor = args[i].color;\n\t\t\tcolors[i].style.opacity = args[i].opacity;\n   \t\t}\n    }\n}\n\nsetTimeout(function(){  \n\tcolorTable(/* data passed here */);\n}, 10);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dlbmVyYXRlRGF0YX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlRGF0YSc7XG5pbXBvcnQge2NvbXBhcmVEYXRhfSBmcm9tICcuL21vZHVsZXMvY29tcGFyZURhdGEnO1xuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVUYWJsZSc7XG5cbmdlbmVyYXRlVGFibGUoKTtcblxuLy8gY29tcGFyZSBwcmUgYW5kIHBvc3Qgc29ydGVkIGRhdGFcbmxldCBmaXJzdERhdGEgPSBnZW5lcmF0ZURhdGEoKTsgXG5cbi8vIHNvcnQgZGF0YSBpbiBhIHNwZWNpZmljIHdheVxuLy8gdG8gZG8uLi4gXG5cbi8vIGNvbXBhcmUgZGF0YSBzZXRzIG11bHRpcGxlIHRpbWVzXG4vLyB0byBkby4uLiBcblxuXG4vLyBwYXNzIHRoYXQgc29ydGVkIG91dGNvbWUgdG8gdGhlIHRhYmxlXG5jb25zdCBjb2xvclRhYmxlID0gYXJncyA9PiB7XG4gICBcdGxldCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2xvcicpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspe1xuICAgXHRcdGlmICghYXJncykge1xuICAgXHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWZlZmVmJztcbiAgIFx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFyZ3NbaV0uY29sb3I7XG5cdFx0XHRjb2xvcnNbaV0uc3R5bGUub3BhY2l0eSA9IGFyZ3NbaV0ub3BhY2l0eTtcbiAgIFx0XHR9XG4gICAgfVxufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICBcblx0Y29sb3JUYWJsZSgvKiBkYXRhIHBhc3NlZCBoZXJlICovKTtcbn0sIDEwKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/modules/generateData.js ***!
  \*************************************/
/*! exports provided: generateData */
/*! exports used: generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateData; });\nconst generateData = () => {\n\tvar newDataSet = [];\n\tlet i = 0; \n\twhile (i < 3600) {\n\t\tlet item = {}\n\t\tlet r = i; // order 1, 2, 3... \n\t\titem.name = r;\n\t\titem.color = '#3498db';\n\t\titem.opacity = 1;  \n\t\tnewDataSet.push(item)\n\t\ti++; \n\t}\n\treturn newDataSet;  \n} \n \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qcz8yZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlRGF0YSA9ICgpID0+IHtcblx0dmFyIG5ld0RhdGFTZXQgPSBbXTtcblx0bGV0IGkgPSAwOyBcblx0d2hpbGUgKGkgPCAzNjAwKSB7XG5cdFx0bGV0IGl0ZW0gPSB7fVxuXHRcdGxldCByID0gaTsgLy8gb3JkZXIgMSwgMiwgMy4uLiBcblx0XHRpdGVtLm5hbWUgPSByO1xuXHRcdGl0ZW0uY29sb3IgPSAnIzM0OThkYic7XG5cdFx0aXRlbS5vcGFjaXR5ID0gMTsgIFxuXHRcdG5ld0RhdGFTZXQucHVzaChpdGVtKVxuXHRcdGkrKzsgXG5cdH1cblx0cmV0dXJuIG5ld0RhdGFTZXQ7ICBcbn0gXG4gXG5leHBvcnQge2dlbmVyYXRlRGF0YX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/modules/generateTable.js ***!
  \**************************************/
/*! exports provided: generateTable */
/*! exports used: generateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateTable; });\nconst generateTable = () => {\n\tlet myTableDiv = document.getElementById(\"myDynamicTable\");\n\tlet table = document.createElement('TABLE');\n\ttable.border = '1';\n\tlet tableBody = document.createElement('TBODY');\n\ttable.appendChild(tableBody);\n\tfor (let i = 0; i < 61; i++) {\n\t\tlet tr = document.createElement('TR');\n\t\ttableBody.appendChild(tr);\n\t\tfor (let j = 0; j < 61; j++) {\n\t\t\tlet td = document.createElement('TD');\n\t\t\ttd.width = '50';\n\t\t\tif (j === 0) {\n\t\t\t\tlet p = document.createElement(\"p\");\n\t\t\t\tp.classList.add('rotate');\n\t\t\t\tlet t = document.createTextNode(i-1);\n\t\t\t\tp.appendChild(t);\n\t\t\t\ttd.appendChild(p);\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}  \n\t\t\tif (i === 0 && j !== 0) {\n\t\t\t\ttd.appendChild(document.createTextNode(j-1));\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}\n\t\t\tif (i !== 0 && j !== 0) {\n\t\t\t\ttd.classList.add('color');\n\t\t\t\t// apply color based on data \n\t\t\t}\n\t\t\ttr.appendChild(td);\n\t\t}\n\t}\n\tmyTableDiv.appendChild(table);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanM/YjllOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuXHRsZXQgbXlUYWJsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEeW5hbWljVGFibGVcIik7XG5cdGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG5cdHRhYmxlLmJvcmRlciA9ICcxJztcblx0bGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RCT0RZJyk7XG5cdHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNjE7IGkrKykge1xuXHRcdGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XG5cdFx0dGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDYxOyBqKyspIHtcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XG5cdFx0XHR0ZC53aWR0aCA9ICc1MCc7XG5cdFx0XHRpZiAoaiA9PT0gMCkge1xuXHRcdFx0XHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuXHRcdFx0XHRsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGktMSk7XG5cdFx0XHRcdHAuYXBwZW5kQ2hpbGQodCk7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKHApO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fSAgXG5cdFx0XHRpZiAoaSA9PT0gMCAmJiBqICE9PSAwKSB7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGotMSkpO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgIT09IDAgJiYgaiAhPT0gMCkge1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuXHRcdFx0XHQvLyBhcHBseSBjb2xvciBiYXNlZCBvbiBkYXRhIFxuXHRcdFx0fVxuXHRcdFx0dHIuYXBwZW5kQ2hpbGQodGQpO1xuXHRcdH1cblx0fVxuXHRteVRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZVRhYmxlfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ2VuZXJhdGVUYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/modules/compareData.js ***!
  \************************************/
/*! exports provided: compareData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export compareData */\n\n\nfunction compareData(genData, arg2, sortType) {\n\t/*\n\tif (!genData || !arg2) { return false; }\n\tif (!genData.length !== !arg2.length) { return false; }\n\t*/\n\n\t// sort arg2\n\n\t// use 'sortType'\n\n\t// compare, +1 opacity for matches\n\n\t// repeat\n\t\n\tlet sortedData = []; \n\t// to do... \n\n\tfor (var i = 0; i < genData.length; i++) {\n\tlet cell = {}\n\t\tif (i > 0) {\n\t\t\tfor (var c = 0; c < i; c++) {\n\t\t\t\tif (sortedData[c].name === r[0]) {\n\t\t\t\t\tcell.color = sortedData[c].color;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!cell.color) {\n\t\t\t\tcell.color = randColor; \n\t\t\t}\n\t\t} else {\n\t\t\tcell.color = randColor;\n\t\t}\n\t}\n\t\tsortedData.push(cell)\n\t\ti++; \n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzPzIyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRhKGdlbkRhdGEsIGFyZzIsIHNvcnRUeXBlKSB7XG5cdC8qXG5cdGlmICghZ2VuRGF0YSB8fCAhYXJnMikgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKCFnZW5EYXRhLmxlbmd0aCAhPT0gIWFyZzIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXHQqL1xuXG5cdC8vIHNvcnQgYXJnMlxuXG5cdC8vIHVzZSAnc29ydFR5cGUnXG5cblx0Ly8gY29tcGFyZSwgKzEgb3BhY2l0eSBmb3IgbWF0Y2hlc1xuXG5cdC8vIHJlcGVhdFxuXHRcblx0bGV0IHNvcnRlZERhdGEgPSBbXTsgXG5cdC8vIHRvIGRvLi4uIFxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZ2VuRGF0YS5sZW5ndGg7IGkrKykge1xuXHRsZXQgY2VsbCA9IHt9XG5cdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IGk7IGMrKykge1xuXHRcdFx0XHRpZiAoc29ydGVkRGF0YVtjXS5uYW1lID09PSByWzBdKSB7XG5cdFx0XHRcdFx0Y2VsbC5jb2xvciA9IHNvcnRlZERhdGFbY10uY29sb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY2VsbC5jb2xvcikge1xuXHRcdFx0XHRjZWxsLmNvbG9yID0gcmFuZENvbG9yOyBcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2VsbC5jb2xvciA9IHJhbmRDb2xvcjtcblx0XHR9XG5cdH1cblx0XHRzb3J0ZWREYXRhLnB1c2goY2VsbClcblx0XHRpKys7IFxufVxuXG5leHBvcnQge2NvbXBhcmVEYXRhfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
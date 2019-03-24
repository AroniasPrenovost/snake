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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_generateData__ = __webpack_require__(/*! ./modules/generateData */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_compareData__ = __webpack_require__(/*! ./modules/compareData */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_generateTable__ = __webpack_require__(/*! ./modules/generateTable */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sortFunctions__ = __webpack_require__(/*! ./modules/sortFunctions */ 4);\n\n\n\n\n\n// initialize \nObject(__WEBPACK_IMPORTED_MODULE_2__modules_generateTable__[\"a\" /* generateTable */])();\n\n// pass that sorted outcome to the table\nconst colorTable = args => {\n  let colors = document.getElementsByClassName('color');\n  for(let i = 0; i < colors.length; i++){\n    if (!args) {\n      colors[i].style.backgroundColor = '#efefef';\n    } else {\n\n    let gradient = ['black', '#ffffe0','#ffd59b','#ffa474','#f47461','#db4551','#b81b34','#8b0000'];  \n      colors[i].style.opacity = args[i].opacity;\n      if (args[i].opacity < .2) {\n        colors[i].style.backgroundColor = gradient[0];\n      } else if (args[i].opacity < .3) {\n        colors[i].style.backgroundColor = gradient[1];\n      } else if (args[i].opacity < .4) {\n        colors[i].style.backgroundColor = gradient[2];\n      } else if (args[i].opacity < .5) {\n        colors[i].style.backgroundColor = gradient[3];\n      } else if (args[i].opacity < .6) {\n        colors[i].style.backgroundColor = gradient[4];\n      } else if (args[i].opacity < .7) {\n        colors[i].style.backgroundColor = gradient[5];\n      } else if (args[i].opacity < .8) {\n        colors[i].style.backgroundColor = gradient[6];\n      } else if (args[i].opacity < .9) {\n        colors[i].style.backgroundColor = gradient[7];\n      } else {\n        colors[i].style.backgroundColor = gradient[8];\n      }\n    }\n  }\n}\n\n// compare pre and post sorted data\nlet tableData = Object(__WEBPACK_IMPORTED_MODULE_1__modules_compareData__[\"a\" /* compareData */])(Object(__WEBPACK_IMPORTED_MODULE_0__modules_generateData__[\"a\" /* generateData */])(), __WEBPACK_IMPORTED_MODULE_3__modules_sortFunctions__[\"a\" /* es6shuffle */]);\n\n// color table  \nsetTimeout(function(){ \n  colorTable(tableData);\n}, 50);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dlbmVyYXRlRGF0YX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlRGF0YSc7XG5pbXBvcnQge2NvbXBhcmVEYXRhfSBmcm9tICcuL21vZHVsZXMvY29tcGFyZURhdGEnO1xuaW1wb3J0IHtnZW5lcmF0ZVRhYmxlfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVUYWJsZSc7XG5pbXBvcnQge2VzNnNodWZmbGUsIGVzNnNodWZmbGVUd28sIHByb3RvdHlwZX0gZnJvbSBcIi4vbW9kdWxlcy9zb3J0RnVuY3Rpb25zXCI7XG5cbi8vIGluaXRpYWxpemUgXG5nZW5lcmF0ZVRhYmxlKCk7XG5cbi8vIHBhc3MgdGhhdCBzb3J0ZWQgb3V0Y29tZSB0byB0aGUgdGFibGVcbmNvbnN0IGNvbG9yVGFibGUgPSBhcmdzID0+IHtcbiAgbGV0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yJyk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspe1xuICAgIGlmICghYXJncykge1xuICAgICAgY29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWZlZmVmJztcbiAgICB9IGVsc2Uge1xuXG4gICAgbGV0IGdyYWRpZW50ID0gWydibGFjaycsICcjZmZmZmUwJywnI2ZmZDU5YicsJyNmZmE0NzQnLCcjZjQ3NDYxJywnI2RiNDU1MScsJyNiODFiMzQnLCcjOGIwMDAwJ107ICBcbiAgICAgIGNvbG9yc1tpXS5zdHlsZS5vcGFjaXR5ID0gYXJnc1tpXS5vcGFjaXR5O1xuICAgICAgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC4yKSB7XG4gICAgICAgIGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBncmFkaWVudFswXTtcbiAgICAgIH0gZWxzZSBpZiAoYXJnc1tpXS5vcGFjaXR5IDwgLjMpIHtcbiAgICAgICAgY29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyYWRpZW50WzFdO1xuICAgICAgfSBlbHNlIGlmIChhcmdzW2ldLm9wYWNpdHkgPCAuNCkge1xuICAgICAgICBjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ3JhZGllbnRbMl07XG4gICAgICB9IGVsc2UgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC41KSB7XG4gICAgICAgIGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBncmFkaWVudFszXTtcbiAgICAgIH0gZWxzZSBpZiAoYXJnc1tpXS5vcGFjaXR5IDwgLjYpIHtcbiAgICAgICAgY29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyYWRpZW50WzRdO1xuICAgICAgfSBlbHNlIGlmIChhcmdzW2ldLm9wYWNpdHkgPCAuNykge1xuICAgICAgICBjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ3JhZGllbnRbNV07XG4gICAgICB9IGVsc2UgaWYgKGFyZ3NbaV0ub3BhY2l0eSA8IC44KSB7XG4gICAgICAgIGNvbG9yc1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBncmFkaWVudFs2XTtcbiAgICAgIH0gZWxzZSBpZiAoYXJnc1tpXS5vcGFjaXR5IDwgLjkpIHtcbiAgICAgICAgY29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyYWRpZW50WzddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3JzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdyYWRpZW50WzhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBjb21wYXJlIHByZSBhbmQgcG9zdCBzb3J0ZWQgZGF0YVxubGV0IHRhYmxlRGF0YSA9IGNvbXBhcmVEYXRhKGdlbmVyYXRlRGF0YSgpLCBlczZzaHVmZmxlKTtcblxuLy8gY29sb3IgdGFibGUgIFxuc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgY29sb3JUYWJsZSh0YWJsZURhdGEpO1xufSwgNTApO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/modules/generateData.js ***!
  \*************************************/
/*! exports provided: generateData */
/*! exports used: generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateData; });\nconst generateData = () => {\n\tlet newDataSet = [];\n\tlet i = 0; \n\twhile (i < 3600) {\n\t\tlet item = {}\n\t\tlet r = i; // order 1, 2, 3... \n\t\titem.key = r;\n\t\titem.color = 'black';\n\t\titem.opacity = .1;  \n\t\tnewDataSet.push(item)\n\t\ti++; \n\t}\n\n\treturn newDataSet;  \n} \n \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qcz8yZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlRGF0YSA9ICgpID0+IHtcblx0bGV0IG5ld0RhdGFTZXQgPSBbXTtcblx0bGV0IGkgPSAwOyBcblx0d2hpbGUgKGkgPCAzNjAwKSB7XG5cdFx0bGV0IGl0ZW0gPSB7fVxuXHRcdGxldCByID0gaTsgLy8gb3JkZXIgMSwgMiwgMy4uLiBcblx0XHRpdGVtLmtleSA9IHI7XG5cdFx0aXRlbS5jb2xvciA9ICdibGFjayc7XG5cdFx0aXRlbS5vcGFjaXR5ID0gLjE7ICBcblx0XHRuZXdEYXRhU2V0LnB1c2goaXRlbSlcblx0XHRpKys7IFxuXHR9XG5cblx0cmV0dXJuIG5ld0RhdGFTZXQ7ICBcbn0gXG4gXG5leHBvcnQge2dlbmVyYXRlRGF0YX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/modules/compareData.js ***!
  \************************************/
/*! exports provided: compareData */
/*! exports used: compareData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return compareData; });\n// `functionArg` from './sortFunctions' \nfunction compareData(generatedData, functionArg) {\n\tlet data = generatedData;\n \tlet c = 0;\n \tlet shuffled;\n \tlet max; \n \t\n \t// if key is in original spot, +.1 opacity \n \twhile (c < 10000 && !max) {\n \t\tshuffled = functionArg(Object.entries(data));\n\t \tfor (let e = 0; e < shuffled.length; e++) {\n \t\t\tif (shuffled[e][1].key === data[e].key) {\n\t\t\t\tdata[e].opacity = data[e].opacity + .1;\n\t\t\t\tif (data[e].opacity > 2) {\n\t\t\t\t\tmax = true;\n\t\t\t\t}\t\n\t\t\t}\n\t\t}\n\tc++;\n\t}\t\n\n\treturn data; \n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzPzIyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYGZ1bmN0aW9uQXJnYCBmcm9tICcuL3NvcnRGdW5jdGlvbnMnIFxuZnVuY3Rpb24gY29tcGFyZURhdGEoZ2VuZXJhdGVkRGF0YSwgZnVuY3Rpb25BcmcpIHtcblx0bGV0IGRhdGEgPSBnZW5lcmF0ZWREYXRhO1xuIFx0bGV0IGMgPSAwO1xuIFx0bGV0IHNodWZmbGVkO1xuIFx0bGV0IG1heDsgXG4gXHRcbiBcdC8vIGlmIGtleSBpcyBpbiBvcmlnaW5hbCBzcG90LCArLjEgb3BhY2l0eSBcbiBcdHdoaWxlIChjIDwgMTAwMDAgJiYgIW1heCkge1xuIFx0XHRzaHVmZmxlZCA9IGZ1bmN0aW9uQXJnKE9iamVjdC5lbnRyaWVzKGRhdGEpKTtcblx0IFx0Zm9yIChsZXQgZSA9IDA7IGUgPCBzaHVmZmxlZC5sZW5ndGg7IGUrKykge1xuIFx0XHRcdGlmIChzaHVmZmxlZFtlXVsxXS5rZXkgPT09IGRhdGFbZV0ua2V5KSB7XG5cdFx0XHRcdGRhdGFbZV0ub3BhY2l0eSA9IGRhdGFbZV0ub3BhY2l0eSArIC4xO1xuXHRcdFx0XHRpZiAoZGF0YVtlXS5vcGFjaXR5ID4gMikge1xuXHRcdFx0XHRcdG1heCA9IHRydWU7XG5cdFx0XHRcdH1cdFxuXHRcdFx0fVxuXHRcdH1cblx0YysrO1xuXHR9XHRcblxuXHRyZXR1cm4gZGF0YTsgXG59XG5cbmV4cG9ydCB7Y29tcGFyZURhdGF9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvY29tcGFyZURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/modules/generateTable.js ***!
  \**************************************/
/*! exports provided: generateTable */
/*! exports used: generateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateTable; });\nconst generateTable = () => {\n\tlet myTableDiv = document.getElementById(\"myDynamicTable\");\n\tlet table = document.createElement('TABLE');\n\ttable.border = '1';\n\tlet tableBody = document.createElement('TBODY');\n\ttable.appendChild(tableBody);\n\tfor (let i = 0; i < 61; i++) {\n\t\tlet tr = document.createElement('TR');\n\t\ttableBody.appendChild(tr);\n\t\tfor (let j = 0; j < 61; j++) {\n\t\t\tlet td = document.createElement('TD');\n\t\t\ttd.width = '50';\n\t\t\tif (j === 0) {\n\t\t\t\tlet p = document.createElement(\"p\");\n\t\t\t\tp.classList.add('rotate');\n\t\t\t\tlet t = document.createTextNode(i-1);\n\t\t\t\tp.appendChild(t);\n\t\t\t\ttd.appendChild(p);\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}  \n\t\t\tif (i === 0 && j !== 0) {\n\t\t\t\ttd.appendChild(document.createTextNode(j-1));\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}\n\t\t\tif (i !== 0 && j !== 0) {\n\t\t\t\ttd.classList.add('color');\n\t\t\t\t// apply color based on data \n\t\t\t}\n\t\t\t\n\t\t\ttr.appendChild(td);\n\t\t}\n\t}\n\n\tmyTableDiv.appendChild(table);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanM/YjllOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuXHRsZXQgbXlUYWJsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEeW5hbWljVGFibGVcIik7XG5cdGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG5cdHRhYmxlLmJvcmRlciA9ICcxJztcblx0bGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RCT0RZJyk7XG5cdHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNjE7IGkrKykge1xuXHRcdGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XG5cdFx0dGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDYxOyBqKyspIHtcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XG5cdFx0XHR0ZC53aWR0aCA9ICc1MCc7XG5cdFx0XHRpZiAoaiA9PT0gMCkge1xuXHRcdFx0XHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuXHRcdFx0XHRsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGktMSk7XG5cdFx0XHRcdHAuYXBwZW5kQ2hpbGQodCk7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKHApO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fSAgXG5cdFx0XHRpZiAoaSA9PT0gMCAmJiBqICE9PSAwKSB7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGotMSkpO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgIT09IDAgJiYgaiAhPT0gMCkge1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuXHRcdFx0XHQvLyBhcHBseSBjb2xvciBiYXNlZCBvbiBkYXRhIFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0ci5hcHBlbmRDaGlsZCh0ZCk7XG5cdFx0fVxuXHR9XG5cblx0bXlUYWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVUYWJsZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./src/modules/sortFunctions.js ***!
  \**************************************/
/*! exports provided: es6shuffle, es6shuffleTwo, prototype */
/*! exports used: es6shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return es6shuffle; });\n/* unused harmony export es6shuffleTwo */\n/* unused harmony export prototype */\n// es6 shuffle \nfunction es6shuffle(a) {\n\tfor (let i = a.length - 1; i > 0; i--) {\n\t\tconst j = Math.floor(Math.random() * (i + 1));\n\t\t[a[i], a[j]] = [a[j], a[i]];\n\t}\n\n\treturn a;\n}\n\n// es6 approach #2 \nfunction es6shuffleTwo(a) {\n\tvar x = a.sort(function() {\n\t\treturn .5 - Math.random();\n\t});\n\n\treturn x; \n}\n\n// prototype approach to shuffle \nfunction prototype(a) {\n\tArray.prototype.shuffle = function() {\n\t\tlet m = this.length, i;\n\t\twhile (m) {\n\t\t\ti = (Math.random() * m--) >>> 0;\n\t\t\t[this[m], this[i]] = [this[i], this[m]]\n\t\t}\n\t\treturn this;\n\t}\n\n\treturn a.shuffle();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3NvcnRGdW5jdGlvbnMuanM/MjRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlczYgc2h1ZmZsZSBcbmZ1bmN0aW9uIGVzNnNodWZmbGUoYSkge1xuXHRmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0Y29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuXHRcdFthW2ldLCBhW2pdXSA9IFthW2pdLCBhW2ldXTtcblx0fVxuXG5cdHJldHVybiBhO1xufVxuXG4vLyBlczYgYXBwcm9hY2ggIzIgXG5mdW5jdGlvbiBlczZzaHVmZmxlVHdvKGEpIHtcblx0dmFyIHggPSBhLnNvcnQoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcblx0fSk7XG5cblx0cmV0dXJuIHg7IFxufVxuXG4vLyBwcm90b3R5cGUgYXBwcm9hY2ggdG8gc2h1ZmZsZSBcbmZ1bmN0aW9uIHByb3RvdHlwZShhKSB7XG5cdEFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IG0gPSB0aGlzLmxlbmd0aCwgaTtcblx0XHR3aGlsZSAobSkge1xuXHRcdFx0aSA9IChNYXRoLnJhbmRvbSgpICogbS0tKSA+Pj4gMDtcblx0XHRcdFt0aGlzW21dLCB0aGlzW2ldXSA9IFt0aGlzW2ldLCB0aGlzW21dXVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJldHVybiBhLnNodWZmbGUoKTtcbn1cblxuZXhwb3J0IHtlczZzaHVmZmxlLCBlczZzaHVmZmxlVHdvLCBwcm90b3R5cGV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9zb3J0RnVuY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);
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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateData; });\nconst generateData = () => {\n\tvar newDataSet = [];\n\tlet i = 0; \n\twhile (i < 3600) {\n\t\tlet item = {}\n\t\t// let r = Math.random().toString(36).substring(7);\n\t\t// item.name = r[0];\n\n\t\tlet r = i; // order 1, 2, 3... \n\t\titem.name = r;\n\t\titem.color = '#3498db';\n\t\titem.opacity = 1;  \n\t\t\n\t\t// generates color on blue spectrum\n\t\t// var randColor = \"rgb(0,100, \" + (Math.floor(Math.random() * 675)) + \")\";\n\t\t// generate HSL\n\t\t/*\n\t\tvar randColor = \"hsl(\" + 360 * Math.random() + ',' +\n\t\t(25 + 70 * Math.random()) + '%,' + \n\t\t(85 + 10 * Math.random()) + '%)'\n\t\tif (i > 0) {\n\t\t\tfor (var c = 0; c < i; c++) {\n\t\t\t\tif (newDataSet[c].name === r[0]) {\n\t\t\t\t\titem.color = newDataSet[c].color;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!item.color) {\n\t\t\t\titem.color = randColor; \n\t\t\t}\n\t\t} else {\n\t\t\titem.color = randColor;\n\t\t}\n\t\t*/\n\t\tnewDataSet.push(item)\n\t\ti++; \n\t}\nreturn newDataSet;  \n} \n \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qcz8yZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlRGF0YSA9ICgpID0+IHtcblx0dmFyIG5ld0RhdGFTZXQgPSBbXTtcblx0bGV0IGkgPSAwOyBcblx0d2hpbGUgKGkgPCAzNjAwKSB7XG5cdFx0bGV0IGl0ZW0gPSB7fVxuXHRcdC8vIGxldCByID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXHRcdC8vIGl0ZW0ubmFtZSA9IHJbMF07XG5cblx0XHRsZXQgciA9IGk7IC8vIG9yZGVyIDEsIDIsIDMuLi4gXG5cdFx0aXRlbS5uYW1lID0gcjtcblx0XHRpdGVtLmNvbG9yID0gJyMzNDk4ZGInO1xuXHRcdGl0ZW0ub3BhY2l0eSA9IDE7ICBcblx0XHRcblx0XHQvLyBnZW5lcmF0ZXMgY29sb3Igb24gYmx1ZSBzcGVjdHJ1bVxuXHRcdC8vIHZhciByYW5kQ29sb3IgPSBcInJnYigwLDEwMCwgXCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjc1KSkgKyBcIilcIjtcblx0XHQvLyBnZW5lcmF0ZSBIU0xcblx0XHQvKlxuXHRcdHZhciByYW5kQ29sb3IgPSBcImhzbChcIiArIDM2MCAqIE1hdGgucmFuZG9tKCkgKyAnLCcgK1xuXHRcdCgyNSArIDcwICogTWF0aC5yYW5kb20oKSkgKyAnJSwnICsgXG5cdFx0KDg1ICsgMTAgKiBNYXRoLnJhbmRvbSgpKSArICclKSdcblx0XHRpZiAoaSA+IDApIHtcblx0XHRcdGZvciAodmFyIGMgPSAwOyBjIDwgaTsgYysrKSB7XG5cdFx0XHRcdGlmIChuZXdEYXRhU2V0W2NdLm5hbWUgPT09IHJbMF0pIHtcblx0XHRcdFx0XHRpdGVtLmNvbG9yID0gbmV3RGF0YVNldFtjXS5jb2xvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFpdGVtLmNvbG9yKSB7XG5cdFx0XHRcdGl0ZW0uY29sb3IgPSByYW5kQ29sb3I7IFxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpdGVtLmNvbG9yID0gcmFuZENvbG9yO1xuXHRcdH1cblx0XHQqL1xuXHRcdG5ld0RhdGFTZXQucHVzaChpdGVtKVxuXHRcdGkrKzsgXG5cdH1cbnJldHVybiBuZXdEYXRhU2V0OyAgXG59IFxuIFxuZXhwb3J0IHtnZW5lcmF0ZURhdGF9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

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
eval("/* unused harmony export compareData */\nfunction compareData(arg1, arg2) {\n\tlet matchMap = {}; \n\t// to do... \n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzPzIyNmEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29tcGFyZURhdGEoYXJnMSwgYXJnMikge1xuXHRsZXQgbWF0Y2hNYXAgPSB7fTsgXG5cdC8vIHRvIGRvLi4uIFxufVxuXG5leHBvcnQge2NvbXBhcmVEYXRhfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2NvbXBhcmVEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
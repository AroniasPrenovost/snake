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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_generateData__ = __webpack_require__(/*! ./modules/generateData */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_generateTable__ = __webpack_require__(/*! ./modules/generateTable */ 4);\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_1__modules_generateTable__[\"a\" /* generateTable */])();\n\n// need to compare pre and post sorted data\n// to do... \n\n// pass that sorted outcome to the table\n// to do... \n\nconst colorTable = args => {\n   \tlet colors = document.getElementsByClassName('color');\n    for(let i = 0; i < colors.length; i++){\n   \t\tif (!args) {\n   \t\t\tcolors[i].style.backgroundColor = '#efefef';\n   \t\t} else {\n\t\t\tcolors[i].style.backgroundColor = args[i].color;\n   \t\t}\n    }\n}\n\nsetTimeout(function(){  \n\tcolorTable(Object(__WEBPACK_IMPORTED_MODULE_0__modules_generateData__[\"a\" /* generateData */])());\n}, 10);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dlbmVyYXRlRGF0YX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlRGF0YSc7XG5pbXBvcnQge2dlbmVyYXRlVGFibGV9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZVRhYmxlJztcblxuZ2VuZXJhdGVUYWJsZSgpO1xuXG4vLyBuZWVkIHRvIGNvbXBhcmUgcHJlIGFuZCBwb3N0IHNvcnRlZCBkYXRhXG4vLyB0byBkby4uLiBcblxuLy8gcGFzcyB0aGF0IHNvcnRlZCBvdXRjb21lIHRvIHRoZSB0YWJsZVxuLy8gdG8gZG8uLi4gXG5cbmNvbnN0IGNvbG9yVGFibGUgPSBhcmdzID0+IHtcbiAgIFx0bGV0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKyl7XG4gICBcdFx0aWYgKCFhcmdzKSB7XG4gICBcdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZmVmZWYnO1xuICAgXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2xvcnNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYXJnc1tpXS5jb2xvcjtcbiAgIFx0XHR9XG4gICAgfVxufVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICBcblx0Y29sb3JUYWJsZShnZW5lcmF0ZURhdGEoKSk7XG59LCAxMCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/*!*************************************!*\
  !*** ./src/modules/generateData.js ***!
  \*************************************/
/*! exports provided: generateData */
/*! exports used: generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateData; });\nconst generateData = () => {\n\tvar newDataSet = []; \n\tfor (var i = 0; i < 3600; i++){\n\t\tlet item = {}\n\t\tlet r = Math.random().toString(36).substring(7);\n\t\titem.name = r[0];\n\t\t\n\t\t// generates color on blue spectrum\n\t\t// var randColor = \"rgb(0,100, \" + (Math.floor(Math.random() * 675)) + \")\";\n\t\t// generate HSL\n\t\tvar randColor = \"hsl(\" + 360 * Math.random() + ',' +\n\t\t(25 + 70 * Math.random()) + '%,' + \n\t\t(85 + 10 * Math.random()) + '%)'\n\t\tif (i > 0) {\n\t\t\tfor (var c = 0; c < i; c++) {\n\t\t\t\tif (newDataSet[c].name === r[0]) {\n\t\t\t\t\titem.color = newDataSet[c].color;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (!item.color) {\n\t\t\t\titem.color = randColor; \n\t\t\t}\n\t\t} else {\n\t\t\titem.color = randColor;\n\t\t}\n\tnewDataSet.push(item)\n\t}\nreturn newDataSet;  \n} \n \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlRGF0YS5qcz8yZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlRGF0YSA9ICgpID0+IHtcblx0dmFyIG5ld0RhdGFTZXQgPSBbXTsgXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzYwMDsgaSsrKXtcblx0XHRsZXQgaXRlbSA9IHt9XG5cdFx0bGV0IHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cdFx0aXRlbS5uYW1lID0gclswXTtcblx0XHRcblx0XHQvLyBnZW5lcmF0ZXMgY29sb3Igb24gYmx1ZSBzcGVjdHJ1bVxuXHRcdC8vIHZhciByYW5kQ29sb3IgPSBcInJnYigwLDEwMCwgXCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjc1KSkgKyBcIilcIjtcblx0XHQvLyBnZW5lcmF0ZSBIU0xcblx0XHR2YXIgcmFuZENvbG9yID0gXCJoc2woXCIgKyAzNjAgKiBNYXRoLnJhbmRvbSgpICsgJywnICtcblx0XHQoMjUgKyA3MCAqIE1hdGgucmFuZG9tKCkpICsgJyUsJyArIFxuXHRcdCg4NSArIDEwICogTWF0aC5yYW5kb20oKSkgKyAnJSknXG5cdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IGk7IGMrKykge1xuXHRcdFx0XHRpZiAobmV3RGF0YVNldFtjXS5uYW1lID09PSByWzBdKSB7XG5cdFx0XHRcdFx0aXRlbS5jb2xvciA9IG5ld0RhdGFTZXRbY10uY29sb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghaXRlbS5jb2xvcikge1xuXHRcdFx0XHRpdGVtLmNvbG9yID0gcmFuZENvbG9yOyBcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlbS5jb2xvciA9IHJhbmRDb2xvcjtcblx0XHR9XG5cdG5ld0RhdGFTZXQucHVzaChpdGVtKVxuXHR9XG5yZXR1cm4gbmV3RGF0YVNldDsgIFxufSBcbiBcbmV4cG9ydCB7Z2VuZXJhdGVEYXRhfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ2VuZXJhdGVEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************************!*\
  !*** ./src/modules/generateTable.js ***!
  \**************************************/
/*! exports provided: generateTable */
/*! exports used: generateTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return generateTable; });\nconst generateTable = () => {\n\tlet myTableDiv = document.getElementById(\"myDynamicTable\");\n\tlet table = document.createElement('TABLE');\n\ttable.border = '1';\n\tlet tableBody = document.createElement('TBODY');\n\ttable.appendChild(tableBody);\n\tfor (let i = 0; i < 61; i++) {\n\t\tlet tr = document.createElement('TR');\n\t\ttableBody.appendChild(tr);\n\t\tfor (let j = 0; j < 61; j++) {\n\t\t\tlet td = document.createElement('TD');\n\t\t\ttd.width = '50';\n\t\t\tif (j === 0) {\n\t\t\t\tlet p = document.createElement(\"p\");\n\t\t\t\tp.classList.add('rotate');\n\t\t\t\tlet t = document.createTextNode(i-1);\n\t\t\t\tp.appendChild(t);\n\t\t\t\ttd.appendChild(p);\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}  \n\t\t\tif (i === 0 && j !== 0) {\n\t\t\t\ttd.appendChild(document.createTextNode(j-1));\n\t\t\t\ttd.classList.add('outer');\n\t\t\t}\n\t\t\tif (i !== 0 && j !== 0) {\n\t\t\t\ttd.classList.add('color');\n\t\t\t\t// apply color based on data \n\t\t\t}\n\t\t\ttr.appendChild(td);\n\t\t}\n\t}\n\tmyTableDiv.appendChild(table);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dlbmVyYXRlVGFibGUuanM/YjllOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuXHRsZXQgbXlUYWJsZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEeW5hbWljVGFibGVcIik7XG5cdGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RBQkxFJyk7XG5cdHRhYmxlLmJvcmRlciA9ICcxJztcblx0bGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RCT0RZJyk7XG5cdHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgNjE7IGkrKykge1xuXHRcdGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XG5cdFx0dGFibGVCb2R5LmFwcGVuZENoaWxkKHRyKTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDYxOyBqKyspIHtcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XG5cdFx0XHR0ZC53aWR0aCA9ICc1MCc7XG5cdFx0XHRpZiAoaiA9PT0gMCkge1xuXHRcdFx0XHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRwLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuXHRcdFx0XHRsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGktMSk7XG5cdFx0XHRcdHAuYXBwZW5kQ2hpbGQodCk7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKHApO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fSAgXG5cdFx0XHRpZiAoaSA9PT0gMCAmJiBqICE9PSAwKSB7XG5cdFx0XHRcdHRkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGotMSkpO1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgIT09IDAgJiYgaiAhPT0gMCkge1xuXHRcdFx0XHR0ZC5jbGFzc0xpc3QuYWRkKCdjb2xvcicpO1xuXHRcdFx0XHQvLyBhcHBseSBjb2xvciBiYXNlZCBvbiBkYXRhIFxuXHRcdFx0fVxuXHRcdFx0dHIuYXBwZW5kQ2hpbGQodGQpO1xuXHRcdH1cblx0fVxuXHRteVRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZVRhYmxlfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ2VuZXJhdGVUYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);
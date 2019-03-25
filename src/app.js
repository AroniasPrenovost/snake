import {generateData} from './modules/generateData';
import {compareData} from './modules/compareData';
import {generateTable} from './modules/generateTable';
import {es6shuffle, es6shuffleTwo, prototype, nativeSwap} from "./modules/sortFunctions";

// initialize 
generateTable();

// pass that sorted outcome to the table
const colorTable = args => {
   	let colors = document.getElementsByClassName('color');
    for(let i = 0; i < colors.length; i++){
   		if (!args) {
   			colors[i].style.backgroundColor = '#efefef';
   		} else {
			colors[i].style.backgroundColor = args[i].color;
			colors[i].style.opacity = args[i].opacity;
   		}
    }
}

// compare pre and post sorted data
let tableData = compareData(generateData(), es6shuffle);

// color table  
colorTable(tableData);
import {generateData} from './modules/generateData';
import {generateTable} from './modules/generateTable';

generateTable();

// need to compare pre and post sorted data
// to do... 

// pass that sorted outcome to the table
// to do... 

const colorTable = args => {
   	let colors = document.getElementsByClassName('color');
    for(let i = 0; i < colors.length; i++){
   		if (!args) {
   			colors[i].style.backgroundColor = '#efefef';
   		} else {
			colors[i].style.backgroundColor = args[i].color;
   		}
    }
}

setTimeout(function(){  
	colorTable(generateData());
}, 10);

import {generateData} from './modules/generateData';
import {compareData} from './modules/compareData';
import {generateTable} from './modules/generateTable';

generateTable();

// compare pre and post sorted data
compareData(generateData()); 

// sort data in a specific way
// to do... 

// compare data sets multiple times
// to do... 


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

setTimeout(function(){  
	colorTable(/* data passed here */);
}, 10);

import {generateData} from './modules/generateData';
import {compareData} from './modules/compareData';
import {generateTable} from './modules/generateTable';
import {es6shuffle, es6shuffleTwo, prototype} from "./modules/sortFunctions";

// initialize 
generateTable();

// pass that sorted outcome to the table
const colorTable = args => {
  let colors = document.getElementsByClassName('color');
  for(let i = 0; i < colors.length; i++){
    if (!args) {
      colors[i].style.backgroundColor = '#efefef';
    } else {

    let gradient = ['black', '#ffffe0','#ffd59b','#ffa474','#f47461','#db4551','#b81b34','#8b0000'];  
      colors[i].style.opacity = args[i].opacity;
      if (args[i].opacity < .2) {
        colors[i].style.backgroundColor = gradient[0];
      } else if (args[i].opacity < .3) {
        colors[i].style.backgroundColor = gradient[1];
      } else if (args[i].opacity < .4) {
        colors[i].style.backgroundColor = gradient[2];
      } else if (args[i].opacity < .5) {
        colors[i].style.backgroundColor = gradient[3];
      } else if (args[i].opacity < .6) {
        colors[i].style.backgroundColor = gradient[4];
      } else if (args[i].opacity < .7) {
        colors[i].style.backgroundColor = gradient[5];
      } else if (args[i].opacity < .8) {
        colors[i].style.backgroundColor = gradient[6];
      } else if (args[i].opacity < .9) {
        colors[i].style.backgroundColor = gradient[7];
      } else {
        colors[i].style.backgroundColor = gradient[8];
      }
    }
  }
}

// compare pre and post sorted data
let tableData = compareData(generateData(), es6shuffle);

// color table  
setTimeout(function(){ 
  colorTable(tableData);
}, 50);

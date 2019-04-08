import {generateTable} from './modules/generateTable';
import {shuffle} from "./modules/shuffle";

// initialize 
generateTable();

var colors = document.getElementsByClassName('color');

// pass sorted outcome to the table 
const colorTable = () => {
	for(let i = 0; i < colors.length; i++){
   	colors[i].style.backgroundColor = 'white';
	}
}

// color table 
colorTable();

// get arrow key press
var d = document;
var direction; 

d.onkeydown = d.body.onkeydown = function(e){
	e = e || window.event;
	direction = e.keyCode || e.which;

	if (direction == 37) {
		direction = 'left';
	} else if (direction == 38) {
		direction = 'up';
	} else if (direction == 39) {
		direction = 'right';
	} else if (direction == 40) {
		direction = 'down';
	}else {
		direction = null;
	}
}

// add snake food at random location on grid 
function generateFood(){
	let random = shuffle([...Array(colors.length).keys()]);
	if (colors[random[0]].style.backgroundColor !== 'green' && colors[random[0]].style.backgroundColor !== 'orange') {
		colors[random[0]].style.backgroundColor = 'green';
		foodLocation.push(random[0]); 
	}
}

// check boundaries 
function checkHorizontalBoundaries(args, dir) {
	let size = colors.length; 
	let height = document.getElementById('table').rows.length;
	let rowLength = Math.floor((height/size)*100);

	if (dir === 'right') {
		if (args % rowLength === 0) {
			return 'bound'; 
		} 
	}

	if (dir === 'left') {
		if ((args - 1) % rowLength === 0) {
			return 'bound'; 
		}
	}
}

// control snake 
// current board position based on total 'length'
var currentPos = 4; // 4 is start position 
var lastPos = [];
var trimTail = false;
var foodLocation = [];
var backup;  
var moves = 0;
var timesRun = 0;

var interval = setInterval(function(){
    timesRun += 1;
    /* if(timesRun === 1000){ clearInterval(interval); } */

	if (direction === 'down' && moves === 0) {
		colors[currentPos].style.backgroundColor = 'orange';
		moves++;
		colors[currentPos].style.backgroundColor = 'white';
		lastPos.push(colors[currentPos]); 
	}

	if (direction == 'right') {
		moves++;  
		currentPos++;

		 if (colors[currentPos].style.backgroundColor !== 'orange') {
			colors[currentPos].style.backgroundColor = 'orange';
			lastPos.push(colors[currentPos]); 
		} else {
			alert('error');
			return; 
		}

		if(moves > 5) {
			lastPos[0].style.backgroundColor = 'white';
			backup = lastPos[0];
			lastPos.shift();
		}
	}

	if (direction === 'left') {
		moves++;
		--currentPos;
		if (colors[currentPos].style.backgroundColor !== 'orange') {
			colors[currentPos].style.backgroundColor = 'orange';
			lastPos.push(colors[currentPos]);  
		} else {
			alert('error');
			return; 
		}

		if (moves > 5) {
			lastPos[0].style.backgroundColor = 'white';
			backup = lastPos[0];
			lastPos.shift();
		}
	}

	if (direction === 'down' && moves > 0) {
		moves++;
		currentPos+=10;
		if (!colors[currentPos]) {
			clearInterval(interval);
			console.log('bound');
			// to do....
		}
		if (colors[currentPos].style.backgroundColor !== 'orange') {
			colors[currentPos].style.backgroundColor = 'orange';
			lastPos.push(colors[currentPos]);  
		} else {
			alert('error');
			return; 
		}

		if(moves > 5) {
			lastPos[0].style.backgroundColor = 'white';
			backup = lastPos[0];
			lastPos.shift();
		}
	}

	if (direction === 'up') {
		moves++;
		currentPos = currentPos - 10;
		if (!colors[currentPos]) {
			clearInterval(interval);
			console.log('bound');
			// to do....
		}
		if (colors[currentPos].style.backgroundColor !== 'orange') {
			colors[currentPos].style.backgroundColor = 'orange';
			lastPos.push(colors[currentPos]); 
		} else {
			alert('error');
			return; 
		}

		if (moves > 5) {
			lastPos[0].style.backgroundColor = 'white';
			backup = lastPos[0];
			lastPos.shift();
		}
	}

	// initialize snake length 
	if (moves > 5 && trimTail === false) {
		lastPos[0].style.backgroundColor = 'white';
		backup = lastPos[0];
		lastPos.shift(); 
		trimTail = true; 
	}

	if (checkHorizontalBoundaries(currentPos+1, direction) === 'bound') {
		clearInterval(interval);
		console.log('bound');
		// to do....  
	} 

	for (var s = 0; s < foodLocation.length; s++) {
		if (direction === 'right'){
			if (currentPos - 1 === foodLocation[s]) {
				lastPos.unshift(backup)
				colors[backup].style.backgroundColor = 'orange';
				return false; 
			}
		}
		if (direction === 'left'){
			if (currentPos + 1 === foodLocation[s]) {
				lastPos.unshift(backup)
				colors[backup].style.backgroundColor = 'orange';
				return false; 
			}
		}
		if (direction === 'down'){
			if (currentPos - 10 === foodLocation[s]) {
				lastPos.unshift(backup)
				colors[backup].style.backgroundColor = 'orange';
				return false; 
			}
		}
		if (direction === 'up'){
			if (currentPos + 10 === foodLocation[s]) {
				lastPos.unshift(backup)
				colors[backup].style.backgroundColor = 'orange';
				return false; 
			}
		}
	}

	// generate food every 100 moves 
	if (moves % 100 === 0 && moves !== 0) {
		generateFood();
	}

	d.onkeyup = d.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	clearInterval(interval);
			console.log('paused');
    }
	}

}, 120); 

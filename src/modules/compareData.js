

function compareData(genData, arg2, sortType) {
	/*
	if (!genData || !arg2) { return false; }
	if (!genData.length !== !arg2.length) { return false; }
	*/

	// sort arg2

	// use 'sortType'

	// compare, +1 opacity for matches

	// repeat
	
	let sortedData = []; 
	// to do... 

	for (var i = 0; i < genData.length; i++) {
	let cell = {}
		if (i > 0) {
			for (var c = 0; c < i; c++) {
				if (sortedData[c].name === r[0]) {
					cell.color = sortedData[c].color;
				}
			}
			if (!cell.color) {
				cell.color = randColor; 
			}
		} else {
			cell.color = randColor;
		}
	}
		sortedData.push(cell)
		i++; 
}

export {compareData};
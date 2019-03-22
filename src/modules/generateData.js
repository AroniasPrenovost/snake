const generateData = () => {
	var newDataSet = []; 
	for (var i = 0; i < 3600; i++){
		let item = {}
		// let r = Math.random().toString(36).substring(7);
		// item.name = r[0];

		let r = i; // order 1, 2, 3... 
		item.name = r; 
		
		// generates color on blue spectrum
		// var randColor = "rgb(0,100, " + (Math.floor(Math.random() * 675)) + ")";
		// generate HSL
		var randColor = "hsl(" + 360 * Math.random() + ',' +
		(25 + 70 * Math.random()) + '%,' + 
		(85 + 10 * Math.random()) + '%)'
		if (i > 0) {
			for (var c = 0; c < i; c++) {
				if (newDataSet[c].name === r[0]) {
					item.color = newDataSet[c].color;
				}
			}
			if (!item.color) {
				item.color = randColor; 
			}
		} else {
			item.color = randColor;
		}
	newDataSet.push(item)
	}
return newDataSet;  
} 
 
export {generateData};

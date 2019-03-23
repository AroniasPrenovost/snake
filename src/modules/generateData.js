const generateData = () => {
	var newDataSet = [];
	let i = 0; 
	while (i < 3600) {
		let item = {}
		// let r = Math.random().toString(36).substring(7);
		// item.name = r[0];

		let r = i; // order 1, 2, 3... 
		item.name = r;
		item.color = '#3498db';
		item.opacity = 1;  
		
		// generates color on blue spectrum
		// var randColor = "rgb(0,100, " + (Math.floor(Math.random() * 675)) + ")";
		// generate HSL
		/*
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
		*/
		newDataSet.push(item)
		i++; 
	}
return newDataSet;  
} 
 
export {generateData};

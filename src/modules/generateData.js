const generateData = () => {
	let newDataSet = [];
	let i = 0; 
	while (i < 3600) {
		let item = {}
		let r = i; // order 1, 2, 3... 
		item.key = r;
		item.color = 'black';
		item.opacity = .1;  
		newDataSet.push(item)
		i++; 
	}

	return newDataSet;  
} 
 
export {generateData};

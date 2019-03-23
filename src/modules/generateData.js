const generateData = () => {
	var newDataSet = [];
	let i = 0; 
	while (i < 3600) {
		let item = {}
		let r = i; // order 1, 2, 3... 
		item.key = r;
		item.color = '#3498db';
		item.opacity = 0;  
		newDataSet.push(item)
		i++; 
	}
	return newDataSet;  
} 
 
export {generateData};

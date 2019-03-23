function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function compareData(generatedData) {
	/*
	if (!generatedData || !arg2) { return false; }
	if (!generatedData.length !== !arg2.length) { return false; }
	*/

	// repeat
	let data = generatedData;
	let shuffled = shuffle(Object.entries(data));
	// shuffled[0][1].key = 0;

	// if key is in original spot, +.1 opacity 
 	let c = 0;
 	let prevData; 
 	while (c < 5) {
	 	for (var e = 0; e < shuffled.length; e++) {
	 		if (c !== 0) {
	 			let shuffle2 = shuffle(prevData);
	 			if (shuffle2[e][1].key === prevData[e][1].key) {
					shuffle2[e][1].opacity = prevData[e][1].opacity + .1;	
				}
				prevData = shuffled;
	 		} else {
	 			if (shuffled[e][1].key === data[e].key) {
					shuffled[e][1].opacity = shuffled[e][1].opacity + .1;	
				}
				prevData = shuffled; 
	 		}
		}
	c++;
	}	

	console.log(shuffled[0]);
}

export {compareData};
const generateTable = () => {
	let myTableDiv = document.getElementById("myDynamicTable");
	let table = document.createElement('TABLE');
	table.border = '1';
	table.id = 'table'
	let tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
	for (let i = 0; i < 24; i++) { // 24 for / 10 
		let tr = document.createElement('TR');
		tableBody.appendChild(tr);
		for (let j = 0; j < 31; j++) { // 11 for / 10 
			let td = document.createElement('TD');
			td.width = '20';
			if (i !== 0 && j !== 0) {
				td.classList.add('color');
				td.value = 'open';
			}
			tr.appendChild(td);
		}
	}
	myTableDiv.appendChild(table);
}

function colorTable(args, color) {
	for(let i = 0; i < args.length; i++){
   	args[i].style.backgroundColor = color;
	}
}

export {generateTable, colorTable};

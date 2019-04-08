const generateTable = () => {
	let myTableDiv = document.getElementById("myDynamicTable");
	let table = document.createElement('TABLE');
	table.border = '1';
	table.id = 'table'
	let tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);
	for (let i = 0; i < 24; i++) {
		let tr = document.createElement('TR');
		tableBody.appendChild(tr);
		for (let j = 0; j < 11; j++) {
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

export {generateTable};

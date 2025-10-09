function insert_Row() {
    // Get table element by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells into the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add text content to each new cell
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

// function insert_Row() {
//     //Write your code here
// 	let table = document.getElementById('sampleTable')
// 	let tbody = table.querySelector('tbody') || document.getElementById('sampleTable');
// 	let tr = document.createElement('tr')
// 	let td1 = document.createElement('td')
// 	let td2 = document.createElement('td')
// 	td1.textContent = "New Cell"
// 	td2.textContent = "New Cell2"
// 	tr.appendChild(td1)
// 	tr.appendChild(td2)
// 	tbody.insertBefore(tr, tbody.rows[0]);
// }

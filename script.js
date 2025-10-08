function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable')
	let tbody = table.querySelector('tbody') || document.getElementById('sampleTable');
	let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	td1.textContent = "New Cell"
	td2.textContent = "New Cell2"
	tr.appendChild(td1)
	tr.appendChild(td2)
	tbody.insertBefore(tr, tbody.rows[0]);


  
}

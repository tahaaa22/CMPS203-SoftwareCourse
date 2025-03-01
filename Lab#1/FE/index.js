function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
          deleteEmployee(item.id)
        })
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
document.querySelector('#submit').addEventListener('click', createEmployee);
// TODO
// add event listener to delete button
document.querySelector('#dataTable').addEventListener('click', deleteEmployee);

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  const data = document.querySelector('#name1').value;
  const id = document.querySelector('#id1').value;
  console.log(data, id)
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    body: JSON.stringify({id: id, name: data}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  fetchEmployees()
}

// TODO
function deleteEmployee (id){
  // get id
  // send id to BE
  // call fetchEmployees
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  })
  fetchEmployees()
}

fetchEmployees()

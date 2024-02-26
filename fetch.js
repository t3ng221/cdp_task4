// Define a web worker to handle the data fetching in a separate thread
const fetchDataWorker = new Worker('fetchDataWorker.js');
    
function fetchAndDisplayData() {
    // Send a message to the worker to start fetching data
    fetchDataWorker.postMessage('fetchData');
}

// Listen for messages from the worker
fetchDataWorker.onmessage = function (event) {
    // Handle the data received from the worker
    displayDataInTable(event.data);
};


// Function to display data in the table**********
function displayDataInTable(data) {
    // Get the table body element by calling the by id
    const tableBody = document.getElementById('usersTableBody');

    // Clear existing rows and blank data
    tableBody.innerHTML = '';

    // Loop through the data and create table rows and wait 500ms for every index
    data.forEach((user,index) => {
        setTimeout(()=>{
            const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>${user.address.street}</td>
        `;
        tableBody.appendChild(row);
        },(index*500))
    });
}
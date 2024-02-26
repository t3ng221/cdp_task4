

onmessage = async function (event) {
    if (event.data === 'fetchData') {
        try {
            // Use the fetchData function to fetch data
            const data = await fetchData();
            
            // Send the fetched data back to the main thread
            postMessage(data);
        } catch (error) {
            console.error(error.message);
        }
    }
};

function fetchData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(new Error('Error fetching data:', error));
        }
    });
}



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

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

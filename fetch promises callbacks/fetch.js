let getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/17/comments');
        if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Error fetching data:', error.message);
        throw error; // 
    }
};

getData()
    .then((result) => {
        console.log('Data:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
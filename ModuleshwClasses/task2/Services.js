export async function getData() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments`)

        if (response.ok) {
            let data = response.json();
            // console.log("All posts form server", data);
            return data
        } else {
            console.log("problem with response", response.status);
        }
    } catch (error) {
        console.error(`Fetch didnt work: ${error.message}`);
    }
}

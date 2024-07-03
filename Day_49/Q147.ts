//  Question 147: Explain how to handle errors in a callback pattern.



type Callback = (error: Error | null, data?: any) => void;

function fetchData(callback: Callback) {
    // Simulating an asynchronous operation (e.g., network request)
    setTimeout(() => {
        const error = Math.random() > 0.5 ? new Error('Failed to fetch data') : null;
        const data = error ? null : { name: 'John Doe' };

        callback(error, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error.message);
        // Handle the error (e.g., display a message to the user)
        return; // Exit early if there is an error
    }

    console.log('Data:', data);
    // Process the data
});

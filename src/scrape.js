const fs = require('fs');

// Read the output.json file
fs.readFile('output.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Extract network requests directly from the JSON data
        const networkRequestsData = jsonData['networkRequests'];

        // Output the network requests
        console.log(networkRequestsData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

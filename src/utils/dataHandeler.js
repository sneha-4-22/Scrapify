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

        // Extract network requests from the JSON data
        const networkRequestsData = jsonData.map(item => ({
            url: item.url,
            startTime: item.startTime,
            endTime: item.endTime,
            transferSize: item.transferSize,
            decodedBodySize: item.decodedBodySize,
            duration: item.duration,
            initiatorType: item.initiatorType,
        }));

        // Output the network requests
        console.log(networkRequestsData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

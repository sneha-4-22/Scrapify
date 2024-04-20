const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Initialize an empty array to store network request data
  const networkRequests = [];

  // Listen for network requests
  page.on('request', (request) => {
    networkRequests.push({
      url: request.url(),
      method: request.method(),
      resourceType: request.resourceType(),
      headers: request.headers(),
    });

    // Continue intercepting requests
    request.continue();
  });

  // Navigate to the website
  await page.goto('https://www.reddit.com/');

  // Save network request data to a JSON file
  fs.writeFileSync('output.json', JSON.stringify({ networkRequests }, null, 2));

  await browser.close();
})();

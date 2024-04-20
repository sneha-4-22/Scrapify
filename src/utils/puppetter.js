const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  const networkRequests = [];

  // Listen for network requests
  page.on('request', (request) => {
    networkRequests.push({
      url: request.url(),
      method: request.method(),
      resourceType: request.resourceType(),
      headers: request.headers(),
    });
    request.continue();
  });

   await page.goto('https://www.reddit.com/'); //instead of reddit enter any url you want to do the web scrapping with 

  fs.writeFileSync('output.json', JSON.stringify({ networkRequests }, null, 2));

  await browser.close();
})();

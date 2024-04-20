
const express = require('express');
const scrapeWebsite = require('./scrape');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
    try {
        const data = await scrapeWebsite('https://www.reddit.com/');
        res.json(data);
    } catch (error) {
        console.error('Error scraping website:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

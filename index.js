const express = require('express');
const app = express();

// Change this URL to whatever you want to redirect to
const targetUrl = 'https://account.beauty/85I97E';

app.get('/', (req, res) => {
  res.redirect(targetUrl);
});

// Optional: redirect for custom paths
app.get('/:path', (req, res) => {
  res.redirect(targetUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

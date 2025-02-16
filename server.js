const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, description: 'Amazing product 1' },
    { id: 2, name: 'Product 2', price: 149.99, description: 'Amazing product 2' },
    { id: 3, name: 'Product 3', price: 199.99, description: 'Amazing product 3' },
  ];
  res.json(products);
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

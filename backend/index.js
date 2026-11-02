const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Mengizinkan akses dari frontend
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API NGO FSJ Berjalan!');
});

app.listen(5000, () => console.log('Server running on port 5000'));
require('./data_base/db');
const express = require('express');
const app = express();
const noteRoutes = require('./routes/noteRoutes');

app.use(express.json());
app.use('/api/notes', noteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

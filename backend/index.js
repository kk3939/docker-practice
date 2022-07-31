const express = require('express');
const app = express();

const port = 3000;

app.get('/user', (_, res) => {
  res.json([{
    id: 1,
    name: "kyo9bo"
  }]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

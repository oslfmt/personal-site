const express = require('express');
const app = express();
const port = 3000;

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// allow serving static files
app.use(express.static('/home/victor/website/build'));

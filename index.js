const express = require('express');
const app = express();
const port = 3000;

app.use('/:id', express.static('./'));

app.listen(port, () => { console.log(`Proxy is listening on port ${port}`); });
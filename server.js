const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send([{ title: 'Hello, world (again)!' }]);
});

app.listen(port, () =>
    console.log(`Server is running on: http://localhost:${port}`)
);

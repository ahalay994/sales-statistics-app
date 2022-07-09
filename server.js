const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 5000;
server.use(express.static('dist'));
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

server.listen(port, () =>
    console.log(`Server is running on: http://localhost:${port}`)
);

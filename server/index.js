require('babel-register')({});
const server = require('./server-api.js');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server listening on', PORT);
});

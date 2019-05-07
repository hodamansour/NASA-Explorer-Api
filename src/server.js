const http = require('http');
const router = require('./router');

const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';

require('dotenv').config();

http.createServer(router).listen(port, () => {
  console.log(`Server running on http://${hostname}:${port}`)
});

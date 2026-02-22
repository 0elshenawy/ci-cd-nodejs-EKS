// index.js
const http = require('http');

const PORT = 6060;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello From Mahmoud Abdel Latif\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

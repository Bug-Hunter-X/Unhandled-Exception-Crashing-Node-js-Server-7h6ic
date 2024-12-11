const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Incorrect error handling: throwing an error directly in the callback
      throw new Error('Simulated error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const { WebSocketServer } = require('ws');
const http = require('http');
const uuidv4 = require('uuid').v4;

const PORT = 8000;
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
server.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});

const clients = {};

wsServer.on('connection', connection => {
  const userId = uuidv4();
  console.log('Recieved a new connection');

  clients[userId] = connection;
  console.log(`${userId} connected`);
});

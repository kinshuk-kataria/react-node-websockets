const { WebSocketServer, WebSocket } = require('ws');
const http = require('http');
const uuidv4 = require('uuid').v4;

const PORT = 8000;
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
server.listen(PORT, () => {
  console.log(`server listening on port:${PORT}`);
});

//maintain clients
const clients = {};
//maintain active users
const users = {};
//current editor content
let editorContent = null;
//user  activity history
let userActivity = [];

//event types
const typesDef = {
  USER_EVENT: 'userevent',
  CONTENT_CHANGE: 'contentchange'
};

function broadcastMessage(json) {
  // send current data to connected clients
  const data = JSON.stringify(json);
  for (let userId in clients) {
    let client = clients[userId];
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

function handleMessage(message, userId) {
  const dataFromClient = JSON.parse(message.toString());
  const json = { type: dataFromClient.type };

  if (dataFromClient.type === typesDef.USER_EVENT) {
    users[userId] = dataFromClient;
    userActivity.push(`${dataFromClient.username} joined`);
    json.data = { users, userActivity };
  } else if (dataFromClient.type === typesDef.CONTENT_CHANGE) {
    editorContent = dataFromClient.content;
    json.data = { editorContent, userActivity };
  }
  broadcastMessage(json);
}

function handleDisconnect(userId) {
  console.log(`${userId} disconnected`);
  const json = { type: typesDef.USER_EVENT };
  const username = users[userId]?.username || userId;
  userActivity.push(`${username} left`);
  json.data = { users, userActivity };
  delete clients[userId];
  delete users[userId];
  broadcastMessage(json);
}

// recieve new client request
wsServer.on('connection', connection => {
  const userId = uuidv4();
  console.log('Recieved a new connection');

  clients[userId] = connection;
  console.log(`${userId} connected`);
  connection.on('message', message => handleMessage(message));
  connection.on('close', () => handleDisconnect(userId));
});

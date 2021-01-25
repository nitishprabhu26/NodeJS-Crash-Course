const EventEmitter = require('events');
const { fileURLToPath } = require('url');
// creates a random certain format id
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;
// can be exported and the below statements can be placed in any other fileURLToPath(index.js)

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
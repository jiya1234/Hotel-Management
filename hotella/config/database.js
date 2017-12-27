const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality

// Export config object
module.exports = {
  uri: 'mongodb://jiyakhan:jiya1234@ds259325.mlab.com:59325/javeriamuneeba',
  secret: crypto, 
  db: 'javeriamuneeba' 
}

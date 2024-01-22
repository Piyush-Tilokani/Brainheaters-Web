const { createHash } = require('crypto');
console.log( createHash('sha256').update('giejgijwijeg').digest('hex'))
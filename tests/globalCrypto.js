/**
 * Provide the crypto normally found in browser environment
 * Required by vis to creat UUIDs
 */

const { Crypto } = require('node-webcrypto-ossl')
global.crypto = new Crypto()

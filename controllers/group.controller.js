var express = require('express');
var router = express.Router();
var status = require('http-status');

let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}

module.exports.testTestCrypto = function(req,res){

  const cipher = crypto.createCipher('aes192', 'a password');

  let itemToEncrypt = ["Angular","Express","Heroku"];

  let encrypted = cipher.update(itemToEncrypt.toString(), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  console.log(encrypted);

  const decipher = crypto.createDecipher('aes192', 'a password');

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(decrypted.split(','));

  res.status(201).json({"e":encrypted,"d":decrypted.split(',')})
}
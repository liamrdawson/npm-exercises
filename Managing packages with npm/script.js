let unsecurePlainTextPassword = `password`;

const colors = require('colors');
const bcrypt = require('bcrypt');
const saltRounds = 10;


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        console.log(hash.blue);
    });
});
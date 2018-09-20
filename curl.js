//just require node's built-in http module!
const http = require('http');

//oh wait - don't do that - http provides too much
//use request package instead - helper package for http
const request = require('request');

module.exports = (url, done) => {
    request(url, (err, response, body) => {
        if (err) {
            done(err.stack);
        } else {
            done(body);
        }
        done('\n> ');
    })
}

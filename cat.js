const fs = require('fs')

module.exports = (fileName, done) => {
    //async - handler func
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            done(err.stack)
        } else {
            done(data)
        }
    })
}
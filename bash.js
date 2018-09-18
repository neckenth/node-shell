const pwdFunc = require('./pwd.js');
const lsFunc = require('./ls.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        pwdFunc();
    } else if (cmd === 'ls') {
        lsFunc();
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});


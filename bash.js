const pwdFunc = require('./pwd.js');
const lsFunc = require('./ls.js');
const catFunc = require('./cat');
const curlFunc = require('./curl');

const prompt = (data) => process.stdout.write(data)

prompt('> ');

//at the end of the output, i'm not given the '> ' to enter another cmd but i can anyway - why?
process.stdin.on('data', (data) => {
    const entry = data.toString().trim();

    const cmd = entry.split(' ')[0];
    const arg = entry.split(' ')[1];

    //pass standard prompt func to all modules as a func param
    //you can't require prompt in module files - that would create a circular dependency
    //instead, prompt is a func - pass it to other funcs so it will be available in other modules

    if (cmd === 'pwd') {
        pwdFunc(prompt);
    } else if (cmd === 'ls') {
        lsFunc(prompt);
    } else if (cmd === 'cat') {
        catFunc(arg, prompt)
    } else if (cmd === 'curl') {
        curlFunc(arg, prompt)
    } else {
        prompt(`\nYou typed: ${cmd}`);
        prompt('\n> ')
    }

    //WE DO NOT NEED TO PROMPT AGAIN AT THE END
    //WE ARE PRACTICING ASYNC FUNCS
    //THIS PROMPT RUNS BEFORE ANY OF THE OTHER MODULES - THATS WHY IT WASN'T LANDING ON A NEW LINE
    // prompt('\n> ')

});


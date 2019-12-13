var access: boolean = false;

const readline = require('readline').Interface({
    input: process.stdin,
    output: process.stdout
});

    readline.question('password:', (code) => {
    if(code == 413413){
        console.log('correct. access granted');
        access = true;
    }else{
        console.log('incorrect. access denied');
    };
    readline.close();
});

//console.log('welcome')
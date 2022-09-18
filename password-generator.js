// Task 4
var passgenerator = require('generate-password');
var passwrd = passgenerator.generate(
    {
        length: 18,
        numbers: true,
        symbols: true
    }
)
console.log(passwrd);
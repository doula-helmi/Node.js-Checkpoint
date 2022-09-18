var fs = require("fs");
fs.readFile('welcome.txt', function (error, data) {
    if (error) return console.error(error.stack);
    console.log(data.toString());
});
console.log("program ended");
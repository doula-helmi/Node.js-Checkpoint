// Task 2
const http = require('http');
const server = http.createServer((req,result)=>{
    result.write('<h1>Hello Node!!!!</h1>')
    result.end();
});
server.listen(3000, (error)=>{
    if(error) console.log(error)
    else console.log('server connected')
});
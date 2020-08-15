const express = require('express');
const fs = require('fs');

const app = express();


app.use((request, response, next) => {
    const logstring = `[${(new Date).getHours()}:${(new Date).getMinutes}:${(new Date).getSeconds()}.${(new Date).getMilliseconds()}] [INFO] ${request.method} ${request.url} ${request.get('User-agent')}\r\n`;
    fs.appendFile('logs/queries.log', logstring);
    next();
});

app.get('/', (request, response) => {
    response.send('');
});
app.listen(3000);
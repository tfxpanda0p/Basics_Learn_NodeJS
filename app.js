const express = require('express')
const app = express()

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    console.log("1");
    next();
}

app.use(requestTime);

app.get('/', (req, res) => {
    console.log("2");
    let currentTime = new Date(req.requestTime);   // convert ms -> Date object
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${currentTime.toString()}</small>`
    res.send(responseText)
})

app.get('/test', (req, res) => {
    res.send(req.requestTime)
})


app.listen(3000)

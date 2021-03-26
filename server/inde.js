const express = require('express');
const app = express();
const routes = require('./routes');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const httpServer = http.createServer(app);

app.use(express.json({extended: true}))

app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));
app.use(bodyParser.json({limit: "50mb"}));

app.use(cors());

app.use('/', routes);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

httpServer.listen(5000, () => {
    console.log(`server started at 5000 port...`);
});
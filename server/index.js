const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('express-async-errors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);


app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ error: err.message });
});


const PORT = process.env.PORT || 5000;


async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`)
    });
  }
  catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();
const express = require('express');
const config = require('./config/app');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Oki doki!',
  });
});

app.listen(+config.appPort, () => {
  console.log(`${config.appName} started on port ${config.appPort}`);
});

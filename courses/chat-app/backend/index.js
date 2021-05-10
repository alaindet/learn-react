const express = require('express');

const APP_NAME = 'Simple Chat App';
const APP_PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Oki doki!',
  });
});

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} started on port ${APP_PORT}`);
});

const router = require('express').Router();

router.post('/login', (req, res) => {
  return res.status(200).send({
    message: 'Login works',
    payload: req.body,
  });
});

router.post('/register', (req, res) => {
  return res.status(201).send({
    message: 'Register works',
    payload: req.body,
  });
});

module.exports = router;

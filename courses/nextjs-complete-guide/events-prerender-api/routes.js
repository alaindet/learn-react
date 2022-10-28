const { Router } = require('express');

const DATABASE = require('./db.json');

const router = Router();

router.get('/events', (req, res) => {

  let events = DATABASE.events;

  if ('year' in req.query && 'month' in req.query) {
    const year = +req.query['year'];
    const month = +req.query['month'];

    events = events.filter(event => {
      const d = new Date(event.date);
      return d.getFullYear() === year && d.getMonth() === month - 1;
    });
  }

  if ('featured' in req.query) {
    events = events.filter(event => event.isFeatured);
  }

  return res.send({ error: null, data: events });
});

router.get('/events/:id', (req, res) => {
  const id = req.params['id'];

  if (!id) {
    const error = 'No ID provided';
    return res.statusCode(400).send({ error, data: null });
  }

  const events = DATABASE.events;
  const event = events.find(ev => ev.id === id);

  if (!event) {
    const error = `No event found with id ${id}`;
    return res.statusCode(404).send({ error, data: null });
  }

  return res.send({ error: null, data: event });
});

module.exports = router;

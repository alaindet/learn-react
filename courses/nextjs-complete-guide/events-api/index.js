const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes');

const app = express();
const PORT = 4242;
app.use(cors());
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
  console.log(`🍺🍺🍺 Events API started on port ${PORT} 🍺🍺🍺`);
});

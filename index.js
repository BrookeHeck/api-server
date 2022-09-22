'use strict ';

const app = require('./src/server');
require('dotenv').config();
const { db } = require('./src/models');
const PORT = process.env.PORT || 3001;
db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch(error => console.log(error));
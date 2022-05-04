
import express from 'express';

import config from './config'
import router from './routes'

const app = express();
app.use(router);

const server = app.listen(config.port, () => {
  console.log(`server running on port 4000`);
});

export { app, server }

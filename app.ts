import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';

import { connect } from './database/index';

import apiController from './routes/apiController';

dotenv.config();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', apiController);

app.use((req, res, next) => {
  // err.status = 404;
  next(res.status(404).json({ success: false, message: 'Not Found'}));
});

connect(false, true).then(() => {
  console.log('데이터베이스 연결 성공');
});

export default app;

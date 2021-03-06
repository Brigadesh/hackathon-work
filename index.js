const Joi = require('joi');
const gCalRouter = require('./routes/gCalRouter');
const salesforceOpptyRouter = require('./routes/salesforceOpptyRouter');
const assessmentRouter = require('./routes/takingAssessment');
const appdebug = require('debug')('appdebug');
const config = require('config');
const { authenticate } = require('./middleware/authenticator');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get('env') === 'development') {
  appdebug(config.get('name'));
  app.use(morgan('tiny'));
}
app.use(authenticate);
app.use('/api/gcal', gCalRouter);
app.use('/api/salesforceOppty', salesforceOpptyRouter);
app.use('/api/assessment', assessmentRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => appdebug(`Listening on port ${port}...`));

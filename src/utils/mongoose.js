const mongoose = require('mongoose');
const config = require('../config');
const logger = require('./log')(module);

const connectPromise = mongoose.connect(
  config.get('database:uri'),
  config.get('database:options')
);

mongoose.Promise = global.Promise;

mongoose.clean = function (done) {
  dropCollections(done);
};

const dropCollections = (done) => {
  mongoose.connection.db.dropCollection('spots', (error) => {
    if (error) logger.warn('Collection couldn\'t be removed', error);
    done && done();
  });
};

module.exports = mongoose;

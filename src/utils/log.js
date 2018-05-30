const winston = require('winston');

const logger = (module) => {
  let path = module.filename.split('/').slice(-2).join('/');

  return new winston.Logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: 'debug',
        label: path,
        prettyPrint: true
      })
    ]
  });
};

module.exports = logger;

const winston = require('winston');

const { format } = require('winston');

const {combine, timestamp, json} = format

// Logger configuration
const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: './service/data/logger.log',
            level: 'info'
        }),
    ],
    format: combine(
        timestamp(),
        json()
      )
};

const logger = new winston.createLogger(logConfiguration);

module.exports = {
    logger
};
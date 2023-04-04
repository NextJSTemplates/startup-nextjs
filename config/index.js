const production = require('./config.production');
const development = require('./config.development');

module.exports = {
    development,
    production,
}[process.env.NODE_ENV || 'development'];

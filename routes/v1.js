const health = require('./health.js');
const records = require('./records.js');

module.exports = function(app) {
    app.use('/v1',records)
    app.use('/v1',health)
}
import health from './health.js'
import records from './records.js'

export default function(app) {
    app.use('/v1',records)
    app.use('/v1',health)
}
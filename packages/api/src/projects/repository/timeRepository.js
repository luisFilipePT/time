const Time = require('../entities/time')

const timeRepository = (db) => {
    const timeDb = db.get('time')

    return {
        findMany(filter) {
            return timeDb.filter(filter).value()
        },

        create(props) {
            const newTime = Time(props)
            timeDb.push(newTime).write()

            return newTime
        },

        delete(time) {
            timeDb.remove({ id: time.id }).write()

            return time
        },
    }
}

module.exports = timeRepository

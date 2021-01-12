const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')

const fixtures = require('./fixtures')

const db = low(new Memory())
db.defaults({ project: [], time: [] }).write()

const { projectRepository, timeRepository } = require('../projects/')

module.exports = {
    repositories: {
        Project: projectRepository(db),
        Time: timeRepository(db),
    },
    db,
}

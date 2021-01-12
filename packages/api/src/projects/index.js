const projectResolvers = require('./resolvers/projectsResolvers')
const timeResolvers = require('./resolvers/timesResolvers')

const projectSchema = require('./schema/projectSchema')
const timeSchema = require('./schema/timeSchema')

const projectRepository = require('./repository/projectRepository')
const timeRepository = require('./repository/timeRepository')

module.exports = {
    resolvers: [projectResolvers, timeResolvers],
    projectSchema,
    timeSchema,
    projectRepository,
    timeRepository,
}

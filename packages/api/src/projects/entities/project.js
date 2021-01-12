const BaseEntity = require('../../entities/baseEntity')

const Project = (props) => ({
    ...BaseEntity(),
    ...props,
})

module.exports = Project

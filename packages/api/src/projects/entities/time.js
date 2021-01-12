const BaseEntity = require('../../entities/baseEntity')

const Time = (props) => ({
    ...BaseEntity(),
    ...props,
})

module.exports = Time

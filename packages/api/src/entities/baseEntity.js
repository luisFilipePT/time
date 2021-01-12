const { nanoid } = require('nanoid')

const BaseEntity = () => ({
    id: nanoid(),
    createdAt: new Date().toISOString(),
})

module.exports = BaseEntity

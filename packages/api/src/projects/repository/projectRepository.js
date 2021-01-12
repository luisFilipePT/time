const { UserInputError } = require('apollo-server')

const Project = require('../entities/project')

const projectRepository = (db) => {
    const projectDb = db.get('project')

    return {
        findOne(filter) {
            return projectDb.find(filter).value()
        },

        findMany(filter) {
            return projectDb.filter(filter).value()
        },

        create(props) {
            const exists = projectDb.find({ name: props.name }).value()

            if (exists) {
                throw new UserInputError(
                    'Project with that name already exists',
                    {
                        invalidArgs: [
                            {
                                name: 'UNIQUE',
                            },
                        ],
                    }
                )
            }

            const newProject = Project(props)
            projectDb.push(newProject).write()
            return newProject
        },

        update(props) {
            const project = projectDb.find({ id: props.id })

            if (!project.value()) {
                throw new UserInputError('Form Arguments invalid', {
                    invalidArgs: ['id'],
                })
            }

            return project.assign(props).write()
        },

        delete(project) {
            projectDb.remove({ id: project.id }).write()

            return project
        },
    }
}

module.exports = projectRepository

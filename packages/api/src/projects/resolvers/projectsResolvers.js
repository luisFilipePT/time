module.exports = {
    Query: {
        projects(_, { query = {} }, { repositories }) {
            return repositories.Project.findMany(query)
        },

        project(_, { query }, { repositories }) {
            return repositories.Project.findOne(query)
        },
    },

    Mutation: {
        createProject(_, { input }, { repositories }) {
            return repositories.Project.create(input)
        },

        updateProject(_, { input }, { repositories }) {
            return repositories.Project.update(input)
        },

        deleteProject(_, { input }, { repositories }) {
            return repositories.Project.delete(input)
        },
    },

    Project: {
        time(project, _, { repositories }) {
            return repositories.Time.findMany({ project: project.id })
        },
    },
}

module.exports = {
    Query: {
        times(_, { query = {} }, { repositories }) {
            return repositories.Time.findMany(query)
        },
    },

    Mutation: {
        createTime(_, { input }, { repositories }) {
            return repositories.Time.create(input)
        },

        deleteTime(_, { input }, { repositories }) {
            return repositories.Time.delete(input)
        },
    },

    Time: {
        project(time, _, { repositories }) {
            return repositories.Project.findOne({
                id: time.project,
            })
        },
    },
}

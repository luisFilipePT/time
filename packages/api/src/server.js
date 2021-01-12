const { ApolloServer, gql } = require('apollo-server')

const { projectSchema, timeSchema, resolvers } = require('./projects/')
const { repositories, db } = require('./db')

const typeDefs = gql`
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }

    ${projectSchema}
    ${timeSchema}
`

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return { repositories, db }
    },
})

server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})

const { gql } = require('apollo-server')

module.exports = gql`
    type Time {
        id: ID!
        createdAt: String!
        amount: Int!
        description: String!
        project: Project!
    }

    input CreateTimeInput {
        amount: Int!
        description: String!
        project: ID!
    }

    input DeleteTimeInput {
        id: ID!
    }

    extend type Query {
        """
        Get Time for Project
        """
        times: [Time]!
    }

    extend type Mutation {
        createTime(input: CreateTimeInput!): Time!
        deleteTime(input: DeleteTimeInput!): Time!
    }
`

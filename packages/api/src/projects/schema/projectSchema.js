const { gql } = require('apollo-server')

module.exports = gql`
    type Project {
        id: ID!
        createdAt: String
        name: String!
        description: String
        time: [Time]!
    }

    input ProjectsQuery {
        name: String
        description: String
    }

    input ProjectUpdate {
        id: ID!
        name: String
        description: String
    }

    input ProjectQuery {
        id: ID!
    }

    input NewProjectInput {
        name: String!
        description: String
    }

    extend type Query {
        """
        Get All Projects
        """
        projects(query: ProjectsQuery): [Project]!
        """
        Get Project by Id or Name
        """
        project(query: ProjectQuery!): Project!
    }

    extend type Mutation {
        createProject(input: NewProjectInput!): Project!
        updateProject(input: ProjectUpdate!): Project!
        deleteProject(input: ProjectUpdate): Project!
    }
`

import { gql } from '@apollo/client'

const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            name
            description
            id
        }
    }
`

const GET_PROJECT = gql`
    query GetProject($id: ID!) {
        project(query: { id: $id }) {
            id
            name
            description
            time {
                id
                amount
                description
            }
        }
    }
`

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $description: String) {
        createProject(input: { name: $name, description: $description }) {
            name
            description
            id
        }
    }
`

export default {
    GET_PROJECTS,
    GET_PROJECT,
    ADD_PROJECT,
}

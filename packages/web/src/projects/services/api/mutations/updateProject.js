import { gql } from '@apollo/client'

const UPDATE_PROJECT = gql`
    mutation UpdateProject($id: ID!, $name: String!, $description: String) {
        updateProject(
            input: { id: $id, name: $name, description: $description }
        ) {
            name
            description
            id
        }
    }
`

export default {
    UPDATE_PROJECT,
}

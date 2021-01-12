import { gql } from '@apollo/client'

const ADD_TIME = gql`
    mutation AddTime($project: ID!, $amount: Int!, $description: String!) {
        createTime(
            input: {
                project: $project
                amount: $amount
                description: $description
            }
        ) {
            id
            amount
            description
            project {
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
    }
`

export default {
    ADD_TIME,
}

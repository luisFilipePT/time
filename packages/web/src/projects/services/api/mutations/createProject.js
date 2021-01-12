import { gql } from '@apollo/client'

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $description: String) {
        createProject(input: { name: $name, description: $description }) {
            name
            description
            id
        }
    }
`

const updateCache = {
    update(cache, { data: { createProject } }) {
        cache.modify({
            fields: {
                projects(existingProjects = []) {
                    const newProjectRef = cache.writeFragment({
                        data: createProject,
                        fragment: gql`
                            fragment NewProject on Project {
                                id
                                name
                                description
                            }
                        `,
                    })
                    return [...existingProjects, newProjectRef]
                },
            },
        })
    },
}

export default {
    ADD_PROJECT,
    updateCache,
}

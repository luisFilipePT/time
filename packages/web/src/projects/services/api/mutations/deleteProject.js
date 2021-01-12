import { gql } from '@apollo/client'

const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(input: { id: $id }) {
            id
        }
    }
`

const updateCache = {
    update(cache, { data: { deleteProject } }) {
        cache.modify({
            fields: {
                projects(existingProjects = []) {
                    return [
                        ...existingProjects.filter(
                            ({ __ref }) =>
                                __ref !==
                                `${deleteProject.__typename}:${deleteProject.id}`
                        ),
                    ]
                },
            },
        })
    },
}

export default {
    DELETE_PROJECT,
    updateCache,
}

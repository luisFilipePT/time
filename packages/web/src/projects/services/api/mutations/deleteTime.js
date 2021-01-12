import { gql } from '@apollo/client'

const DELETE_TIME = gql`
    mutation DeleteTime($id: ID!) {
        deleteTime(input: { id: $id }) {
            id
        }
    }
`

const updateCache = {
    update(cache, { data: { deleteTime } }) {
        cache.modify({
            id: cache.identify(deleteTime),
            fields(_, { DELETE }) {
                return DELETE
            },
        })
    },
}

export default {
    DELETE_TIME,
    updateCache,
}

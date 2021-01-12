import React from 'react'
import { useMutation } from '@apollo/client'

import DELETE_TIME_SERVICE from '../services/api/mutations/deleteTime'

const DeleteTimeModal = ({ data, closeModal, id }) => {
    const [deleteTime] = useMutation(
        DELETE_TIME_SERVICE.DELETE_TIME,
        DELETE_TIME_SERVICE.updateCache
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        await deleteTime({ variables: data })
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} id={id}>
            <h2>Are you sure you want to delete this project?</h2>
        </form>
    )
}

export default DeleteTimeModal

import React from 'react'
import { useMutation } from '@apollo/client'

import DELETE_PROJECT_SERVICE from '../services/api/mutations/deleteProject'

const EditProjectModal = ({ data, closeModal, id }) => {
    const [deleteProject] = useMutation(
        DELETE_PROJECT_SERVICE.DELETE_PROJECT,
        DELETE_PROJECT_SERVICE.updateCache
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        await deleteProject({ variables: data })
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} id={id}>
            <h2>Are you sure you want to delete this project?</h2>
        </form>
    )
}

export default EditProjectModal

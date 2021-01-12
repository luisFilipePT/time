import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import CREATE_PROJECT_SERVICE from '../services/api/mutations/createProject'

import {
    FormGroup,
    Input,
    Label,
    Message,
    Textarea,
} from '../../shared/components/Forms'
import ErrorMessage from '../../shared/components/ErrorMessage'

const AddProjectModal = ({ closeModal, id }) => {
    const [formData, setFormData] = useState({})
    const [
        addProject,
        { loading: mutationLoading, error: mutationError },
    ] = useMutation(
        CREATE_PROJECT_SERVICE.ADD_PROJECT,
        CREATE_PROJECT_SERVICE.updateCache
    )

    const onDataChange = (fieldName) => (e) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        })
    }

    const onNameChange = onDataChange('name')

    const onDescriptionChange = onDataChange('description')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProject({ variables: formData })
        !mutationError && closeModal()
    }

    return (
        <form onSubmit={handleSubmit} id={id}>
            {mutationLoading && <p>Loading...</p>}
            <FormGroup>
                <Label htmlFor="label">Project Name *</Label>
                <Input
                    required
                    maxLength="24"
                    onChange={onNameChange}
                    value={formData?.name || ''}
                />
            </FormGroup>
            <ErrorMessage field="name" mutationError={mutationError} />
            <FormGroup>
                <Label>Description</Label>
                <Textarea
                    rows={3}
                    maxLength="256"
                    onChange={onDescriptionChange}
                    value={formData?.description || ''}
                />
            </FormGroup>
        </form>
    )
}

export default AddProjectModal

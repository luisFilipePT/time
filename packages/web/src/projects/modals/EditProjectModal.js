import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import UPDATE_PROJECT_SERVICE from '../services/api/mutations/updateProject'

import {
    FormGroup,
    Input,
    Label,
    Message,
    Textarea,
} from '../../shared/components/Forms'

const EditProjectModal = ({ data, closeModal, id }) => {
    const [formData, setFormData] = useState(data)
    const [addProject] = useMutation(UPDATE_PROJECT_SERVICE.UPDATE_PROJECT)

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
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} id={id}>
            <FormGroup>
                <Label htmlFor="name">Project Name *</Label>
                <Input
                    required
                    maxLength="24"
                    onChange={onNameChange}
                    value={formData?.name || ''}
                />
                <Message>This is the validation message</Message>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Textarea
                    rows={3}
                    maxLength="256"
                    onChange={onDescriptionChange}
                    value={formData?.description || ''}
                />
                <Message>This is the validation message</Message>
            </FormGroup>
        </form>
    )
}

export default EditProjectModal

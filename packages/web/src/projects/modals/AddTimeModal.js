import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import CREATE_TIME_SERVICE from '../services/api/mutations/createTime'

import {
    FormGroup,
    Input,
    Label,
    Message,
    Textarea,
} from '../../shared/components/Forms'

const AddTimeModal = ({ data, closeModal, id }) => {
    const [formData, setFormData] = useState(data)
    const [addTime] = useMutation(CREATE_TIME_SERVICE.ADD_TIME)

    const onDataChange = (fieldName) => (e) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        })
    }

    const onAmountChange = onDataChange('amount')

    const onDescriptionChange = onDataChange('description')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addTime({
            variables: { ...formData, amount: parseInt(formData.amount) },
        })
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} id={id}>
            <FormGroup>
                <Label htmlFor="label">Hours *</Label>
                <Input
                    required
                    type="number"
                    placeholder="Time in Hours"
                    onChange={onAmountChange}
                    value={formData?.amount || ''}
                />
                <Message>This is the validation message</Message>
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Textarea
                    required
                    rows={3}
                    maxLength="256"
                    placeholder="Time spent on..."
                    onChange={onDescriptionChange}
                    value={formData?.description || ''}
                />
                <Message>This is the validation message</Message>
            </FormGroup>
        </form>
    )
}

export default AddTimeModal

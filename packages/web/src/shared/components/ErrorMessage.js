import React from 'react'
import { Message } from './Forms'

const ERROR_MAPPER = (field) => ({
    UNIQUE: `${field} must be unique! This ${field} already exists`,
})
const ErrorMessage = ({ field, mutationError }) => {
    if (!mutationError) return null

    const fieldError =
        mutationError?.graphQLErrors[0]?.extensions?.invalidArgs[0][field]
    console.log('fieldError', fieldError)

    return <Message>{ERROR_MAPPER(field)[fieldError]}</Message>
}

export default ErrorMessage

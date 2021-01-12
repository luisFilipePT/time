import styled from 'styled-components'

export const FormGroup = styled.div`
    color: #3b4252;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Label = styled.label`
    margin-bottom: 1em;
    color: #b48ead;
    display: block;
`

export const Input = styled.input`
    padding: 1em;
    color: #3b4252;
    background: #d8dee9;
    border: none;
    border-radius: 2px;
    width: 100%;
    margin-bottom: 0.5em;
`

export const Textarea = styled.textarea`
    padding: 1em;
    color: #3b4252;
    background: #d8dee9;
    border: none;
    border-radius: 2px;
    width: 100%;
    margin-bottom: 0.5em;
`

export const Message = styled.label`
    margin-bottom: 0.5em;
    color: #bf616a;
    display: block;

    :first-letter {
        text-transform: capitalize;
    }
`

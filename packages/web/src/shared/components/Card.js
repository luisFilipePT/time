import styled from 'styled-components'

const Wrapper = styled.div`
    border-radius: 3px;
    background: #242933;
    box-shadow: -6px -6px 3px #20252e, 6px 6px 3px #282d38;
    padding: 10px;
    margin-bottom: 20px;
`

const Card = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default Card

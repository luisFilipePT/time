import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    color: #e5e9f0;
    text-shadow: 3px 3px 2px #4c566a;
    letter-spacing: 2px;
    margin-bottom: 30px;
`

const PageTitle = ({ title }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
        </Wrapper>
    )
}

export default PageTitle

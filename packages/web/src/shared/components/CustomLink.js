import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: #81a1c1;
    text-decoration: none;

    :hover {
        color: #88c0d0;
    }
`

const CustomLink = ({ to, children }) => {
    return <StyledLink to={to}>{children}</StyledLink>
}

export default CustomLink

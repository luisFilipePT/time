import styled from 'styled-components'

import divider from '../footerDivider.svg'

const Wrapper = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 5px;
    flex-shrink: 0;
    color: #81a1c1;
    background-image: url('${divider}');
    background-repeat: no-repeat;
    background-size: cover;
    height: 120px;
    font-size: 12px;
`

const Footer = () => {
    return <Wrapper>Made with ❤️ &nbsp;by Luis Filipe</Wrapper>
}

export default Footer

import styled from 'styled-components'

import logo from '../logo.svg'

const Header = styled.header`
    padding: 10px;
    background-color: #2e3440;
    border-bottom: 1px solid #b48ead;
`

const Nav = () => {
    return (
        <Header>
            <img src={logo} className="App-logo" alt="logo" />
        </Header>
    )
}

export default Nav

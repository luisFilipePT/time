import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'

const Content = styled.div`
    flex: 1 0 auto;
    padding: 20px;
`

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}

export default Layout

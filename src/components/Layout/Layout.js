import React from 'react'
import {Container} from 'react-bootstrap'
import './Layout.scss'

const Layout = (props) => {
    return (
        <Container fluid>
            <header className="header">{props.headerTitle}</header>
            <div className>{props.children}</div>            
        </Container>
    )                        
}

export default Layout;
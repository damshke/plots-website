import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div `
    a, .navbar-nav {
        color: #adb1b8;
        text-decoration: none;
        &:hover {
            color: white;
        }
    }
    .nav-link {
        &:hover {
            color: white;
            text-decoration: underline
        }
    }
`

export function Navibar() {
    return (
        <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>Сюжеты</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav class="navbar-nav me-auto mb-2 mb-lg-0 sans-serif">
                        <Nav.Link><Link to="/news">Новости</Link></Nav.Link>
                        <Nav.Link><Link to="/music">Музыка</Link></Nav.Link>
                        <Nav.Link><Link to="/photos">Фото</Link></Nav.Link>
                        <Nav.Link><Link to="/clips">Клипы</Link></Nav.Link>
                        <Nav.Link><Link to="/poster">Афиша</Link></Nav.Link>
                        <Nav.Link><Link to="/contacts">Контакты</Link></Nav.Link>
                    </Nav>
                </NavbarCollapse>
                </Container>
            </Navbar>
        </Styles>
        </>
    )
}
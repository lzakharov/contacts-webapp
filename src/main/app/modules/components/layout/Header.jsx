import React from 'react';import { Nav, NavItem, Navbar } from 'react-bootstrap';const Header = (props) => (    <Navbar className="navbar-default navbar-static-top">        <Navbar.Header>            <Navbar.Brand>                { props.brand }            </Navbar.Brand>        </Navbar.Header>        <Nav pullRight>            <NavItem>About</NavItem>        </Nav>    </Navbar>);export default Header;
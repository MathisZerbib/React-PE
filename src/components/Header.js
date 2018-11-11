import React from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

export class Header extends React.Component{
render(){
    return(
    <Navbar inverse collapseOnSelect>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossOrigin="anonymous" />
        
        <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/map">
                    Map
                </NavItem>
                <NavDropdown eventKey={3}  title="Categories" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href ="/blog">Top 100</MenuItem>
                    <MenuItem eventKey={3.2}href ="/blog">Most viewed</MenuItem>
                    <MenuItem eventKey={3.3}href ="/blog">Most liked</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Proposez nous une catégorie</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Inscription
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Connexion
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>


);

    }
}

export default Header;
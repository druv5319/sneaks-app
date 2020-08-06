import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import React from 'react';
import logo from '../images/Sneaks_Logo.png'

import {Link} from 'react-router-dom';

const NavBar = ()=> {
  return (
      
<Navbar expand = "lg" bg="light" class='navbar' >
    
  <Navbar.Brand >        
        <a href="/">
          <img src={logo} style={{width:130, marginTop: 5, marginLeft:10}} />
        </a>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{marginRight:10, marginTop: 8, marginBottom: 8}}>
      <Nav.Link href="/"style={{marginRight:10}}>Home </Nav.Link>
      <Nav.Link href="http://github.com/druv5319/Sneaks-API">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>

  );
}

export default NavBar;
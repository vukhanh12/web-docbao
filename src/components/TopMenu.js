import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './TopMenu.css'

import Genk from './Genk.js'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const Index = () => <h2>Home</h2>

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand href="/">Demo Web</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
         
        <Nav className="mr-auto" navbar>
            <NavItem className='setle'>
              <Link to='/'>Genk</Link>
            </NavItem>
            <NavItem className='setle'>
              <Link to='/mobile'>Mobile</Link>
            </NavItem>

            <NavItem className='setle'>
              <Link to='/tin-ict' >Tin-ICT</Link>
            </NavItem>

            <NavItem className='setle'>
              <Link to='/internet'>Internet</Link>
            </NavItem>

          </Nav>

          <div>
            <Link to='/login'>Login  </Link>
            <Link to='/signup'>Sign Up</Link>
          </div>

          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
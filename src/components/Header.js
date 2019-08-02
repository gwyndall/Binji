"use strict" 
import React from "react";
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap/Navbar';


// function Header(props) {
//   return (
//     <div>
     
//     </div>
//   );
// }

class Navbar extends React.Component{
  render(){
    return(
<Navbar inverse fixedTop collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Binji</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/tv">TV</Nav.Link>
      <Nav.Link href="/film">Film</Nav.Link>
      <Nav.Link href="/Podcasts">Podcasts</Nav.Link>
    </Nav>
    <Nav pullRight>
      <Nav.Link eventKey={1} href="/myprofile">My Profile</Nav.Link>
      <Nav.Link eventKey={2} href="/mylist">My List
      <Badge className="badge">1</Badge></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default Navbar;
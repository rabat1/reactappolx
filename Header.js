import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './index.css';


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      sss:this.props.handleLogout
    }
  }
    render() {
      return (
          <div>
              <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" style={{marginLeft:"40px"}}><b>OL<sup>X</sup></b></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{width:"200px"}} >
        <NavDropdown.Item href="#action/3.1">Sindh</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Punjab</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Balochistan</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">KPK</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div className="container" >
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."  />
          <a href="#" className="search_icon"><i className="fa fa-search "></i></a>
  
      </div>
      <button onClick={this.state.sss} style={{width:'100px', borderRadius:"30px ", backgroundColor:"white", color:"black"}}>Logout</button>

      
    </div>
   
  </Navbar.Collapse>
</Navbar>
  
    </div>
        );
    }
  }
  export default Header;
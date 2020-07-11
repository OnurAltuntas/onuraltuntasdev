import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "../root/App.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Row, Col,
  Container,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

import alertify from "alertifyjs"


const Navi = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const  handleClick = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  //using custom CSS
 
 alertify.notify('copied email address', 'custom', 2, function(){console.log('dismissed');});
    
}

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavLink ><Link to="/" className="navlinks">OnurAltuntasDev</Link></NavLink>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse className='collapse' isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink ><a className="navlinks" href="https://tr.reactjs.org/">React.js</a></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><a className="navlinks" href="https://github.com/OnurAltuntas">Github</a></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/adminpanel" >Admin Panel</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/aboutme" >About me</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/projects" >Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/resume" >Resume</Link></NavLink>
            </NavItem>
            <input style={{opacity:'0.0'}} type="text" value="onuraltuntas50@gmail.com" id="myInput" readonly></input>                    
           
          </Nav>
          <div>
           
              <Row>
              <Col>
              
              <i id="mail" title="click to copy my email" onClick={handleClick} style={{ fontSize: "30px",color:'#D8D1D1'}} className="fa fa-envelope" aria-hidden="true" />
              </Col>
                <Col><a href="https://tr.linkedin.com/in/onur-altunta%C5%9F-2103a319a" rel="noopener noreferrer" target="_blank">
                  <img title="my linkedin address " style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a href="https://twitter.com/beyhudedolanik" rel="noopener noreferrer" target="_blank">
                  <img title="my twitter address " style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a href="https://www.youtube.com/channel/UCalJQ45NyMzMvPqK5n0xYEA/" rel="noopener noreferrer" target="_blank">
                  <img title="my youtube address " style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a title="my github address " href="https://github.com/OnurAltuntas" rel="noopener noreferrer" target="_blank">
                  <img style={{ height: "2rem" }} src="https://image.flaticon.com/icons/png/512/733/733553.png" alt="Linkedin"></img>
                </a></Col>
               
               </Row>
               

          </div>
        </Collapse>
      </Navbar>
      
      </div>
  );
}

export default Navi;
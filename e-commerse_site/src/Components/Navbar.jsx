import React ,{useContext} from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { NavLink} from "react-router-dom";
import { themecontxt } from '../Context/creatContext';
import {connect} from 'react-redux'
import '../Style/navbar.css'
import { useState } from 'react';
import {  Link } from "react-router-dom";
function NavbarComponent(props) {
  let value=useContext(themecontxt)
  let {counter}=props

  console.log(props);
  return (
    <>
    <Navbar expand="lg"  className='justify-content-between position-sticky' style={value.theme}>
      <Container>
      
    <Navbar.Brand href="#home" className='logo' style={value.colorTheme}>EMA <span>JOHN</span>
     </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto link" >
        <NavLink to="/home" style={value.colorTheme}>Home</NavLink>
        <NavLink to="/products" style={value.colorTheme}>Our Products</NavLink>
        <NavLink to="/about" style={value.colorTheme}>About Us</NavLink>
        <NavLink to="/login" style={value.colorTheme}>Contact us</NavLink>
       
     </Nav>
    </Navbar.Collapse>
<div className='sales'>    <i className="fa fa-shopping-cart" onClick={()=>{console.log("mawada")}} style={{color:"rgb(0, 229, 255)",fontSize:"20px"}}></i>
{/* <span><Link to="/sales"  className='btn btn-danger'> show detailes</Link></span> */}
<p>{counter}</p>
</div>
    {/* <button className='btn btn-light' onClick={value.changeTheme}>change</button> */}
  </Container>
</Navbar>
    
    
    </>
  )
}

let mapStateToProps=(state)=>{
  // console.log(state.counter.count);
return{
  counter:state.counter.count
}
}
// let mapDispatchToProps=(dispatch)=>{
   
//   return{
//       increase:()=>{dispatch({type:"INCREASE"})},
//       // decrease:()=>{dispatch({type:"DECREASE"})}
//   }
// }
export default connect(mapStateToProps)(NavbarComponent);
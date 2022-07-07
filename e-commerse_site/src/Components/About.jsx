import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import NavbarComponent from './Navbar';
import '../Style/about.css'
import { useContext } from 'react';
import { themecontxt } from '../Context/creatContext';
import Owldemo from './Test'
function About() {
  let value=useContext(themecontxt)
  return (
    <div>
       <NavbarComponent></NavbarComponent>
       <div style={value.theme}>
    <Container>
      <h1 className='headColor text-center p-5'>ABOUT US</h1>
    <Row>
    <Col sm={12} md={6}>
    <div className='aboutImage'>  <img src={require('../Images/qwq.avif')} alt="" /></div>
    </Col>
    <Col sm={12} md={6}>
  <h4 className='subtitle'>Who we are & What we do?</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
  <div className='icon'><i class="fa fa-facebook" aria-hidden="true"></i>
  <i class="fa fa-linkedin" aria-hidden="true"></i>
  <i class="fa fa-twitter" aria-hidden="true"></i>
  <i class="fa fa-behance" aria-hidden="true"></i>
  </div>
    </Col>
  </Row>


    </Container>
    </div>
  
   </div>
  )
}

export default About
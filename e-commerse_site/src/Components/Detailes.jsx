import React from 'react'
import { useLocation } from 'react-router-dom'
import {Container,Row ,Col} from 'react-bootstrap'
function Detailes() {
    const location = useLocation()
    const { data } = location.state
    // console.log(data);
  return (
    <div>
  <Container>
      <h1 className='subtitle text-center p-5'>Product Detailes</h1>
    <Row>
    <Col sm={12} md={6}>
    <div >  <img src={data.image} alt="" style={{width:"300px " ,margin:"auto",display:'block'}}/></div>
    </Col>
    <Col sm={12} md={6}  className='py-5'>
  <h4 className='subtitle mt-5'>{data.title}</h4>
  <p>Category: <span className='subtitle'>{data.category}</span></p>
  <p className='text-danger'>${data.price}</p>
  <p>
 {data.description}
  
  </p>
    </Col>
  </Row>


    </Container>




    </div>
  )
}

export default Detailes
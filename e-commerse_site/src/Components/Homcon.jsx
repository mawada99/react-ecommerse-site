import React from 'react'
import { useContext } from 'react';
import {Container,Card} from 'react-bootstrap'
import { themecontxt } from '../Context/creatContext';
function Homcon() {
  let value=useContext(themecontxt)
    return (
      <div style={value.theme}>
      <Container bgColor='light' className='text-center text-lg-start text-muted'>
       <section>
      <br />
      <Card>
        <Card.Body >
          <Card.Text>
            <p className='bg-info text-dark'>Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Accusantium fugit recusandae necessitatibus a pariatur
                 maxime minus quia consequuntur illum 
                 dolore! Modi assumenda eveniet quod laborum accusantium sit debitis ducimus, perferendis sed veniam a hic, dolor temporibus. Nostrum sapiente voluptates quo esse. Aliquid ex autem, ducimus recusandae
                 fugiat libero. Repellendus, eaque?
                 consequuntur illum 
                 dolore! Modi assumenda eveniet quod laborum accusantium sit debitis ducimus, perferendis sed veniam a hic, dolor temporibus. Nostrum sapiente voluptates quo esse. Aliquid ex autem, ducimus recusandae
                 fugiat libero. Repellendus, eaque?
                 </p>
                
                
          </Card.Text>
        </Card.Body>
       
      </Card>
       </section>
       <section>
      <br />
      <Card>
        <Card.Body >
          <Card.Text>
                
                 <p className=' my-2 bg-warning text-white'>Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Accusantium fugit recusandae necessitatibus a pariatur
                 maxime minus quia consequuntur illum 
                 dolore! Modi assumenda eveniet quod laborum accusantium sit debitis ducimus, perferendis sed veniam a hic, dolor temporibus. Nostrum sapiente voluptates quo esse. Aliquid ex autem, ducimus recusandae
                 fugiat libero. Repellendus, eaque?
                 consequuntur illum 
                 dolore! Modi assumenda eveniet quod laborum accusantium sit debitis ducimus, perferendis sed veniam a hic, dolor temporibus. Nostrum sapiente voluptates quo esse. Aliquid ex autem, ducimus recusandae
                 fugiat libero. Repellendus, eaque?
                 </p>
          </Card.Text>
        </Card.Body>
       
      </Card>
       </section>
  
      </Container>
      </div>
     );
}

export default Homcon
import React, {useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import '../Style/form.css'
function FormComponent() {
    let navigate = useNavigate();
let [userName,setUserName]=useState("")
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")
let [errors,setErrors]=useState({name:null,email:null,password:null})

let nameValidation=(e)=>{
 if(!(e.match(/^[a-z ]{3,15}$/i))){
//  error.name="Name must be only caracters"
   setErrors({name:"Name must be only caracters",email:null,password:null})
   
    }
    else{
        setErrors({name:null,email:null,password:null})
      
    }
}
let emailValidation=(e)=>{

    if(!(e.match(/^([a-zA-Z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/))){
       // error.name="Name must be only caracters"
       setErrors({name:null,email:"Please Enter valid email",password:null})
   }
   else{
       setErrors({name:null,email:null,password:null})
   }
}
let passwordValidation=(e)=>{

    if(!(e.match(/^[a-zA-Z0-9]{6}$/))){
       // error.name="Name must be only caracters"
       setErrors({name:null,email:null,password:"Password must be contain small letter ,capital leeter and length must be greater than 6 "})
   }
   else{
       setErrors({name:null,email:null,password:null})
   }
}
let validSubmit=(e)=>{
e.preventDefault();

if(!(userName.match(/^[a-z ]{3,15}$/i))||
!(email.match(/^([a-zA-Z0-9_\.]{3,15})@([a-z]{4,7})\.([a-z]{2,5})/))||
!(password.match(/^[a-zA-Z0-9]{6}$/)))
{console.log("error");return false}
  else{console.log("succss"); 
  navigate("/home");
  return true}
}
  return (
 <div className='myform'>

    <Container >
         <Form onSubmit={validSubmit} className="text-center">
<Form.Group className="mb-3 text-center" controlId="formBasicEmail">
    <Form.Label className='fs-6 text-danger'>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" onChange={(e)=>{
nameValidation(e.target.value)
setUserName(e.target.value)
    }} />
    <Form.Text className="text-muted">
    {errors.name}
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fs-6 text-danger'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" onChange={(e)=>{
emailValidation(e.target.value)
setEmail(e.target.value)

    }} />
    <Form.Text className="text-muted">
  {errors.email}
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='fs-6 text-danger'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{
passwordValidation(e.target.value)
setPassword(e.target.value)
    }}/>
    <Form.Text className="text-muted">
  {errors.password}
    </Form.Text>
  </Form.Group>
 
  <Button variant="danger" type="submit" className='mx-auto d-block px-3'>
    LogIn
  </Button>
        </Form>
   </Container>
</div>

    
  )
}

export default FormComponent
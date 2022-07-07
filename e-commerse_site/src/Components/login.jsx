import React, { useState }  from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import NavbarComponent from './Navbar';
import '../Style/login.css'
import { useContext } from 'react';
import { themecontxt } from '../Context/creatContext';
import Owldemo from './Test'
function Login() {
  let value=useContext(themecontxt)
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  // let [submitt, setsubmit] = useState("");
  let errors = {};
  let [error, setEror] = useState({ userName: null, password: null, email: null, phone: null});
  let submitHandler = (e) => {
    e.preventDefault();

    if (Validate()) {
      let values = { userName, password, email, phone }
    }


  }
  let regularrstr = /^[a-zA-Z ]{3,15}$/;
  let regularrage = /^[0-9]{11}$/;
  let regularmail = /^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/
  let Validate = () => {
   

    if (!(userName.match(regularrstr))) {
      errors.userName = "username must be characters > 3";
    }
    if (!(email.match(regularmail))) {
      errors.email = "invalid email format";
    }
    if (password.length != 8) {
      errors.password = "password length must be 8";
    }
    if (!(phone.match(regularrage))) {
      errors.phone = "phone must be 11 numbers";
    }
   
    setEror(errors);

    return Object.keys(errors).length != 0 ? false : true
  }
  // let checkvalidation=()=>{
  //   if((userName.match(regularrstr))&& (email.match(regularmail)) && (password.length == 8) &&(phone.match(regularrage))){
  //     return true;
      
  //   }
  //   else{return false}
  // }
  let getUserNameValue = (e) => {
    setUserName(e.target.value)
  }
  let getUserpasswordValue = (e) => {
    setPassword(e.target.value)
  }
  let getUserEmailValue = (e) => {
    setEmail(e.target.value)
  }
  let getUserPhoneValue = (e) => {
    setPhone(e.target.value)
  }
  return (
    <div>
    <NavbarComponent></NavbarComponent>
    <div style={value.theme}>
 <Container>
 <div className="cont">
      {/* <div className="cont2"> */}



      <Form onSubmit={submitHandler}>
        <p className="mb-4 ppp">CREATE YOUR ACCOUNT</p>

        <Form.Group className="inputt" controlId="formBasicName">
          <Form.Label className="labl2">User Name</Form.Label>
          <Form.Control type="text" placeholder="name"
            value={userName}
            onChange={(event) => getUserNameValue(event)}
          />
          <Form.Text className="text-danger">{error.userName}</Form.Text>
        </Form.Group>

        <Form.Group className="inputt">
          <Form.Label className="labl">Email address</Form.Label>
          <Form.Control type="email" className="inputt" placeholder="mail"
            value={email}
            onChange={(event) => getUserEmailValue(event)}
          />
          <Form.Text className="text-danger">{error.email}</Form.Text>
        </Form.Group>

        <Form.Group className="inputt" controlId="formBasicPassword">
          <Form.Label className="labl2">Password</Form.Label>
          <Form.Control type="password" className="inputt" placeholder="Password"
            value={password}
            onChange={(event) => getUserpasswordValue(event)}
          />
          <Form.Text className="text-danger">{error.password}</Form.Text>
        </Form.Group>
        <Form.Group className="inputt" controlId="formBasicPhone">
          <Form.Label className="labl">Phone Number</Form.Label>
          <Form.Control type="text" className="inputt" placeholder="Phone"
            value={phone}
            onChange={(event) => getUserPhoneValue(event)}
          />
          <Form.Text className="text-danger">{error.phone}</Form.Text>
         
        </Form.Group>
        
        <label className="labl3" >
          gender
        </label><br/>

        <input type="radio" value="male" name="rad1" required></input><label className="ll" >male</label>
        <input type="radio" value="female" name="rad1" required></input><label className="ll">female</label><br/><br/>
        <Button className="btn"  type="submit">
          Sign Up
        </Button>
       
      
      </Form>

      <img src={require("../Images/form.jpg")} className="imgg" />

    </div>
 </Container>
 </div>

</div>




  )
}

export default Login
import React, { useContext } from "react";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import Homcon from "./Homcon";
import { Container, Carousel } from "react-bootstrap";
import { themecontxt } from "../Context/creatContext";
import "../Style/home.css";
function Home() {
  let value = useContext(themecontxt);
  console.log(value);
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="parant ">
        {/* <Container> */}
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require("../Images/p1234.jpg")}
              alt="First slide"
            />
       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Images/13.jpg")}
              alt="Second slide"
            />

      
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Images/p1298.webp")}
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Images/15.jpg")}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>

        {/* </Container> */}
        <Homcon></Homcon>
        <Footer></Footer>
      
      </div>
    </>
  );
}

export default Home;

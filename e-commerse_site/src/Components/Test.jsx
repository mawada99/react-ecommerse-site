import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import {Rating} from 'react-simple-star-rating'
import "../Style/test.css"
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
//   smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};

function Owldemo () {
let [product,setProduct]=useState([])
const [rating, setRating] = useState(0) 
useEffect(()=>{
    let products=axios.get("https://fakestoreapi.com/products").then((response)=>{
        // console.log(response.data+"kihugydyf");
        // console.log("jujvyctrstgvfgtrsrghvghfrs")

        setProduct(response.data)
          return response.data
      
      }).catch(e=>{
          console.log(e);
      })
},[])

const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
   console.log(product);
   return (  
    <div>  
  <div class='container-fluid' >      
   <div className="row title" style={{marginBottom: "20px"}} >      
   <div class="col-sm-12 btn btn-info">      
   Owl Carousel In React Application  

   </div> 
   </div>  
</div>  
<div class='container-fluid' >            
<OwlCarousel items={3}  
  className="owl-theme"  
//   {...options}
  loop  
  nav  
  margin={8} 
  >  
 {product.map((item,index)=>{
    return <div class="item">
        <p style={{color:"rgb(0, 229, 255)",fontSize:"20px",margin:"20px"}}>fgyhdyhjkfdytyhjkhgfdsxfghj</p>
      <img src={item.category.image} className="img"/>
   <p style={{color:"rgb(0, 229, 255)",fontSize:"20px",margin:"20px"}}>fgyhdyhjkfdytyhjkhgfdsxfghj</p>
    </div> 
    
    
    
  })} 
</OwlCarousel>  
</div>  

</div>  
  )  

};

export default Owldemo;
// return (
//     <div>
//       <h1>Reactjs OwlCarousel Working</h1>
//     <OwlCarousel className="slider-items owl-carousel" {...options}>
    
//     {product.map((item,index)=>{
//     return <div class="item"><img src={item.image}/></div> 
    
    
//     })}
         
        
    
    
//                       </OwlCarousel>
//     </div>
//     )

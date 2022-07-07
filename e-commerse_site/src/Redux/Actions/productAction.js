import axios from 'axios'

export default function getProduct(){
let products=axios.get("https://fakestoreapi.com/products").then((response)=>{
     console.log(response.data);
    return response.data

}).catch(e=>{
    console.log(e);
})
return{
    type:"GET-PRODUCT",
    payload:products
}


}
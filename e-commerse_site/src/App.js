
import './App.css';
import NavbarComponent from './Components/Navbar';
import FormComponent from './Components/Form';
import ContextProvider from './Context/ContextProvider'
import Footer from './Components/Footer';
import Login from "./Components/login"
import Home from './Components/Home';
import Error from './Components/Error';
import { Routes, Route} from "react-router-dom";
import Products from './Components/Products';
import About from './Components/About';
import Detailes from './Components/Detailes';
import Sales from './Components/Sales';
import Test from "./Components/Test"
function App() {
 
  return (
  <>
  {/* <NavbarComponent></NavbarComponent> */}

<ContextProvider>
<Routes>
   <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detailes" element={<Detailes/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="*" element={<Error/>}/>

      </Routes>
      {/* <Detailes></Detailes> */}
      {/* <Test></Test> */}
    
    {/* <Footer></Footer> */}
  {/* {validSubmit()&&<p>aya</p>} */}
  </ContextProvider>
    </>
  );
}

export default App;

import React ,{ useState,} from 'react'
import {themecontxt} from './creatContext'
function ContextProvider(props) {
  let [sales,setSales]=useState([])

    let [theme,setTheme]=useState({background:"white"})
    
    let [colorTheme,setColorTheme]=useState({color:"black"})
  let changeTheme=()=>{
    if(theme.background=="white"){
        setTheme({background:"black"})
        setColorTheme({color:"white"})
    }else{
        setTheme({background:"white"})
        setColorTheme({color:"black"})
    }
  }
  
  let addSales=(product)=>{
    let newArray = sales.push(product)
setSales(newArray);
  console.log(sales);
  }
  return (
    <themecontxt.Provider value={{changeTheme,theme,colorTheme,sales,addSales}}>

{props.children}

    </themecontxt.Provider>
  )
}

export default  ContextProvider
import React from 'react'
import { useContext } from 'react'
import { themecontxt } from '../Context/creatContext'

function Sales() {
    let value=useContext(themecontxt)
    console.log(value.sales[0]);
  return (
    <div>
{/* <p>{value.sales[0].item.id}</p> */}

    </div>
  )
}

export default Sales
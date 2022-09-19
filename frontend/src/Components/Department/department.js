import React from 'react'
import { Link } from 'react-router-dom'

function Department(props) {
  return (
    <>
        <h4>Department</h4>
        <ul
        >
          {props.categories.map((item,index) => (
            <li key={index}>
              <Link to="/shop" onClick={() =>{
               // props.setCat({item})
                //console.log("clicked")
              }}>{item.category}</Link>
            </li>
          ))}

        </ul>
    </>
  )
}

export default Department
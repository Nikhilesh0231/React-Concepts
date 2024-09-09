import React , {useEffect} from 'react'
import './Navbar.css'

const Navbar = ({color}) => {
    useEffect(()=>{
        alert("Color was changed")
    }),[color]
  return (
    <div>
      I am Navbar of {color} color hehehehe...
    </div>
  )
}

export default Navbar

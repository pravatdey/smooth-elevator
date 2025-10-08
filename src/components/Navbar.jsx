import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="inner">
        <div className="brand">
          <img src={Logo} alt="Smooth Elevator" />
          <div>
            <div style={{fontWeight:700}}>Smooth Elevator</div>
            <div className="tag">Best Lift Company in Bhubaneswar</div>
          </div>
        </div>

        <div className="nav-links" style={{display: open ? 'flex' : undefined}}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <button className="hamburger" aria-label="Toggle menu" onClick={()=>setOpen(v=>!v)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

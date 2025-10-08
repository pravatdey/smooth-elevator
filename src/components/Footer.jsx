import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div style={{fontWeight:700}}>© {new Date().getFullYear()} Smooth Elevator</div>
      <div style={{marginTop:6,fontSize:13,color:'#94a3b8'}}>Best Lift Company in Bhubaneswar · info@smooth-elevator.example</div>
      <div style={{marginTop:10}}>
        <a href="#" style={{margin:'0 8px',color:'#7c3aed'}}>Twitter</a>
        <a href="#" style={{margin:'0 8px',color:'#0b5fff'}}>LinkedIn</a>
      </div>
    </footer>
  )
}

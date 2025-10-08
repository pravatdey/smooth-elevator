import React from 'react'
import { Link } from 'react-router-dom'
import Prod1 from '../assets/prod1.svg'
import Prod2 from '../assets/prod2.svg'
import Prod3 from '../assets/prod3.svg'

const PRODUCTS = [
  {id: 'p1', name: 'HomeLift S200', price: '₹1,20,000', desc: 'Compact home lift for up to 4 stops, whisper-quiet traction drive.' , img: Prod1},
  {id: 'p2', name: 'ComLift X500', price: '₹4,80,000', desc: 'Commercial lift with 1000kg capacity, energy-efficient VVVF drive.' , img: Prod2},
  {id: 'p3', name: 'EcoModern R1', price: '₹2,50,000', desc: 'Modernization kit to upgrade controllers and cab interiors.' , img: Prod3},
]

export default function Products(){
  return (
    <div>
      <h1>Products</h1>
      <div style={{marginTop:12}} className="grid">
        {PRODUCTS.map(p=> (
          <Link to={`/product/${p.id}`} key={p.id} style={{textDecoration:'none',color:'inherit'}}>
            <div className="card">
              <div style={{display:'flex',gap:12,alignItems:'center'}}>
                <div style={{width:86}}><img src={p.img} alt={p.name} style={{width:'100%'}}/></div>
                <div>
                  <div style={{fontWeight:800,fontSize:18}}>{p.name}</div>
                  <div style={{color:'#6b7280',marginTop:8}}>{p.desc}</div>
                  <div style={{marginTop:10,fontWeight:700}}>{p.price}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

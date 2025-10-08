import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Prod1 from '../assets/prod1.svg'
import Prod2 from '../assets/prod2.svg'
import Prod3 from '../assets/prod3.svg'

const PRODUCTS = {
  p1: {id:'p1', name: 'HomeLift S200', price: '₹1,20,000', capacity: '320 kg', speed: '0.6 m/s', desc: 'A compact residential lift ideal for villas and apartments. Smooth start/stop and low maintenance.' , img: Prod1},
  p2: {id:'p2', name: 'ComLift X500', price: '₹4,80,000', capacity: '1000 kg', speed: '1.0 m/s', desc: 'Heavy-duty commercial lift with high reliability and long MTBF. Suitable for offices, malls and hospitals.' , img: Prod2},
  p3: {id:'p3', name: 'EcoModern R1', price: '₹2,50,000', capacity: 'n/a', speed: 'n/a', desc: 'Modernization kit: replace controls, add regenerative drives and refresh the cab interior.' , img: Prod3},
}

export default function ProductDetail(){
  const {id} = useParams()
  const p = PRODUCTS[id]
  if(!p) return <div>Product not found — <Link to="/products">back to products</Link></div>
  return (
    <div>
      <div style={{display:'flex',gap:18,alignItems:'flex-start'}}>
        <div style={{width:260}}>
          <img src={p.img} alt={p.name} style={{width:'100%'}}/>
        </div>
        <div>
          <h1>{p.name}</h1>
          <div style={{fontSize:18,fontWeight:800,color:'#0b5fff'}}>{p.price}</div>
          <p style={{color:'#6b7280',maxWidth:560}}>{p.desc}</p>
          <div style={{marginTop:12}} className="card">
            <h3>Specifications</h3>
            <ul>
              <li>Capacity: {p.capacity}</li>
              <li>Speed: {p.speed}</li>
              <li>Installation time: 7-21 days (subject to site)</li>
            </ul>
          </div>
          <div style={{marginTop:14}}>
            <Link to="/contact" className="btn">Enquire Now</Link>
            <a href="#" className="btn ghost" style={{marginLeft:12}}>Download Brochure</a>
          </div>
        </div>
      </div>
    </div>
  )
}

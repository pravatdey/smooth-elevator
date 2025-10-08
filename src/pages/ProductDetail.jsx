import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PRODUCTS from '../data/products'

export default function ProductDetail(){
  const {id} = useParams()
  const p = PRODUCTS.find(x=>x.id === id)
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

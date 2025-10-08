import React from 'react'
import { Link } from 'react-router-dom'
import PRODUCTS from '../data/products'

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

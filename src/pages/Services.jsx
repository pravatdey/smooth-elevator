import React from 'react'
import Service1 from '../assets/service1.svg'
import Service2 from '../assets/service2.svg'
import Service3 from '../assets/service3.svg'

export default function Services(){
  return (
    <div>
      <h1>Services</h1>
      <div className="grid" style={{marginTop:12}}>
        <div className="card">
          <div className="service-icon"><img src={Service1} alt="residential" style={{width:36}}/></div>
          <h3>Design & Installation</h3>
          <p>End-to-end project delivery: design, supply and install.</p>
        </div>
        <div className="card">
          <div className="service-icon"><img src={Service2} alt="maintenance" style={{width:36}}/></div>
          <h3>Maintenance & Repairs</h3>
          <p>Preventive maintenance plans and fast on-site repairs.</p>
        </div>
        <div className="card">
          <div className="service-icon"><img src={Service3} alt="modernize" style={{width:36}}/></div>
          <h3>Modernization</h3>
          <p>Upgrade controls, drives and cab interiors for performance.</p>
        </div>
      </div>
    </div>
  )
}

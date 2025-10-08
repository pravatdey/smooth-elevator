import React from 'react'
import HeroSVG from '../assets/hero.svg'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div className="copy">
          <h1>Smooth Elevator — Best Lift Company in Bhubaneswar</h1>
          <p>We design, install and maintain high-quality lifts for residential and commercial projects across Bhubaneswar. Safety, smooth ride and timely service are our promise.</p>
          <div style={{marginTop:12}}>
            <a href="/contact" className="btn">Get a Quote</a>
          </div>
        </div>
        <div style={{width:360}}>
          <img src={HeroSVG} alt="Elevator illustration" style={{width:'100%',display:'block'}}/>
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2 style={{marginBottom:8}}>Our Services</h2>
        <div className="grid">
          <div className="card">
            <div className="service-icon"><img src="/src/assets/service1.svg" alt="residential" style={{width:36}}/></div>
            <h3>Residential Lifts</h3>
            <p className="muted">Compact, safe lifts tailored for homes and apartments.</p>
          </div>
          <div className="card">
            <div className="service-icon"><img src="/src/assets/service2.svg" alt="commercial" style={{width:36}}/></div>
            <h3>Commercial Lifts</h3>
            <p className="muted">Heavy-duty solutions for offices, malls and hospitals.</p>
          </div>
          <div className="card">
            <div className="service-icon"><img src="/src/assets/service3.svg" alt="modernization" style={{width:36}}/></div>
            <h3>Modernization</h3>
            <p className="muted">Upgrade older systems for energy efficiency and reliability.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

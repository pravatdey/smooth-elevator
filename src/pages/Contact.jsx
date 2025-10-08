import React, {useState} from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="card" style={{marginTop:12}}>
        {sent ? (
          <div>Thanks — we'll get back to you soon.</div>
        ) : (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} style={{display:'grid',gap:12}}>
            <div className="form-row">
              <label>Name</label>
              <input className="input" required />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input className="input" type="email" required />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea rows={5} className="input" required />
            </div>
            <div>
              <button className="btn" type="submit">Send Message</button>
              <button type="button" className="btn ghost" style={{marginLeft:12}} onClick={()=>setSent(true)}>Request Callback</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

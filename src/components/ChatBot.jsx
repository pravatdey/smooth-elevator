import React, {useEffect, useState, useRef} from 'react'

const BOT_RESPONSES = [
  {keywords: ['price','cost','how much'], reply: 'Our products start from around ₹1,20,000 and vary based on capacity and options. Which product are you interested in?'},
  {keywords: ['install','installation','time'], reply: 'Typical installation takes 7-21 days depending on building readiness and permits.'},
  {keywords: ['service','maintenance','repair'], reply: 'We offer preventive maintenance contracts and fast on-site repairs. Would you like a callback from our service team?'},
  {keywords: ['hello','hi','hey'], reply: 'Hello! I\'m SmoothBot — how can I help you today?'},
  {keywords: ['brochure','pdf','download'], reply: 'You can request a brochure from the product page or contact us and we\'ll email it to you.'},
]

function findReply(text){
  const t = text.toLowerCase()
  for(const r of BOT_RESPONSES){
    for(const k of r.keywords){
      if(t.includes(k)) return r.reply
    }
  }
  // fallback
  return "Thanks for your message — our team will get back to you shortly. You can also visit /contact to send detailed info." 
}

export default function ChatBot(){
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState(()=>{
    try{const raw=localStorage.getItem('smooth_chat'); return raw?JSON.parse(raw):[{from:'bot',text:'Hi, I\'m SmoothBot — ask me about products, pricing or service.'}] }catch(e){return []}
  })
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const listRef = useRef()

  useEffect(()=>{localStorage.setItem('smooth_chat', JSON.stringify(msgs))},[msgs])
  useEffect(()=>{ if(listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight },[msgs,open])

  function send(text){
    if(!text) return
    const userMsg = {from:'user', text}
    setMsgs(m=>[...m,userMsg])
    setInput('')
    setTyping(true)
    // simulate thinking
    setTimeout(()=>{
      const reply = findReply(text)
      setMsgs(m=>[...m,{from:'bot', text:reply}])
      setTyping(false)
    }, 700 + Math.random()*800)
  }

  return (
    <div style={{position:'fixed',right:18,bottom:18,zIndex:200}}>
      {open && (
        <div style={{width:340,height:420,boxShadow:'0 20px 60px rgba(2,6,23,0.2)',borderRadius:12,overflow:'hidden',display:'flex',flexDirection:'column',background:'#fff'}}>
          <div style={{padding:12,background:'linear-gradient(90deg,#0b5fff,#7c3aed)',color:'#fff',fontWeight:700}}>SmoothBot — Support</div>
          <div ref={listRef} style={{flex:1,overflowY:'auto',padding:12,display:'flex',flexDirection:'column',gap:8}}>
            {msgs.map((m,i)=> (
              <div key={i} style={{alignSelf: m.from==='user' ? 'flex-end' : 'flex-start',maxWidth:'82%'}}>
                <div style={{background: m.from==='user' ? 'linear-gradient(90deg,#0b5fff,#7c3aed)' : '#f3f6ff',color: m.from==='user'? '#fff' : '#07103a',padding:'10px 12px',borderRadius:10}}>{m.text}</div>
              </div>
            ))}
            {typing && <div style={{background:'#f3f6ff',padding:'8px 10px',borderRadius:10,width:120}}>SmoothBot is typing…</div>}
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); send(input)}} style={{padding:12,display:'flex',gap:8,alignItems:'center'}}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask me about pricing, install, service..." style={{flex:1,padding:10,borderRadius:8,border:'1px solid rgba(2,6,23,0.06)'}} />
            <button className="btn" type="submit" style={{padding:'8px 12px'}}>Send</button>
          </form>
        </div>
      )}

      <button onClick={()=>setOpen(v=>!v)} style={{width:54,height:54,borderRadius:999,boxShadow:'0 12px 30px rgba(11,95,255,0.18)',border:0,background:'linear-gradient(90deg,#0b5fff,#7c3aed)',color:'#fff',fontSize:20}}>💬</button>
    </div>
  )
}

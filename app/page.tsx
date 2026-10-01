"use client";

export default function Page() {
  return (
    <div style={{background:"#070210", minHeight:"100vh", color:"white", maxWidth:"430px", margin:"0 auto", fontFamily:"sans-serif", paddingBottom:"85px"}}>
      
      {/* HEADER */}
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 16px"}}>
        <div style={{display:"flex", gap:"12px", alignItems:"center"}}>
          <div style={{width:"52px", height:"52px", borderRadius:"16px", background:"linear-gradient(180deg, #1a0f33, #0f0822)", border:"2px solid #ff3ad1", boxShadow:"0 0 18px #ff3ad1", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px"}}>💜</div>
          <div style={{lineHeight:"0.9"}}>
            <div style={{fontWeight:900, fontSize:"20px", letterSpacing:"1px"}}>AMOR</div>
            <div style={{fontWeight:900, fontSize:"20px", color:"#d36bff", letterSpacing:"1px", textShadow:"0 0 10px #ff3ad1"}}>CONECTADO</div>
          </div>
        </div>
        <div style={{display:"flex", gap:"10px", fontSize:"20px"}}>
          <div style={{width:"40px", height:"40px", borderRadius:"50%", background:"#191034", border:"1px solid #7a3bff", display:"flex", alignItems:"center", justifyContent:"center"}}>🔔</div>
          <div style={{width:"40px", height:"40px", borderRadius:"50%", background:"#191034", border:"1px solid #7a3bff", display:"flex", alignItems:"center", justifyContent:"center"}}>👤</div>
        </div>
      </div>

      {/* DESCUBRIR */}
      <div style={{margin:"0 12px", background:"linear-gradient(90deg, #1b1235, #221545)", borderRadius:"18px", padding:"16px", border:"1px solid #4a2a7a"}}>
        <div style={{color:"#ff6bff", fontWeight:900, fontSize:"17px"}}>Descubrir Parejas Cercanas</div>
        <div style={{fontSize:"13px", opacity:0.7, marginTop:"4px"}}>📍 12 parejas activas a menos de 5km</div>
      </div>

      {/* MAPA - NEON IGUAL PRINT */}
      <div style={{margin:"14px 12px", background:"linear-gradient(180deg, #1c113c, #120a2a)", borderRadius:"22px", padding:"16px", border:"1px solid #ff3ad1", boxShadow:"0 0 30px #ff3ad133, inset 0 0 30px #ff3ad122"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <div style={{fontWeight:900, fontSize:"14px"}}>MAPA —</div>
            <div style={{fontSize:"12px", opacity:0.7}}>CERCA DE TI</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
            <div style={{width:"36px", height:"36px", borderRadius:"10px", background:"#201645", border:"1px solid #ff3ad1", display:"flex", alignItems:"center", justifyContent:"center"}}>+</div>
            <div style={{width:"36px", height:"36px", borderRadius:"10px", background:"#201645", border:"1px solid #5a4a7a", display:"flex", alignItems:"center", justifyContent:"center"}}>—</div>
            <div style={{width:"36px", height:"36px", borderRadius:"10px", background:"#201645", border:"1px solid #5a4a7a", display:"flex", alignItems:"center", justifyContent:"center"}}>—</div>
          </div>
        </div>
        {/* MAPA LINHAS */}
        <div style={{marginTop:"14px", height:"118px", borderRadius:"14px", background:"radial-gradient(80% 80% at 50% 50%, #1a1036, #0c0820)", border:"1px solid #2a1e4a", position:"relative", overflow:"hidden"}}>
          <svg viewBox="0 0 320 120" style={{position:"absolute", width:"100%", height:"100%"}}>
            <path d="M10 100 Q 90 10 160 50 T 310 20" stroke="#ff3ad1" strokeWidth="2" fill="none" opacity="0.9"/>
            <path d="M20 110 Q 120 70 200 80 T 300 90" stroke="#8a2bff" strokeWidth="1.5" fill="none" opacity="0.8"/>
            <path d="M0 50 Q 100 40 180 70" stroke="#b56bff" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
          <div style={{position:"absolute", left:"10%", top:"60%", fontSize:"11px", background:"#1c113c", border:"1px solid #ff3ad1", padding:"3px 8px", borderRadius:"20px"}}>💜 Alex & Mia · 1.2km</div>
          <div style={{position:"absolute", left:"48%", top:"42%", fontSize:"11px", background:"#ff3ad1", padding:"3px 8px", borderRadius:"20px", fontWeight:900}}>📍 Tú · 1.1km</div>
          <div style={{position:"absolute", right:"8%", top:"12%", fontSize:"11px", background:"#1c113c", border:"1px solid #8a2bff", padding:"3px 8px", borderRadius:"20px"}}>📍 Jae & Luna · 3.5km</div>
          <div style={{position:"absolute", right:"12%", bottom:"10%", fontSize:"11px", background:"#1c113c", border:"1px solid #8a2bff", padding:"3px 8px", borderRadius:"20px"}}>📍 Noah & Vale · 4.2km</div>
        </div>
      </div>

      {/* PAREJAS DESTACADAS - IGUAL PRINT */}
      <div style={{padding:"0 12px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px"}}>
          <div style={{fontWeight:900, color:"#c89cff", fontSize:"15px"}}>PAREJAS DESTACADAS</div>
          <div style={{fontSize:"12px", color:"#ff6bff"}}>Ver todas →</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          <div style={{background:"linear-gradient(180deg, #23144d, #140c2e)", borderRadius:"18px", padding:"6px", border:"1px solid #ff3ad1", boxShadow:"0 0 18px #ff3ad133"}}>
            <div style={{height:"136px", borderRadius:"14px", background:"linear-gradient(180deg, #6b5a7a, #3a304a)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}>
              <div style={{fontSize:"40px"}}>👩‍❤️‍👨</div>
              <div style={{position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(0deg, #000000cc, transparent)", padding:"10px 10px 8px"}}>
                <div style={{fontWeight:900, fontSize:"15px"}}>Alex & Mia</div>
                <div style={{fontSize:"10px", color:"#ff8ac6"}}>1.2km · Gaming · 92% Match</div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 6px 4px"}}>
              <div style={{fontSize:"10px"}}>92%<div style={{width:"48px", height:"4px", background:"#ff3ad1", borderRadius:"2px", marginTop:"2px"}}></div></div>
              <div style={{border:"1px solid #ff3ad1", borderRadius:"16px", padding:"5px 14px", fontSize:"11px"}}>Conectar</div>
            </div>
          </div>
          <div style={{background:"linear-gradient(180deg, #23144d, #140c2e)", borderRadius:"18px", padding:"6px", border:"1px solid #4a3a6a"}}>
            <div style={{height:"136px", borderRadius:"14px", background:"linear-gradient(180deg, #7a6a8a, #4a405a)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden"}}>
              <div style={{fontSize:"40px"}}>👩‍❤️‍👨</div>
              <div style={{position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(0deg, #000000cc, transparent)", padding:"10px 10px 8px"}}>
                <div style={{fontWeight:900, fontSize:"15px"}}>Jae & Luna</div>
                <div style={{fontSize:"10px", color:"#c89cff"}}>3.5km · Arte · 87% Match</div>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 6px 4px"}}>
              <div style={{fontSize:"10px", opacity:0.6}}>Compatibilidad</div>
              <div style={{border:"1px solid #6a5a8a", borderRadius:"16px", padding:"5px 14px", fontSize:"11px"}}>Conectar</div>
            </div>
          </div>
        </div>
      </div>

      {/* JUEGOS - IGUAL PRINT */}
      <div style={{padding:"18px 12px 0"}}>
        <div style={{fontWeight:900, color:"#ff7ac6", fontSize:"15px"}}>JUEGOS 2x2 · PARA PAREJAS 🎮</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", marginTop:"12px"}}>
          <div style={{background:"#1b1140", borderRadius:"16px", border:"1px solid #3a2a66", padding:"8

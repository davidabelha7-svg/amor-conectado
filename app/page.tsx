"use client";

export default function Page() {
  return (
    <div style={{background:"#0a0612", minHeight:"100vh", color:"white", fontFamily:"Arial, sans-serif", maxWidth:"430px", margin:"0 auto", paddingBottom:"90px"}}>
      
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 14px"}}>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
          <div style={{width:"38px", height:"38px", borderRadius:"10px", border:"2px solid #ff2ad4", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 12px #ff2ad4"}}>💜</div>
          <div style={{lineHeight:"0.9"}}><div style={{fontWeight:"900", fontSize:"18px"}}>AMOR</div><div style={{fontWeight:"900", fontSize:"18px", color:"#ff6bff"}}>CONECTADO</div></div>
        </div>
        <div style={{display:"flex", gap:"10px", fontSize:"18px"}}><div style={{width:"32px", height:"32px", borderRadius:"50%", border:"1px solid #8a2bff", display:"flex", alignItems:"center", justifyContent:"center"}}>🔔</div><div style={{width:"32px", height:"32px", borderRadius:"50%", border:"1px solid #8a2bff", display:"flex", alignItems:"center", justifyContent:"center"}}>👤</div></div>
      </div>

      <div style={{margin:"0 12px", background:"#1a1430", borderRadius:"14px", padding:"12px 14px", border:"1px solid #3a2a60"}}>
        <div style={{color:"#ff6bff", fontWeight:"900", fontSize:"15px"}}>Descubrir Parejas Cercanas</div>
        <div style={{fontSize:"11px", opacity:0.7, marginTop:"3px"}}>12 parejas activas a menos de 5km</div>
      </div>

      <div style={{margin:"12px", background:"#120b25", borderRadius:"18px", padding:"12px", border:"1px solid #ff2ad4", boxShadow:"0 0 18px #ff2ad422"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}><div><div style={{fontWeight:"900", fontSize:"12px"}}>MAPA —</div><div style={{fontSize:"11px", opacity:0.7}}>CERCA DE TI</div></div><div style={{display:"flex", flexDirection:"column", gap:"6px"}}><div style={{width:"28px", height:"28px", border:"1px solid #ff2ad4", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center"}}>+</div><div style={{width:"28px", height:"28px", border:"1px solid #555", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center"}}>-</div></div></div>
        <div style={{marginTop:"10px", background:"#0f0a20", height:"90px", borderRadius:"10px", border:"1px dashed #ff2ad433", display:"flex", flexDirection:"column", justifyContent:"center", padding:"10px", gap:"4px", fontSize:"11px"}}>
          <div>Alex and Mia - 1.2km</div><div>TU - 1.1km</div><div>Jae and Luna - 3.5km</div><div>Noah and Vale - 4.2km</div>
        </div>
      </div>

      <div style={{padding:"0 12px"}}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}><div style={{fontWeight:"900", color:"#c48cff", fontSize:"13px"}}>PAREJAS DESTACADAS</div><div style={{fontSize:"11px", color:"#ff6bff"}}>Ver todas</div></div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
          <div style={{background:"#1e1340", borderRadius:"14px", padding:"8px", border:"1px solid #ff2ad4"}}><div style={{height:"90px", background:"#3a3a3a", borderRadius:"10px"}}></div><div style={{fontWeight:"bold", fontSize:"12px", marginTop:"6px"}}>Alex and Mia</div><div style={{fontSize:"9px", color:"#ff8ac6"}}>1.2km - Gaming - 92% Match</div><div style={{display:"flex", justifyContent:"space-between", marginTop:"8px"}}><span style={{fontSize:"10px"}}>92%</span><button style={{background:"transparent", border:"1px solid #ff2ad4", color:"white", borderRadius:"14px", padding:"3px 10px", fontSize:"10px"}}>Conectar</button></div></div>
          <div style={{background:"#1e1340", borderRadius:"14px", padding:"8px", border:"1px solid #444"}}><div style={{height:"90px", background:"#3a3a3a", borderRadius:"10px"}}></div><div style={{fontWeight:"bold", fontSize:"12px", marginTop:"6px"}}>Jae and Luna</div><div style={{fontSize:"9px", color:"#c48cff"}}>3.5km - Arte - 87% Match</div><div style={{display:"flex", justifyContent:"space-between", marginTop:"8px"}}><span style={{fontSize:"10px", opacity:0.6}}>Compatibilidad</span><button style={{background:"transparent", border:"1px solid #666", color:"white", borderRadius:"14px", padding:"3px 10px", fontSize:"10px"}}>Conectar</button></div></div>
        </div>
      </div>

      <div style={{padding:"14px 12px 0"}}>
        <div style={{fontWeight:"900", color:"#ff8ac6", fontSize:"13px"}}>JUEGOS 2x2 - PARA PAREJAS</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px", marginTop:"8px"}}>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"8px", textAlign:"center", border:"1px solid #333"}}><div style={{fontSize:"20px"}}>T</div><div style={{fontSize:"9px", marginTop:"4px", fontWeight:"bold"}}>Trivia Duel</div><div style={{fontSize:"7px", opacity:0.6}}>5min</div></div>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"8px", textAlign:"center", border:"1px solid #333"}}><div style={{fontSize:"20px"}}>M</div><div style={{fontSize:"9px", marginTop:"4px", fontWeight:"bold"}}>Memory Match</div><div style={{fontSize:"7px", opacity:0.6}}>Coop</div></div>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"8px", textAlign:"center", border:"1px solid #333"}}><div style={{fontSize:"20px"}}>P</div><div style={{fontSize:"9px", marginTop:"4px", fontWeight:"bold"}}>Pixel Pong</div><div style={{fontSize:"7px", opacity:0.6}}>1v1</div></div>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"8px", textAlign:"center", border:"1px solid #333"}}><div style={{fontSize:"20px"}}>T</div><div style={{fontSize:"9px", marginTop:"4px", fontWeight:"bold"}}>Truth or Pixel</div><div style={{fontSize:"7px", opacity:0.6}}>Divertido</div></div>
        </div>
      </div>

      <div style={{margin:"14px 12px", background:"#120b25", borderRadius:"18px", padding:"12px", border:"1px solid #ff2ad4"}}>
        <div style={{fontWeight:"900", marginBottom:"10px", fontSize:"12px"}}>PLANES PREMIUM</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px"}}>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"10px", border:"1px solid #444"}}><div style={{fontSize:"10px", color:"#c48cff", fontWeight:"bold"}}>DUO PASS</div><div style={{fontWeight:"900", fontSize:"16px", margin:"4px 0"}}>$9.99/mes</div><div style={{fontSize:"8px", lineHeight:"1.4", opacity:0.8}}>Boost diario x1<br/>Ver quien te dio like<br/>Sin anuncios</div></div>
          <div style={{background:"linear-gradient(#a932ff,#6a1fc7)", borderRadius:"12px", padding:"10px", border:"1px solid #ff8ac6"}}><div style={{fontSize:"10px", fontWeight:"bold"}}>VIP CONNECT</div><div style={{fontWeight:"900", fontSize:"16px", margin:"4px 0"}}>$19.99/mes</div><div style={{fontSize:"8px", lineHeight:"1.4"}}>Boost ilimitado<br/>Filtros avanzados<br/>Juegos exclusivos<br/>Modo invisible</div><button style={{marginTop:"8px", width:"100%", background:"white", color:"#8a2bff", border:"0", borderRadius:"16px", padding:"6px", fontSize:"8px", fontWeight:"900"}}>ACTUALIZAR A VIP - 7 DIAS GRATIS</button></div>
        </div>
      </div>

      <div style={{position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:"430px", background:"#0f0a1e", display:"flex", justifyContent:"space-around", padding:"10px 0", borderTop:"1px solid #2a1f4a"}}>
        <div style={{textAlign:"center", color:"#ff2ad4", fontSize:"12px"}}>Explorar</div>
        <div style={{textAlign:"center", color:"#666", fontSize:"12px"}}>Mapa</div>
        <div style={{textAlign:"center", color:"#666", fontSize:"12px"}}>Juegos</div>
        <div style={{textAlign:"center", color:"#666", fontSize:"12px"}}>Premium</div>
        <div style={{textAlign:"center", color:"#666", fontSize:"12px"}}>Perfil</div>
      </div>
    </div>
  )
}

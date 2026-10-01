"use client";

export default function Page() {
  return (
    <div style={{background:"#080312", minHeight:"100vh", color:"white", maxWidth:"430px", margin:"0 auto", fontFamily:"Arial", paddingBottom:"80px"}}>
      
      {/* HEADER IGUAL PRINT */}
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 14px"}}>
        <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
          <div style={{width:"48px", height:"48px", borderRadius:"14px", background:"#120a2a", border:"2px solid #ff2ad4", boxShadow:"0 0 15px #ff2ad4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px"}}>💜</div>
          <div style={{lineHeight:"0.9"}}>
            <div style={{fontWeight:"900", fontSize:"18px", letterSpacing:"1px"}}>AMOR</div>
            <div style={{fontWeight:"900", fontSize:"18px", color:"#d66bff", letterSpacing:"1px"}}>CONECTADO</div>
          </div>
        </div>
        <div style={{display:"flex", gap:"10px"}}>
          <div style={{width:"38px", height:"38px", borderRadius:"50%", background:"#1a1035", border:"1px solid #7a3bff", display:"flex", alignItems:"center", justifyContent:"center"}}>🔔</div>
          <div style={{width:"38px", height:"38px", borderRadius:"50%", background:"#1a1035", border:"1px solid #7a3bff", display:"flex", alignItems:"center", justifyContent:"center"}}>👤</div>
        </div>
      </div>

      {/* DESCUBRA */}
      <div style={{margin:"0 12px", background:"#1a1134", borderRadius:"16px", padding:"14px", border:"1px solid #4a2a78"}}>
        <div style={{color:"#ff6bff", fontWeight:"900", fontSize:"16px"}}>Descubra casais proximos</div>
        <div style={{fontSize:"12px", opacity:0.7, marginTop:"2px"}}>12 casais ativos num raio de 5 km</div>
      </div>

      {/* MAPA - IGUAL PRINT */}
      <div style={{margin:"12px", background:"#170e32", borderRadius:"20px", padding:"14px", border:"1px solid #ff2ad4", boxShadow:"0 0 20px #ff2ad433"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div><div style={{fontWeight:"900", fontSize:"13px"}}>MAPA -</div><div style={{fontSize:"12px", opacity:0.8}}>PERTO DE VOCE</div></div>
          <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
            <div style={{width:"32px", height:"32px", borderRadius:"8px", background:"#1f1440", border:"1px solid #ff2ad4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px"}}>+</div>
            <div style={{width:"32px", height:"32px", borderRadius:"8px", background:"#1f1440", border:"1px solid #5a4a7a", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px"}}>-</div>
          </div>
        </div>
        <div style={{marginTop:"12px", height:"108px", background:"#0f0a24", borderRadius:"12px", border:"1px solid #2a1e4a", padding:"14px", fontSize:"13px", lineHeight:"1.8"}}>
          Alex e Mia - 1,2 km<br/>TU - 1,1 km<br/>Jae e Luna - 3,5 km<br/>Noah e Vale - 4,2 km
        </div>
      </div>

      {/* CASAIS PROEMINENTES */}
      <div style={{padding:"0 12px"}}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
          <div style={{fontWeight:"900", color:"#b78cff", fontSize:"13px"}}>CASAIS PROEMINENTES</div>
          <div style={{fontSize:"11px", color:"#ff6bff"}}>Ver</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
          <div style={{background:"#1b1240", borderRadius:"16px", padding:"6px", border:"1px solid #ff2ad4"}}>
            <div style={{height:"108px", background:"#3a3a3a", borderRadius:"12px"}}></div>
            <div style={{padding:"8px 4px"}}>
              <div style={{fontWeight:"bold", fontSize:"13px"}}>Alex e Mia</div>
              <div style={{fontSize:"10px", color:"#ff8ac6"}}>1,2 km - Jogos - 92% de compatibilidade</div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"6px"}}>
                <div style={{fontSize:"11px"}}>92%</div>
                <div style={{border:"1px solid #ff2ad4", borderRadius:"16px", padding:"4px 12px", fontSize:"11px"}}>Conectar</div>
              </div>
            </div>
          </div>
          <div style={{background:"#1b1240", borderRadius:"16px", padding:"6px", border:"1px solid #4a3a6a"}}>
            <div style={{height:"108px", background:"#3a3a3a", borderRadius:"12px"}}></div>
            <div style={{padding:"8px 4px 4px"}}>
              <div style={{fontWeight:"bold", fontSize:"13px"}}>Jae e Luna</div>
              <div style={{fontSize:"10px", color:"#b78cff"}}>3,5 km - Arte - 87% de correspondencia</div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"6px"}}>
                <div style={{fontSize:"10px", opacity:0.6}}>Compatibilidade</div>
                <div style={{border:"1px solid #6a5a8a", borderRadius:"16px", padding:"4px 12px", fontSize:"11px"}}>Conecta</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOGOS */}
      <div style={{padding:"12px 12px 0"}}>
        <div style={{fontWeight:"900", color:"#ff7ac6", fontSize:"13px", marginBottom:"8px"}}>JOGOS 2x2 - PARA CASAIS</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px"}}>
          <div style={{background:"#1b1240", borderRadius:"14px", padding:"12px 6px", textAlign:"center", border:"1px solid #3a2a66"}}>
            <div style={{fontWeight:"900", fontSize:"20px"}}>T</div>
            <div style={{fontSize:"9px", fontWeight:"bold", marginTop:"8px"}}>Duelo de Perguntas e Respostas</div>
            <div style={{fontSize:"7px", opacity:0.5, marginTop:"2px"}}>5 minutos</div>
          </div>
          <div style={{background:"#1b1240", borderRadius:"14px", padding:"12px 6px", textAlign:"center", border:"1px solid #3a2a66"}}>
            <div style={{fontWeight:"900", fontSize:"20px"}}>M</div>
            <div style={{fontSize:"9px", fontWeight:"bold", marginTop:"8px"}}>Jogo da Memoria</div>
            <div style={{fontSize:"7px", opacity:0.5, marginTop:"2px"}}>Cooperativa</div>
          </div>
          <div style={{background:"#1b1240", borderRadius:"14px", padding:"12px 6px", textAlign:"center", border:"1px solid #3a2a66"}}>
            <div style={{fontWeight:"900", fontSize:"20px"}}>P</div>
            <div style={{fontSize:"9px", fontWeight:"bold", marginTop:"8px"}}>Pixel Pong</div>
            <div style={{fontSize:"7px", opacity:0.5, marginTop:"2px"}}>1 contra 1</div>
          </div>
          <div style={{background:"#1b1240", borderRadius:"14px", padding:"12px 6px", textAlign:"center", border:"1px solid #3a2a66"}}>
            <div style={{fontWeight:"900", fontSize:"20px"}}>T</div>
            <div style={{fontSize:"9px", fontWeight:"bold", marginTop:"8px"}}>Verdade ou Pixel</div>
            <div style={{fontSize:"7px", opacity:0.5, marginTop:"2px"}}>Diversao</div>
          </div>
        </div>
      </div>

      {/* PREMIUM */}
      <div style={{margin:"14px 12px", background:"#170e32", borderRadius:"20px", padding:"12px", border:"1px solid #ff2ad4"}}>
        <div style={{fontWeight:"900", fontSize:"13px", marginBottom:"10px"}}>PLANOS PREMIUM</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
          <div style={{background:"#1f1440", borderRadius:"14px", padding:"10px", border:"1px solid #4a3a6a"}}>
            <div style={{fontSize:"10px", color:"#b78cff", fontWeight:"900"}}>PASSE DUO</div>
            <div style={{fontSize:"17px", fontWeight:"900", marginTop:"2px"}}>US$ 9,99/mes</div>
            <div style={{fontSize:"9px", opacity:0.7, marginTop:"6px", lineHeight:"1.4"}}>Impulso diario x1<br/>Veja quem curtiu sua publicacao<br/>Sem anuncios</div>
          </div>
          <div style={{background:"#8a2be2", borderRadius:"14px", padding:"10px", border:"1px solid #d66bff"}}>
            <div style={{fontSize:"10px", fontWeight:"900"}}>CONEXAO VIP</div>
            <div style={{fontSize:"17px", fontWeight:"900", marginTop:"2px"}}>US$ 19,99/mes</div>
            <div style={{fontSize:"9px", marginTop:"6px", lineHeight:"1.4"}}>Impulso ilimitado,<br/>filtros avancados,<br/>jogos exclusivos,<br/>modo invisivel.</div>
            <div style={{marginTop:"8px", background:"white", color:"#6a1fc7", borderRadius:"16px", padding:"8px", fontSize:"8px", fontWeight:"900", textAlign:"center"}}>Faca um upgrade para VIP - 7 dias gratis</div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div style={{position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:"430px", background:"#0e0820", display:"flex", justifyContent:"space-around", padding:"12px 0", borderTop:"1px solid #2a1e4a"}}>
        <div style={{color:"#ff2ad4", fontSize:"12px", fontWeight:"bold"}}>Explorar</div>
        <div style={{color:"#6a5a8a", fontSize:"12px"}}>Mapa</div>
        <div style={{color:"#6a5a8a", fontSize:"12px"}}>Jogos</div>
        <div style={{color:"#6a5a8a", fontSize:"12px"}}>Premium</div>
        <div style={{color:"#6a5a8a", fontSize:"12px"}}>Perfil</div>
      </div>
    </div>
  );
}

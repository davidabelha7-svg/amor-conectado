"use client";
import { useState } from "react";

export default function Page() {
  return (
    <div style={{background:"#0a0614", minHeight:"100vh", color:"white", fontFamily:"sans-serif", maxWidth:"430px", margin:"0 auto", paddingBottom:"90px"}}>
      {/* HEADER */}
      <div style={{background:"linear-gradient(90deg,#ff2a9a,#8a2bff)", padding:"16px", textAlign:"center", position:"relative"}}>
        <div style={{position:"absolute", left:"16px", top:"18px", fontSize:"24px"}}>💜</div>
        <h1 style={{margin:0, fontSize:"26px", fontWeight:"900", letterSpacing:"1px", lineHeight:"1"}}>AMOR<br/>CONECTADO</h1>
      </div>

      {/* CASAIS PROXIMOS */}
      <div style={{padding:"16px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"10px"}}>
          <h2 style={{margin:0, fontSize:"18px"}}>📍 Casais Próximos</h2>
          <span style={{fontSize:"12px", opacity:0.6}}>GPS • 1.2km</span>
        </div>
        <div style={{background:"#1a1033", borderRadius:"16px", padding:"12px", border:"1px solid #3a2066", height:"110px", position:"relative", backgroundImage:"linear-gradient(rgba(138,43,255,0.2), rgba(138,43,255,0.2))", display:"flex", alignItems:"flex-end"}}>
          <span style={{fontSize:"12px", opacity:0.7}}>1.2km ao redor</span>
          <div style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", fontSize:"30px"}}>📍</div>
        </div>
      </div>

      {/* CARDS */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", padding:"0 16px"}}>
        {[
          {nome:"Lucas & Ana", status:"Namorando • 1.2km • Online"},
          {nome:"Marcos & Julia", status:"Noivos • 0.9km • Online"}
        ].map((c,i)=>(
          <div key={i} style={{background:"#1e1340", borderRadius:"16px", padding:"12px", textAlign:"center", border:"1px solid #4a2d8a"}}>
            <div style={{display:"flex", justifyContent:"center", gap:"8px", marginBottom:"8px"}}>
              <div style={{width:"44px", height:"44px", borderRadius:"50%", background:"#555"}}></div>
              <div style={{width:"44px", height:"44px", borderRadius:"50%", background:"#777"}}></div>
            </div>
            <div style={{fontWeight:"bold", fontSize:"14px"}}>{c.nome}</div>
            <div style={{fontSize:"10px", opacity:0.6, margin:"4px 0 8px"}}>{c.status}</div>
            <button style={{background:"transparent", border:"1px solid #ff2a9a", color:"#ff8ac6", borderRadius:"20px", padding:"6px 14px", fontSize:"12px", width:"100%"}}>💬 Conversar</button>
          </div>
        ))}
      </div>

      {/* JOGOS */}
      <div style={{padding:"20px 16px 0"}}>
        <h2 style={{margin:"0 0 12px", fontSize:"18px"}}>🎮 Jogos —<br/>Couple vs Couple Battle</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"10px"}}>
          {[
            {n:"Tetris", e:"🧱"},
            {n:"Sinuca", e:"🎱"},
            {n:"Bolinha", e:"🔴"},
            {n:"Cobrinha", e:"🐍"},
            {n:"Quebra-Cabeça", e:"🧩"},
          ].map(j=>(
            <div key={j.n} style={{textAlign:"center"}}>
              <div style={{background:"#1e1340", borderRadius:"14px", aspectRatio:"1", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px", border:"1px solid #6a3dc7"}}>{j.e}</div>
              <div style={{fontSize:"10px", marginTop:"6px"}}>{j.n}</div>
            </div>
          ))}
        </div>
        <button style={{marginTop:"16px", width:"100%", background:"linear-gradient(90deg,#ff2a9a,#8a2bff)", border:"none", borderRadius:"14px", padding:"16px", color:"white", fontWeight:"bold", fontSize:"16px"}}>VS Iniciar Batalha 2x2</button>
      </div>

      {/* PLANOS */}
      <div style={{padding:"20px 16px"}}>
        <h2 style={{margin:"0 0 12px", fontSize:"20px", fontWeight:"bold"}}>Planos de Assinatura</h2>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          <div style={{border:"1px solid #ff2a9a", borderRadius:"16px", padding:"14px", background:"#1e1340"}}>
            <div style={{background:"#3a1a2a", color:"#ff8ac6", fontSize:"10px", padding:"4px 8px", borderRadius:"6px", display:"inline-block"}}>PLANO ROSA</div>
            <div style={{color:"#ff2a9a", fontSize:"26px", fontWeight:"900", margin:"8px 0"}}>R$29,90<span style={{fontSize:"12px"}}>/mês</span></div>
            <div style={{fontSize:"10px", lineHeight:"1.6"}}>✓ Mensagens ilimitadas<br/>✓ Ver quem curtiu você<br/>✓ Filtros avançados</div>
          </div>
          <div style={{border:"1px solid #8a2bff", borderRadius:"16px", padding:"14px", background:"#1e1340"}}>
            <div style={{background:"#2a1a4a", color:"#b78cff", fontSize:"10px", padding:"4px 8px", borderRadius:"6px", display:"inline-block", float:"right"}}>Mais popular</div>
            <div style={{color:"#8a2bff", fontSize:"26px", fontWeight:"900", margin:"8px 0", clear:"both"}}>R$49,90<span style={{fontSize:"12px"}}>/mês</span></div>
            <div style={{fontSize:"10px", lineHeight:"1.6"}}>✓ Boost diário<br/>✓ Batalhas exclusivas<br/>✓ Sem anúncios</div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div style={{position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:"430px", background:"#120c24", display:"flex", justifyContent:"space-around", padding:"10px 0", borderTop:"1px solid #2a1f4a"}}>
        <div style={{textAlign:"center", color:"#ff2a9a"}}>🏠<div style={{fontSize:"10px"}}>Início</div></div>
        <div style={{textAlign:"center", opacity:0.5}}>🎮<div style={{fontSize:"10px"}}>Jogos</div></div>
        <div style={{textAlign:"center", opacity:0.5}}>💬<div style={{fontSize:"10px"}}>Chat</div></div>
        <div style={{textAlign:"center", opacity:0.5}}>👤<div style={{fontSize:"10px"}}>Perfil</div></div>
      </div>
    </div>
  )
}

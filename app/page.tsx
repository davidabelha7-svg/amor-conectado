"use client";
import { useState } from "react";

export default function Page() {
  const [half, setHalf] = useState(false);
  const [tab, setTab] = useState("explorar");

  return (
    <div style={{background:"#0a0612", minHeight:"100vh", color:"white", maxWidth:"430px", margin:"0 auto", paddingBottom:"90px", fontFamily:"sans-serif", position:"relative"}}>
      
      {/* HEADER */}
      <div style={{display:"flex", justifyContent:"space-between", padding:"14px 14px", alignItems:"center", background:"linear-gradient(90deg,#1a0f2e,#2a1040)"}}>
        <div style={{display:"flex", gap:"8px", alignItems:"center"}}><div style={{border:"2px solid #ff2ad4", width:"36px", height:"36px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 10px #ff2ad4"}}>💜</div><div style={{fontWeight:"900", lineHeight:"0.9"}}>AMOR<br/><span style={{color:"#ff6bff"}}>CONECTADO</span></div></div>
        <div style={{display:"flex", gap:"8px"}}><span style={{border:"1px solid #8a2bff", borderRadius:"50%", width:"32px", height:"32px", display:"flex", alignItems:"center", justifyContent:"center"}}>🔔</span><span style={{border:"1px solid #8a2bff", borderRadius:"50%", width:"32px", height:"32px", display:"flex", alignItems:"center", justifyContent:"center"}}>👤</span></div>
      </div>

      {/* DESCUBRIR */}
      <div style={{margin:"10px 12px", background:"#1a1033", borderRadius:"14px", padding:"12px", border:"1px solid #3a2066"}}>
        <div style={{color:"#ff6bff", fontWeight:"900"}}>Descubrir Parejas Cercanas</div>
        <div style={{fontSize:"11px", opacity:0.7}}>📍 12 parejas activas • GPS para encontros casuais • Bloquear / Denunciar</div>
      </div>

      {/* MAPA */}
      <div style={{margin:"10px 12px", background:"#120b25", borderRadius:"18px", padding:"10px", border:"1px solid #ff2ad4"}}>
        <div style={{fontWeight:"900", fontSize:"12px"}}>MAPA — CERCA DE TI • GPS 500m</div>
        <div style={{height:"90px", background:"radial-gradient(#1a1040,#0a0612)", borderRadius:"10px", marginTop:"8px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px"}}>🗺️ Alex & Mia 1.2km • Jae & Luna 3.5km • Tu 1.1km</div>
      </div>

      {/* PAREJAS */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", padding:"0 12px"}}>
        {["Alex & Mia - 1.2km - 92%","Jae & Luna - 3.5km - 87%"].map((t,i)=><div key={i} style={{background:"#1e1340", borderRadius:"14px", padding:"10px", border:"1px solid #8a2bff66", textAlign:"center"}}><div style={{height:"70px", background:"#333", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>👩‍❤️‍👨</div><div style={{fontSize:"11px", marginTop:"6px", fontWeight:"bold"}}>{t}</div><button onClick={()=>setTab("chat")} style={{marginTop:"6px", width:"100%", background:"#ff2ad4", border:"none", borderRadius:"20px", color:"white", padding:"6px", fontSize:"11px"}}>💬 Conversar - WhatsApp Style</button></div>)}
      </div>

      {/* JOGOS - OFFLINE E ONLINE */}
      <div style={{padding:"14px 12px 0"}}>
        <div style={{fontWeight:"900", color:"#c48cff"}}>🎮 JOGOS 2x2 • Online y Offline • Meia Tela</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"6px", marginTop:"8px"}}>
          {[
            {n:"Tetris",e:"🧱"},{n:"Baralho",e:"🃏"},{n:"Dominó",e:"🎲"},{n:"Caça-palavra",e:"🔤"},
            {n:"Cobrinha",e:"🐍"},{n:"Bolinha",e:"🔴"},{n:"Sinuca",e:"🎱"},{n:"Achar Par",e:"🧩"},
          ].map(j=><div key={j.n} style={{background:"#1a1033", borderRadius:"12px", padding:"8px", textAlign:"center", border:"1px solid #444"}}><div style={{fontSize:"22px"}}>{j.e}</div><div style={{fontSize:"8px", marginTop:"4px"}}>{j.n}</div><div style={{fontSize:"7px", color:"#0f0"}}>● online/offline</div></div>)}
        </div>
        <button onClick={()=>setHalf(!half)} style={{marginTop:"10px", width:"100%", background:half?"#0f0":"#2a1040", color:half?"black":"white", border:"1px solid #ff2ad4", borderRadius:"10px", padding:"10px", fontWeight:"bold", fontSize:"12px"}}>{half?"✓ MODO MEIA TELA ATIVO":"⧉ ATIVAR MEIA TELA - Ver vídeo e digitar"}</button>
        {half && <div style={{marginTop:"8px", background:"black", borderRadius:"10px", padding:"8px", border:"1px solid #ff2ad4"}}><div style={{background:"#222", height:"90px", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center"}}>🎬 Vídeo em meia tela ▶️</div><div style={{background:"#1a1033", marginTop:"6px", borderRadius:"8px", padding:"6px", fontSize:"11px"}}>💬 Digitando enquanto assiste...</div></div>}
      </div>

      {/* MUSICA E GALERIA */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", padding:"10px 12px"}}>
        <div style={{background:"#1a1033", borderRadius:"12px", padding:"10px", border:"1px solid #444"}}><div style={{fontSize:"11px", fontWeight:"bold"}}>🎵 Música</div><div style={{fontSize:"9px", opacity:0.7}}>Online/Offline</div><div style={{marginTop:"6px", background:"#000", borderRadius:"6px", height:"30px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px"}}>▶️ Playlist Casal</div></div>
        <div style={{background:"#1a1033", borderRadius:"12px", padding:"10px", border:"1px solid #444"}}><div style={{fontSize:"11px", fontWeight:"bold"}}>🖼️ Galeria de Fotos</div><div style={{fontSize:"9px", opacity:0.7}}>Suas fotos</div><div style={{marginTop:"6px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"4px"}}><div style={{background:"#333", height:"22px", borderRadius:"4px"}}></div><div style={{background:"#555", height:"22px", borderRadius:"4px"}}></div><div style={{background:"#333", height:"22px", borderRadius:"4px"}}></div></div></div>
      </div>

      {/* PLANOS */}
      <div style={{margin:"10px 12px", background:"#120b25", borderRadius:"18px", padding:"12px", border:"1px solid #ff2ad4"}}>
        <div style={{fontWeight:"900", marginBottom:"10px"}}>👑 PLANES PREMIUM</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px"}}>
          <div style={{background:"#1a1033", borderRadius:"12px", padding:"10px", border:"1px solid #ff2ad4"}}>
            <div style={{fontSize:"11px", color:"#ff6bff", fontWeight:"900"}}>PLANO NORMAL</div>
            <div style={{fontWeight:"900", fontSize:"18px"}}>R$29,90<span style={{fontSize:"10px"}}>/mês</span></div>
            <div style={{fontSize:"8px", background:"#0f0", color:"black", display:"inline-block", padding:"2px 6px", borderRadius:"10px", fontWeight:"bold"}}>1 DIA GRÁTIS</div>
            <div style={{fontSize:"8px", lineHeight:"1.5", marginTop:"6px"}}>
              ✓ Voz ilimitada<br/>✓ Texto ilimitado<br/>✓ Chamada voz ilimitada<br/>✓ Tradutor voz/texto<br/>✓ Curtida ilimitada<br/>✓ Sem anúncio<br/>✓ Ver quem curtiu ∞<br/>✓ Emoji + Grupo<br/>✓ Jogos offline/online<br/>✓ Música/vídeo off/on<br/>✓ Meia tela<br/>✓ Galeria fotos
            </div>
            <button style={{marginTop:"8px", width:"100%", background:"#ff2ad4", border:"none", borderRadius:"20px", padding:"8px", color:"white", fontWeight:"bold", fontSize:"10px"}}>COMEÇAR GRÁTIS</button>
          </div>
          <div style={{background:"linear-gradient(180deg,#a932ff,#6a1fc7)", borderRadius:"12px", padding:"10px", border:"1px solid #fff", position:"relative"}}>
            <div style={{position:"absolute", top:"-6px", right:"6px", background:"gold", color:"black", fontSize:"7px", padding:"2px 5px", borderRadius:"6px", fontWeight:"900"}}>POPULAR</div>
            <div style={{fontSize:"11px", fontWeight:"900"}}>✨ VIP CONNECT</div>
            <div style={{fontWeight:"900", fontSize:"18px"}}>R$49,90<span style={{fontSize:"10px"}}>/mês</span></div>
            <div style={{fontSize:"8px", lineHeight:"1.5", marginTop:"6px"}}>
              ✓ TUDO do Normal +<br/>✓ 🎁 Vale presente<br/>✓ 🥷 Modo Anônimo<br/>✓ 🛂 Passaporte<br/>✓ ↩️ Voltar sempre<br/>✓ 📹 Vídeo privado ∞<br/>✓ 🌐 Tradutor vídeo/voz<br/>✓ PT ↔ EN automático<br/>✓ 📍 GPS encontros<br/>✓ 🚨 Denúncia/Block<br/>✓

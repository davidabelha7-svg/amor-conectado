"use client"
import { useState } from "react"
export default function Page(){
const [t,setT]=useState("")
const [m,setM]=useState(["Oi amor ❤️","Oi vida!"])
return(<div style={{background:"#fff0f5",minHeight:"100vh",padding:10}}>
<div style={{background:"#000",borderRadius:15,padding:8}}>
<p style={{color:"#fff",textAlign:"center",fontSize:12,margin:5}}>📹 EM CIMA - 4 PESSOAS</p>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
<div style={{background:"#333",height:80,borderRadius:10,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>Você</div>
<div style={{background:"#333",height:80,borderRadius:10,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>Amor 1</div>
<div style={{background:"#333",height:80,borderRadius:10,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>Amor 2</div>
<div style={{background:"#333",height:80,borderRadius:10,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>Amor 3</div>
</div></div>
<div style={{background:"#fff",borderRadius:12,padding:8,marginTop:8,height:150,overflow:"auto"}}>
{m.map((x,i)=><div key={i} style={{background:"#ffe4e6",padding:6,borderRadius:10,margin:4}}>{x}</div>)}
</div>
<div style={{display:"flex",gap:5,marginTop:5}}>
<input value={t} onChange={e=>setT(e.target.value)} style={{flex:1,padding:10,borderRadius:20,border:"1px solid pink"}} placeholder="Digite..." />
<button onClick={()=>{if(t){setM([...m,t]);setT("")}}} style={{background:"#ff4d6d",color:"#fff",border:0,borderRadius:20,padding:"0 15px"}}>Enviar</button>
</div>
<h3>🎮 Jogos 2x2</h3>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
<div style={{background:"#fff",padding:15,borderRadius:12,textAlign:"center"}}>❓ Quiz</div>
<div style={{background:"#fff",padding:15,borderRadius:12,textAlign:"center"}}>🎲 Verdade</div>
<div style={{background:"#fff",padding:15,borderRadius:12,textAlign:"center"}}>🧩 Puzzle</div>
<div style={{background:"#fff",padding:15,borderRadius:12,textAlign:"center"}}>💌 Carta</div>
</div>
<h3>💖 Planos</h3>
<div style={{background:"#fff",padding:12,borderRadius:12,border:"2px solid #ff4d6d",marginBottom:6}}>Premium R$29,99 - Vídeo + Jogos</div>
<div style={{background:"#fff",padding:12,borderRadius:12,border:"2px solid gold"}}>VIP R$59,99 - Tudo ilimitado</div>
</div>)}

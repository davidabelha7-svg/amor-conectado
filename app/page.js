export default function Page() {
  return (
    <div style={{background:"#0a0614", minHeight:"100vh", color:"white", padding:"40px 20px", fontFamily:"Arial", textAlign:"center"}}>
      <h1 style={{fontSize:"48px", color:"#ff4d8d"}}>Amor Conectado 💖</h1>
      <p>Reconecte seu relacionamento em 7 dias</p>
      <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"40px", flexWrap:"wrap"}}>
        <div style={{border:"2px solid #333", padding:"24px", borderRadius:"16px", width:"280px"}}>
          <h2>Essencial</h2>
          <p style={{fontSize:"32px", fontWeight:"bold"}}>R$ 29,90</p>
          <a href="#" style={{display:"block", background:"#333", color:"white", padding:"12px", borderRadius:"8px", textDecoration:"none", marginTop:"16px"}}>Começar Agora</a>
        </div>
        <div style={{border:"2px solid #ff4d8d", padding:"24px", borderRadius:"16px", width:"280px", background:"#1a0a14"}}>
          <h2>VIP Completo ⭐</h2>
          <p style={{fontSize:"32px", fontWeight:"bold", color:"#ff4d8d"}}>R$ 49,90</p>
          <a href="#" style={{display:"block", background:"#ff4d8d", color:"white", padding:"12px", borderRadius:"8px", textDecoration:"none", marginTop:"16px"}}>Quero VIP</a>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from "react";

const G = "#F5A100";
const N = "#0a0f1c";
const T = "#00E5BE";
const B = "#3B9EFF";
const PU = "#8B5CF6";

const StatusBar = () => (
  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 20px 0", fontSize:11, fontWeight:700, color:"#fff" }}>
    <span style={{letterSpacing:0.3}}>9:41</span>
    <div style={{display:"flex",alignItems:"center",gap:5}}>
      <svg width="14" height="10" viewBox="0 0 14 10">
        <rect x="0" y="6" width="2.5" height="4" rx="0.8" fill="white" opacity="0.45"/>
        <rect x="3.8" y="4" width="2.5" height="6" rx="0.8" fill="white" opacity="0.65"/>
        <rect x="7.6" y="2" width="2.5" height="8" rx="0.8" fill="white" opacity="0.85"/>
        <rect x="11.4" y="0" width="2.5" height="10" rx="0.8" fill="white"/>
      </svg>
      <svg width="14" height="10" viewBox="0 0 14 10">
        <circle cx="7" cy="9" r="1.3" fill="white"/>
        <path d="M3.5 6.5 Q7 3 10.5 6.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <path d="M0.8 3.8 Q7 -0.5 13.2 3.8" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      </svg>
      <svg width="22" height="11" viewBox="0 0 22 11">
        <rect x="0" y="1" width="18.5" height="9" rx="2" stroke="white" strokeWidth="1" fill="none"/>
        <rect x="19" y="3.5" width="2.5" height="4" rx="1" fill="white" opacity="0.5"/>
        <rect x="1.5" y="2.5" width="14" height="6" rx="1" fill="white"/>
      </svg>
    </div>
  </div>
);

const DynIsland = () => (
  <div style={{display:"flex",justifyContent:"center",marginTop:6}}>
    <div style={{width:115,height:33,background:"#000",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:9,height:9,borderRadius:"50%",background:"#1c1c1c",border:"1.5px solid #2a2a2a"}}/>
    </div>
  </div>
);

const HomeBar = () => (
  <div style={{display:"flex",justifyContent:"center",padding:"6px 0 8px"}}>
    <div style={{width:115,height:4,background:"rgba(255,255,255,0.28)",borderRadius:4}}/>
  </div>
);

const NavRow = ({ label }) => (
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",borderBottom:"1px solid rgba(245,161,0,0.12)"}}>
    <div style={{width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#1a2a5e,#0f1a38)",border:`1.5px solid ${G}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:900,color:G,letterSpacing:-0.5}}>MSA</div>
    <span style={{color:"#fff",fontSize:11,fontWeight:700}}>{label}</span>
    <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13}}>🔔</div>
  </div>
);

/* ── SCREEN 1 ─ Welcome ─────────────────────────────── */
const Screen1 = () => (
  <div style={{flex:1,display:"flex",flexDirection:"column",background:`linear-gradient(180deg,#0d1530 0%,${N} 60%)`,position:"relative",overflow:"hidden"}}>
    <NavRow label="More Success Academy"/>
    {/* skyline silhouette */}
    <svg style={{position:"absolute",bottom:0,left:0,right:0,width:"100%",opacity:0.08}} height="90" viewBox="0 0 260 90" preserveAspectRatio="none">
      <rect x="0" y="40" width="18" height="50" fill="white"/>
      <rect x="20" y="25" width="14" height="65" fill="white"/>
      <rect x="36" y="50" width="12" height="40" fill="white"/>
      <rect x="50" y="10" width="20" height="80" fill="white"/>
      <rect x="72" y="35" width="16" height="55" fill="white"/>
      <rect x="90" y="55" width="10" height="35" fill="white"/>
      <rect x="102" y="15" width="22" height="75" fill="white"/>
      <rect x="126" y="42" width="14" height="48" fill="white"/>
      <rect x="142" y="30" width="18" height="60" fill="white"/>
      <rect x="162" y="50" width="12" height="40" fill="white"/>
      <rect x="176" y="8" width="24" height="82" fill="white"/>
      <rect x="202" y="38" width="16" height="52" fill="white"/>
      <rect x="220" y="28" width="14" height="62" fill="white"/>
      <rect x="236" y="48" width="24" height="42" fill="white"/>
    </svg>
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 20px",gap:14}}>
      {/* AI mascot */}
      <div style={{width:80,height:80,borderRadius:24,background:`linear-gradient(135deg,#1a2a6c,#0f1a38)`,border:`2px solid ${G}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,boxShadow:`0 0 30px rgba(245,161,0,0.3)`,marginBottom:4}}>🤖</div>
      <div style={{background:`linear-gradient(135deg,rgba(245,161,0,0.15),rgba(245,161,0,0.05))`,border:`1px solid rgba(245,161,0,0.3)`,borderRadius:8,padding:"4px 12px"}}>
        <span style={{color:G,fontSize:10,fontWeight:700,letterSpacing:1}}>AFRICA'S FIRST AGENTIC AI LMS</span>
      </div>
      <div style={{textAlign:"center"}}>
        <div style={{color:"#fff",fontSize:22,fontWeight:900,lineHeight:1.2,letterSpacing:-0.5}}>Welcome to<br/><span style={{color:G}}>More Success</span><br/>Academy</div>
      </div>
      <p style={{color:"rgba(255,255,255,0.55)",fontSize:11,textAlign:"center",lineHeight:1.5,margin:0}}>Your personal AI tutor Abia is ready.<br/>Train · Certify · Get Hired.</p>
      <div style={{width:"100%",background:G,borderRadius:14,padding:"13px",textAlign:"center",marginTop:8,boxShadow:`0 4px 20px rgba(245,161,0,0.4)`}}>
        <span style={{color:"#000",fontWeight:900,fontSize:14,letterSpacing:0.5}}>Get Started →</span>
      </div>
      <p style={{color:"rgba(255,255,255,0.3)",fontSize:10,margin:0}}>Already a member? <span style={{color:G}}>Sign In</span></p>
    </div>
  </div>
);

/* ── SCREEN 2 ─ Goal Selection ──────────────────────── */
const goals = [
  { icon:"🔄", label:"Career Switch", color:"#3B9EFF" },
  { icon:"🚀", label:"Start a Business", color:"#00E5BE" },
  { icon:"⚡", label:"Skill Upgrade", color:PU },
  { icon:"💻", label:"Women in Tech & Business", color:G, highlight:true },
];
const Screen2 = () => (
  <div style={{flex:1,display:"flex",flexDirection:"column",background:N,overflow:"hidden"}}>
    <NavRow label="Choose Your Goal"/>
    <div style={{padding:"14px 16px",display:"flex",flexDirection:"column",gap:10,flex:1}}>
      <div style={{marginBottom:4}}>
        <div style={{color:"#fff",fontSize:16,fontWeight:800}}>What's your goal?</div>
        <div style={{color:"rgba(255,255,255,0.45)",fontSize:11,marginTop:2}}>Abia will personalise your learning path</div>
      </div>
      {/* Avatar row */}
      <div style={{display:"flex",gap:8,marginBottom:4}}>
        {["👩🏾‍💼","👨🏿‍💻","👩🏽‍🎓","👨🏾‍🔬"].map((e,i)=>(
          <div key={i} style={{width:38,height:38,borderRadius:"50%",background:"rgba(255,255,255,0.06)",border:"1.5px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>{e}</div>
        ))}
        <div style={{flex:1,display:"flex",alignItems:"center",paddingLeft:4}}>
          <span style={{color:"rgba(255,255,255,0.4)",fontSize:10}}>3,200+ learners joined</span>
        </div>
      </div>
      {goals.map((g,i)=>(
        <div key={i} style={{
          background: g.highlight ? `linear-gradient(135deg,rgba(245,161,0,0.2),rgba(245,161,0,0.08))` : "rgba(255,255,255,0.04)",
          border: g.highlight ? `1.5px solid ${G}` : "1.5px solid rgba(255,255,255,0.08)",
          borderRadius:14,
          padding:"12px 14px",
          display:"flex",
          alignItems:"center",
          gap:12,
          boxShadow: g.highlight ? `0 4px 16px rgba(245,161,0,0.2)` : "none",
        }}>
          <div style={{width:38,height:38,borderRadius:12,background:`${g.color}18`,border:`1.5px solid ${g.color}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{g.icon}</div>
          <div style={{flex:1}}>
            <div style={{color: g.highlight ? G : "#fff",fontSize:12,fontWeight:700}}>{g.label}</div>
            {g.highlight && <div style={{color:"rgba(255,255,255,0.5)",fontSize:10,marginTop:2}}>Most popular ✨</div>}
          </div>
          {g.highlight && <div style={{width:20,height:20,borderRadius:"50%",background:G,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#000",fontWeight:900}}>✓</div>}
        </div>
      ))}
      <div style={{marginTop:"auto",background:G,borderRadius:14,padding:"12px",textAlign:"center",boxShadow:`0 4px 16px rgba(245,161,0,0.35)`}}>
        <span style={{color:"#000",fontWeight:900,fontSize:13}}>Continue →</span>
      </div>
    </div>
  </div>
);

/* ── SCREEN 3 ─ AI Assessment ───────────────────────── */
const options = ["Complete Beginner","Some Experience","Intermediate","Advanced"];
const Screen3 = () => {
  const [sel,setSel] = useState(1);
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:N,overflow:"hidden"}}>
      <NavRow label="AI Assessment"/>
      <div style={{padding:"14px 16px",flex:1,display:"flex",flexDirection:"column",gap:12}}>
        {/* Progress */}
        <div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{color:"rgba(255,255,255,0.5)",fontSize:10}}>Assessment Progress</span>
            <span style={{color:G,fontSize:10,fontWeight:700}}>30%</span>
          </div>
          <div style={{height:4,background:"rgba(255,255,255,0.08)",borderRadius:4}}>
            <div style={{height:"100%",width:"30%",background:`linear-gradient(90deg,${G},#ffcc44)`,borderRadius:4}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
            {["Goal","Level","Topics","Schedule"].map((s,i)=>(
              <span key={i} style={{fontSize:9,color: i===1 ? G : "rgba(255,255,255,0.3)",fontWeight: i===1 ? 700 : 400}}>{s}</span>
            ))}
          </div>
        </div>
        {/* AI icon */}
        <div style={{display:"flex",alignItems:"center",gap:10,background:"rgba(245,161,0,0.06)",border:"1px solid rgba(245,161,0,0.15)",borderRadius:12,padding:"10px 12px"}}>
          <div style={{fontSize:22}}>🤖</div>
          <div>
            <div style={{color:G,fontSize:10,fontWeight:700}}>Abia AI · Assessing you</div>
            <div style={{color:"rgba(255,255,255,0.6)",fontSize:10,marginTop:1}}>Question 1 of 5</div>
          </div>
        </div>
        <div style={{color:"#fff",fontSize:14,fontWeight:700,lineHeight:1.4}}>What is your current skill level in your chosen career path?</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {options.map((o,i)=>(
            <div key={i} onClick={()=>setSel(i)} style={{
              background: sel===i ? `linear-gradient(135deg,rgba(245,161,0,0.18),rgba(245,161,0,0.06))` : "rgba(255,255,255,0.04)",
              border: sel===i ? `1.5px solid ${G}` : "1.5px solid rgba(255,255,255,0.08)",
              borderRadius:12,
              padding:"11px 14px",
              display:"flex",
              alignItems:"center",
              gap:10,
              cursor:"pointer",
            }}>
              <div style={{width:18,height:18,borderRadius:"50%",border:`2px solid ${sel===i ? G : "rgba(255,255,255,0.2)"}`,background: sel===i ? G : "transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {sel===i && <div style={{width:6,height:6,borderRadius:"50%",background:"#000"}}/>}
              </div>
              <span style={{color: sel===i ? G : "rgba(255,255,255,0.7)",fontSize:12,fontWeight: sel===i ? 700 : 400}}>{o}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:"auto",background:G,borderRadius:14,padding:"12px",textAlign:"center"}}>
          <span style={{color:"#000",fontWeight:900,fontSize:13}}>Continue →</span>
        </div>
      </div>
    </div>
  );
};

/* ── SCREEN 4 ─ Dashboard ───────────────────────────── */
const Screen4 = () => (
  <div style={{flex:1,display:"flex",flexDirection:"column",background:N,overflow:"auto"}}>
    <NavRow label="Dashboard"/>
    <div style={{padding:"12px 16px",display:"flex",flexDirection:"column",gap:12}}>
      {/* Greeting */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{color:"rgba(255,255,255,0.5)",fontSize:10}}>GOOD MORNING 🌤️</div>
          <div style={{color:"#fff",fontSize:15,fontWeight:800,marginTop:2}}>Chiamaka 👋</div>
        </div>
        <div style={{width:38,height:38,borderRadius:"50%",background:`linear-gradient(135deg,${G},#ffcc44)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,boxShadow:`0 4px 12px rgba(245,161,0,0.4)`}}>👩🏾</div>
      </div>
      {/* Progress card */}
      <div style={{background:`linear-gradient(135deg,#1a2a5e,#0f1a38)`,border:`1px solid rgba(245,161,0,0.2)`,borderRadius:16,padding:"14px",display:"flex",gap:14,alignItems:"center"}}>
        {/* Ring */}
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="7" fill="none"/>
          <circle cx="32" cy="32" r="26" stroke={G} strokeWidth="7" fill="none" strokeDasharray="163.4" strokeDashoffset="57" strokeLinecap="round" transform="rotate(-90 32 32)"/>
          <text x="32" y="32" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" dy="4">65%</text>
        </svg>
        <div style={{flex:1}}>
          <div style={{color:G,fontSize:10,fontWeight:700}}>YOUR CAREER ROADMAP</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:700,marginTop:3}}>Data Scientist</div>
          <div style={{color:"rgba(255,255,255,0.5)",fontSize:10,marginTop:3}}>13 of 20 modules complete</div>
          <div style={{marginTop:6,display:"flex",gap:4}}>
            {["ML","Stats","Python","SQL"].map((t,i)=>(
              <div key={i} style={{background:"rgba(245,161,0,0.12)",border:`1px solid rgba(245,161,0,0.25)`,borderRadius:6,padding:"2px 6px",fontSize:9,color:G,fontWeight:600}}>{t}</div>
            ))}
          </div>
        </div>
      </div>
      {/* Skill tree preview */}
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,padding:"12px"}}>
        <div style={{color:"rgba(255,255,255,0.5)",fontSize:9,fontWeight:700,letterSpacing:1,marginBottom:8}}>SKILL TREE</div>
        <svg width="228" height="80" viewBox="0 0 228 80">
          {/* Connections */}
          <line x1="114" y1="16" x2="58" y2="44" stroke="rgba(245,161,0,0.3)" strokeWidth="1.5"/>
          <line x1="114" y1="16" x2="114" y2="44" stroke="rgba(245,161,0,0.3)" strokeWidth="1.5"/>
          <line x1="114" y1="16" x2="170" y2="44" stroke="rgba(245,161,0,0.3)" strokeWidth="1.5"/>
          <line x1="58" y1="60" x2="30" y2="76" stroke="rgba(59,158,255,0.3)" strokeWidth="1.5"/>
          <line x1="58" y1="60" x2="86" y2="76" stroke="rgba(59,158,255,0.3)" strokeWidth="1.5"/>
          <line x1="170" y1="60" x2="142" y2="76" stroke="rgba(0,229,190,0.3)" strokeWidth="1.5"/>
          <line x1="170" y1="60" x2="198" y2="76" stroke="rgba(0,229,190,0.3)" strokeWidth="1.5"/>
          {/* Nodes */}
          <circle cx="114" cy="16" r="13" fill={`${G}22`} stroke={G} strokeWidth="2"/>
          <text x="114" y="20" textAnchor="middle" fill={G} fontSize="9" fontWeight="800">ML</text>
          <circle cx="58" cy="52" r="11" fill={`${B}22`} stroke={B} strokeWidth="2"/>
          <text x="58" y="56" textAnchor="middle" fill={B} fontSize="8" fontWeight="700">Stats</text>
          <circle cx="114" cy="52" r="11" fill={`${B}22`} stroke={B} strokeWidth="2"/>
          <text x="114" y="56" textAnchor="middle" fill={B} fontSize="8" fontWeight="700">Py</text>
          <circle cx="170" cy="52" r="11" fill={`${T}22`} stroke={T} strokeWidth="2"/>
          <text x="170" y="56" textAnchor="middle" fill={T} fontSize="8" fontWeight="700">SQL</text>
          <circle cx="30" cy="76" r="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <circle cx="86" cy="76" r="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <circle cx="142" cy="76" r="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <circle cx="198" cy="76" r="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        </svg>
      </div>
      {/* Recommended */}
      <div>
        <div style={{color:"rgba(255,255,255,0.5)",fontSize:9,fontWeight:700,letterSpacing:1,marginBottom:8}}>RECOMMENDED FOR YOU</div>
        {[
          {icon:"📊",title:"Business Analytics",sub:"Module 7 · 25 min",prog:40,color:B},
          {icon:"🐍",title:"Python for Data",sub:"Module 3 · 18 min",prog:72,color:T},
        ].map((c,i)=>(
          <div key={i} style={{display:"flex",gap:10,alignItems:"center",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 12px",marginBottom:6}}>
            <div style={{width:36,height:36,borderRadius:10,background:`${c.color}18`,border:`1.5px solid ${c.color}35`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{c.icon}</div>
            <div style={{flex:1}}>
              <div style={{color:"#fff",fontSize:11,fontWeight:700}}>{c.title}</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:10,marginTop:2}}>{c.sub}</div>
              <div style={{height:3,background:"rgba(255,255,255,0.07)",borderRadius:3,marginTop:5}}>
                <div style={{height:"100%",width:`${c.prog}%`,background:c.color,borderRadius:3}}/>
              </div>
            </div>
            <div style={{color:G,fontSize:18}}>▶</div>
          </div>
        ))}
      </div>
    </div>
    {/* Floating AI bubble */}
    <div style={{position:"absolute",bottom:60,right:14,width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${G},#ffcc44)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:`0 4px 18px rgba(245,161,0,0.5)`}}>🤖</div>
  </div>
);

/* ── SCREEN 5 ─ Lesson ──────────────────────────────── */
const Screen5 = () => (
  <div style={{flex:1,display:"flex",flexDirection:"column",background:N,overflow:"auto"}}>
    <NavRow label="Lesson"/>
    <div style={{padding:"0 16px 16px",display:"flex",flexDirection:"column",gap:12}}>
      {/* Video player */}
      <div style={{background:"#000",borderRadius:14,overflow:"hidden",position:"relative",aspectRatio:"16/9",display:"flex",alignItems:"center",justifyContent:"center",marginTop:12}}>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#0d1a3a,#1a2a5e)",opacity:0.9}}/>
        <div style={{position:"relative",zIndex:1,textAlign:"center"}}>
          <div style={{fontSize:10,color:G,fontWeight:700,marginBottom:4}}>MODULE 7 · BUSINESS ANALYTICS</div>
          <div style={{fontSize:12,color:"white",fontWeight:700}}>Market Research in Nigeria</div>
        </div>
        <div style={{position:"absolute",bottom:10,left:14,right:14}}>
          <div style={{height:2.5,background:"rgba(255,255,255,0.15)",borderRadius:2}}>
            <div style={{height:"100%",width:"45%",background:G,borderRadius:2}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
            <span style={{color:"rgba(255,255,255,0.5)",fontSize:9}}>4:32</span>
            <span style={{color:"rgba(255,255,255,0.5)",fontSize:9}}>10:08</span>
          </div>
        </div>
        <div style={{position:"absolute",width:42,height:42,borderRadius:"50%",background:"rgba(245,161,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 16px rgba(245,161,0,0.5)`}}>
          <svg width="14" height="16" viewBox="0 0 14 16"><path d="M2 1 L13 8 

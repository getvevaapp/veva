// @ts-nocheck
import { useState, useEffect, useRef } from 'react';

const apps = [
{ name: “Bloom”, icon: “🌸”, color: “#C96B8A”, desc: “Track symptoms daily and spot patterns that help you take control.”, tag: “Symptom Tracker” },
{ name: “Slumber”, icon: “🌙”, color: “#7B6FAA”, desc: “Guided wind-down routines, breathing exercises and sleep logging.”, tag: “Sleep Coach” },
{ name: “Nourish”, icon: “🌿”, color: “#5A8C56”, desc: “Weekly meal plans built around foods that support your hormones.”, tag: “Meal Planner” },
{ name: “Ember”, icon: “🔥”, color: “#C4522E”, desc: “An anonymous community of women and verified expert Q&A.”, tag: “Community” },
{ name: “Serene”, icon: “✨”, color: “#4A8A6A”, desc: “Meditations for brain fog, anxiety & sleep plus a clear HRT guide.”, tag: “Mindfulness” },
];

const stats = [
{ value: “1 in 2”, label: “women experience severe menopause symptoms” },
{ value: “7 yrs”, label: “average time women suffer before getting proper support” },
{ value: “40M+”, label: “women in menopause in the UK & US right now” },
];

const testimonials = [
{ text: “I finally feel like someone built something for me, not just ‘women in general’. This is exactly what I’ve been looking for.”, name: “Sarah, 51”, avatar: “🌸” },
{ text: “The HRT guide alone is worth everything. Clear, honest, no scaremongering. I walked into my doctor’s appointment with confidence for the first time.”, name: “Michelle, 48”, avatar: “💜” },
{ text: “The community made me cry happy tears. I thought I was going mad. Turns out thousands of us feel exactly the same.”, name: “Diane, 53”, avatar: “🌻” },
];

function useInView(ref) {
const [inView, setInView] = useState(false);
useEffect(() => {
const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
if (ref.current) obs.observe(ref.current);
return () => obs.disconnect();
}, []);
return inView;
}

function Section({ children, style }) {
const ref = useRef();
const inView = useInView(ref);
return (
<div ref={ref} style={{
opacity: inView ? 1 : 0,
transform: inView ? “translateY(0)” : “translateY(28px)”,
transition: “opacity 0.7s ease, transform 0.7s ease”,
…style,
}}>{children}</div>
);
}

export default function VevaLanding() {
const [email, setEmail] = useState(””);
const [submitted, setSubmitted] = useState(false);
const [count, setCount] = useState(1247);
const [menuOpen, setMenuOpen] = useState(false);

const handleSubmit = () => {
if (!email.includes(”@”)) return;
setSubmitted(true);
setCount(c => c + 1);
};

return (
<div style={{
minHeight: “100vh”,
background: “#0D0818”,
fontFamily: “‘Georgia’, ‘Times New Roman’, serif”,
color: “#F7F2ED”,
overflowX: “hidden”,
}}>
<style>{`@keyframes shimmer { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} } @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} } @keyframes float2 { 0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)} } @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-30px) scale(1.1)}66%{transform:translate(-20px,20px) scale(0.95)} } @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-50px,20px) scale(0.9)}66%{transform:translate(30px,-40px) scale(1.05)} } @keyframes twinkle { 0%,100%{opacity:0.2}50%{opacity:0.8} } @keyframes fadeIn { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} } @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(201,107,138,0.4)}70%{box-shadow:0 0 0 14px rgba(201,107,138,0)} } * { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } .cta-btn { transition: transform 0.2s, box-shadow 0.2s; } .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(201,107,138,0.5) !important; } .app-card { transition: transform 0.25s, box-shadow 0.25s; } .app-card:hover { transform: translateY(-6px); } .nav-link { transition: color 0.2s; } .nav-link:hover { color: #C96B8A !important; } input:focus { outline: none; border-color: #C96B8A !important; }`}</style>

```
  {/* NAV */}
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: "rgba(13,8,24,0.85)", backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(201,107,138,0.15)",
    padding: "0 24px", height: 64,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    maxWidth: "100%",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: "linear-gradient(135deg, #C96B8A, #7AAB78, #D4924A)",
        backgroundSize: "200% 200%", animation: "shimmer 4s ease infinite",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="18" height="18" viewBox="0 0 42 42" fill="none">
          {[0,60,120,180,240,300].map((r,i) => <ellipse key={i} cx="21" cy="10" rx="4" ry="7" fill="rgba(255,255,255,0.9)" transform={`rotate(${r} 21 21)`} />)}
          <circle cx="21" cy="21" r="5" fill="white" />
        </svg>
      </div>
      <span style={{ fontSize: 20, letterSpacing: 6, color: "#F7F2ED" }}>VEVA</span>
    </div>
    <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
      {["Apps", "About", "Community"].map(l => (
        <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ color: "rgba(247,242,237,0.6)", fontSize: 13, letterSpacing: 2, textDecoration: "none" }}>{l}</a>
      ))}
      <a href="#waitlist" style={{
        padding: "9px 20px", borderRadius: 20,
        background: "linear-gradient(135deg, #C96B8A, #a04868)",
        color: "#fff", fontSize: 13, textDecoration: "none", letterSpacing: 1,
        boxShadow: "0 4px 16px rgba(201,107,138,0.4)",
      }}>Join Waitlist</a>
    </div>
  </nav>

  {/* HERO */}
  <div style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 24px 80px", overflow: "hidden" }}>
    {/* Animated background orbs */}
    <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,107,138,0.12) 0%, transparent 65%)", animation: "orb1 12s ease-in-out infinite", pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,171,120,0.1) 0%, transparent 65%)", animation: "orb2 15s ease-in-out infinite", pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: "40%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,146,74,0.08) 0%, transparent 65%)", animation: "orb1 10s ease-in-out infinite reverse", pointerEvents: "none" }} />

    {/* Stars */}
    {Array.from({length:30},(_,i) => (
      <div key={i} style={{
        position: "absolute",
        left: `${(i * 37) % 100}%`, top: `${(i * 53) % 80}%`,
        width: i%3===0?2:1.5, height: i%3===0?2:1.5,
        borderRadius: "50%", background: "#fff",
        animation: `twinkle ${2+i%3}s ease-in-out infinite`,
        animationDelay: `${(i*0.3)%3}s`,
        pointerEvents: "none",
      }} />
    ))}

    <div style={{ textAlign: "center", maxWidth: 720, position: "relative", zIndex: 2 }}>
      {/* Logo mark */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32, animation: "float2 5s ease-in-out infinite" }}>
        <div style={{ position: "relative", width: 110, height: 110 }}>
          <svg width="110" height="110" style={{ position: "absolute", inset: 0 }}>
            <circle cx="55" cy="55" r="50" fill="none" stroke="rgba(201,107,138,0.3)" strokeWidth="1" strokeDasharray="5 7" />
            <circle cx="55" cy="55" r="42" fill="none" stroke="rgba(122,171,120,0.2)" strokeWidth="1" strokeDasharray="3 9" />
          </svg>
          <div style={{
            position: "absolute", inset: 14, borderRadius: "50%",
            background: "linear-gradient(135deg, #C96B8A 0%, #7AAB78 50%, #D4924A 100%)",
            backgroundSize: "200% 200%", animation: "shimmer 4s ease infinite",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 10px 40px rgba(201,107,138,0.5), 0 0 80px rgba(201,107,138,0.15)",
            animation: "shimmer 4s ease infinite, pulse 3s ease infinite",
          }}>
            <svg width="44" height="44" viewBox="0 0 42 42" fill="none">
              {[0,60,120,180,240,300].map((r,i) => <ellipse key={i} cx="21" cy="10" rx="4" ry="7" fill="rgba(255,255,255,0.9)" transform={`rotate(${r} 21 21)`} />)}
              <circle cx="21" cy="21" r="5.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand name */}
      <div style={{
        fontSize: "clamp(52px, 12vw, 96px)",
        letterSpacing: "0.18em",
        background: "linear-gradient(135deg, #C96B8A 0%, #F7C5A0 30%, #E8D5F0 60%, #7AAB78 100%)",
        backgroundSize: "300% 300%",
        animation: "shimmer 6s ease infinite",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        marginBottom: 16, lineHeight: 1,
        fontWeight: "400",
      }}>VEVA</div>

      <div style={{ fontSize: "clamp(14px, 2.5vw, 18px)", letterSpacing: 4, color: "rgba(201,107,138,0.8)", textTransform: "uppercase", marginBottom: 28 }}>
        Women's Wellness Suite
      </div>

      <div style={{ fontSize: "clamp(18px, 3vw, 26px)", color: "rgba(247,242,237,0.85)", lineHeight: 1.65, marginBottom: 16, fontStyle: "italic", maxWidth: 560, margin: "0 auto 16px" }}>
        "Every season of a woman's life deserves to be lived fully."
      </div>

      <div style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(247,242,237,0.55)", lineHeight: 1.7, marginBottom: 48, maxWidth: 500, margin: "0 auto 48px" }}>
        Five beautifully designed apps that help women navigate menopause with confidence, community, and calm.
      </div>

      {/* Waitlist form */}
      <div id="waitlist" style={{ maxWidth: 480, margin: "0 auto" }}>
        {submitted ? (
          <div style={{
            background: "rgba(122,171,120,0.15)", border: "1px solid rgba(122,171,120,0.4)",
            borderRadius: 20, padding: "24px 28px", animation: "fadeIn 0.4s ease",
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>💜</div>
            <div style={{ fontSize: 20, color: "#7AAB78", marginBottom: 8 }}>You're on the list!</div>
            <div style={{ fontSize: 14, color: "rgba(247,242,237,0.6)", lineHeight: 1.7 }}>
              You're number <strong style={{ color: "#C96B8A" }}>{count.toLocaleString()}</strong> on the VEVA waitlist. We'll be in touch before anyone else when we launch.
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", gap: 0, borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(201,107,138,0.25)", marginBottom: 14 }}>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                style={{
                  flex: 1, padding: "18px 22px",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,107,138,0.3)",
                  borderRight: "none", borderRadius: "20px 0 0 20px",
                  color: "#F7F2ED", fontSize: 15, fontFamily: "Georgia, serif",
                }}
              />
              <button onClick={handleSubmit} className="cta-btn" style={{
                padding: "18px 28px",
                background: "linear-gradient(135deg, #C96B8A, #a04868)",
                border: "none", color: "#fff", fontSize: 15,
                cursor: "pointer", fontFamily: "Georgia, serif",
                letterSpacing: 1, borderRadius: "0 20px 20px 0",
                whiteSpace: "nowrap",
              }}>Join Waitlist →</button>
            </div>
            <div style={{ fontSize: 12, color: "rgba(247,242,237,0.35)", letterSpacing: 1 }}>
              🔒 No spam. No selling your data. Just VEVA updates.
            </div>
          </div>
        )}
      </div>

      {/* Social proof */}
      <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <div style={{ display: "flex" }}>
          {["🌸","💜","🌿","🌻","🌊"].map((e,i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: "50%", fontSize: 16,
              background: "rgba(201,107,138,0.2)", border: "2px solid #0D0818",
              marginLeft: i > 0 ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center",
            }}>{e}</div>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "rgba(247,242,237,0.5)" }}>
          <strong style={{ color: "#C96B8A" }}>{count.toLocaleString()}</strong> women already waiting
        </div>
      </div>
    </div>
  </div>

  {/* STATS */}
  <Section style={{ background: "rgba(201,107,138,0.06)", borderTop: "1px solid rgba(201,107,138,0.1)", borderBottom: "1px solid rgba(201,107,138,0.1)", padding: "56px 24px" }}>
    <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, textAlign: "center" }}>
      {stats.map((s,i) => (
        <div key={i}>
          <div style={{
            fontSize: 44, fontWeight: "400", marginBottom: 10,
            background: "linear-gradient(135deg, #C96B8A, #D4924A)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>{s.value}</div>
          <div style={{ fontSize: 14, color: "rgba(247,242,237,0.55)", lineHeight: 1.6, letterSpacing: 0.5 }}>{s.label}</div>
        </div>
      ))}
    </div>
  </Section>

  {/* APPS */}
  <div id="apps" style={{ padding: "80px 24px" }}>
    <Section style={{ textAlign: "center", marginBottom: 56 }}>
      <div style={{ fontSize: 11, letterSpacing: 5, color: "#C96B8A", textTransform: "uppercase", marginBottom: 14 }}>The Suite</div>
      <div style={{ fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.2, marginBottom: 16, maxWidth: 560, margin: "0 auto 16px" }}>
        Five apps. One seamless journey.
      </div>
      <div style={{ fontSize: 16, color: "rgba(247,242,237,0.5)", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
        Every VEVA app works alone — and works even better together.
      </div>
    </Section>

    <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
      {apps.map((app,i) => (
        <Section key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="app-card" style={{
            background: "rgba(255,255,255,0.04)", border: `1px solid ${app.color}25`,
            borderRadius: 24, padding: "28px 24px",
            boxShadow: `0 4px 24px ${app.color}15`,
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 18, fontSize: 28,
              background: `linear-gradient(135deg, ${app.color}30, ${app.color}15)`,
              border: `1px solid ${app.color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 18, animation: `float ${3+i*0.3}s ease-in-out infinite`,
            }}>{app.icon}</div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: app.color, textTransform: "uppercase", marginBottom: 6 }}>
              VEVA {app.name}
            </div>
            <div style={{ fontSize: 11, color: "rgba(247,242,237,0.35)", marginBottom: 12, letterSpacing: 1 }}>{app.tag}</div>
            <div style={{ fontSize: 14, color: "rgba(247,242,237,0.65)", lineHeight: 1.7 }}>{app.desc}</div>
            <div style={{ marginTop: 20, height: 2, borderRadius: 1, background: `linear-gradient(90deg, ${app.color}, transparent)` }} />
          </div>
        </Section>
      ))}
    </div>
  </div>

  {/* ABOUT */}
  <div id="about" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
    <div style={{ maxWidth: 780, margin: "0 auto" }}>
      <Section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 5, color: "#C96B8A", textTransform: "uppercase", marginBottom: 14 }}>Why VEVA</div>
          <div style={{ fontSize: "clamp(24px, 4vw, 36px)", lineHeight: 1.3, marginBottom: 20 }}>
            Built for women who are done being dismissed.
          </div>
          <div style={{ fontSize: 15, color: "rgba(247,242,237,0.6)", lineHeight: 1.85, marginBottom: 20 }}>
            40 million women in the UK and US are navigating menopause. Most feel invisible. Their symptoms are minimised, their questions go unanswered, and the apps they find are either clinical or useless.
          </div>
          <div style={{ fontSize: 15, color: "rgba(247,242,237,0.6)", lineHeight: 1.85 }}>
            VEVA is different. Every feature was built with one question in mind: <em style={{ color: "rgba(247,242,237,0.85)" }}>what does this woman actually need right now?</em>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { icon: "🔬", title: "Evidence-Based", desc: "Every recommendation is grounded in current clinical research." },
            { icon: "🔒", title: "Private & Safe", desc: "Your data is yours. We never sell it. Community is 100% anonymous." },
            { icon: "💜", title: "Compassionate", desc: "No shame, no minimising, no toxic positivity. Just honest support." },
            { icon: "👩‍⚕️", title: "Expert-Backed", desc: "Verified specialists contribute to every VEVA app." },
          ].map((v,i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{v.icon}</span>
              <div>
                <div style={{ fontSize: 14, marginBottom: 3 }}>{v.title}</div>
                <div style={{ fontSize: 12, color: "rgba(247,242,237,0.45)", lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  </div>

  {/* TESTIMONIALS */}
  <div id="community" style={{ padding: "80px 24px" }}>
    <Section style={{ textAlign: "center", marginBottom: 48 }}>
      <div style={{ fontSize: 11, letterSpacing: 5, color: "#C96B8A", textTransform: "uppercase", marginBottom: 14 }}>Early Voices</div>
      <div style={{ fontSize: "clamp(24px, 4vw, 38px)", lineHeight: 1.3 }}>Women who tried the preview</div>
    </Section>
    <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
      {testimonials.map((t,i) => (
        <Section key={i}>
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,107,138,0.15)",
            borderRadius: 24, padding: "28px 24px", height: "100%",
          }}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>{t.avatar}</div>
            <div style={{ fontSize: 15, color: "rgba(247,242,237,0.8)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>
              "{t.text}"
            </div>
            <div style={{ fontSize: 13, color: "#C96B8A", letterSpacing: 1 }}>— {t.name}</div>
          </div>
        </Section>
      ))}
    </div>
  </div>

  {/* FINAL CTA */}
  <Section style={{ padding: "80px 24px 100px" }}>
    <div style={{
      maxWidth: 680, margin: "0 auto", textAlign: "center",
      background: "linear-gradient(135deg, rgba(201,107,138,0.12) 0%, rgba(74,56,112,0.2) 50%, rgba(122,171,120,0.1) 100%)",
      border: "1px solid rgba(201,107,138,0.2)",
      borderRadius: 32, padding: "60px 40px",
    }}>
      <div style={{ fontSize: 48, marginBottom: 20, animation: "float 4s ease-in-out infinite" }}>🌸</div>
      <div style={{ fontSize: "clamp(22px, 4vw, 36px)", lineHeight: 1.3, marginBottom: 16 }}>
        You deserve to thrive through every season.
      </div>
      <div style={{ fontSize: 16, color: "rgba(247,242,237,0.55)", lineHeight: 1.7, marginBottom: 40, maxWidth: 420, margin: "0 auto 40px" }}>
        Join the waitlist today and be the first to access VEVA when we launch. Free early access for all founding members.
      </div>

      {submitted ? (
        <div style={{
          background: "rgba(122,171,120,0.15)", border: "1px solid rgba(122,171,120,0.4)",
          borderRadius: 20, padding: "22px 28px",
        }}>
          <div style={{ fontSize: 18, color: "#7AAB78" }}>💜 You're already on the list!</div>
        </div>
      ) : (
        <div style={{ maxWidth: 460, margin: "0 auto" }}>
          <div style={{ display: "flex", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(201,107,138,0.3)", marginBottom: 14 }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              style={{
                flex: 1, padding: "18px 20px",
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,107,138,0.3)",
                borderRight: "none", borderRadius: "20px 0 0 20px",
                color: "#F7F2ED", fontSize: 15, fontFamily: "Georgia, serif",
              }} />
            <button onClick={handleSubmit} className="cta-btn" style={{
              padding: "18px 24px",
              background: "linear-gradient(135deg, #C96B8A, #a04868)",
              border: "none", color: "#fff", fontSize: 15,
              cursor: "pointer", fontFamily: "Georgia, serif",
              borderRadius: "0 20px 20px 0",
            }}>Join Free →</button>
          </div>
          <div style={{ fontSize: 12, color: "rgba(247,242,237,0.3)" }}>Free early access · No credit card · No spam</div>
        </div>
      )}
    </div>
  </Section>

  {/* FOOTER */}
  <footer style={{
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "32px 24px", textAlign: "center",
  }}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: "linear-gradient(135deg, #C96B8A, #7AAB78)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="14" height="14" viewBox="0 0 42 42" fill="none">
          {[0,60,120,180,240,300].map((r,i) => <ellipse key={i} cx="21" cy="10" rx="4" ry="7" fill="rgba(255,255,255,0.9)" transform={`rotate(${r} 21 21)`} />)}
          <circle cx="21" cy="21" r="5" fill="white" />
        </svg>
      </div>
      <span style={{ fontSize: 16, letterSpacing: 5, color: "rgba(247,242,237,0.6)" }}>VEVA</span>
    </div>
    <div style={{ fontSize: 12, color: "rgba(247,242,237,0.25)", letterSpacing: 1 }}>
      © 2026 VEVA Women's Wellness · Every season. Fully lived.
    </div>
  </footer>
</div>
```

);
}

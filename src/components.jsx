// ── Shared UI Components — Dark Emerald/Amber Theme ────────────

const { useState, useEffect, useRef, useCallback } = React;

// ── useMobile hook ───────────────────────────────────────────────
function useMobile() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return { isMobile: w < 768, isTablet: w < 1024 };
}

// ── Icons ────────────────────────────────────────────────────────
const Icon = {
  ArrowRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ArrowLeft: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  ArrowUpRight: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M7 17L17 7M7 7h10v10"/></svg>,
  Mail: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Github: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" style={p.style}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  LinkedIn: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="currentColor" style={p.style}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  ExternalLink: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Menu: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" style={p.style}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={p.style}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Check: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={p.style}><polyline points="20 6 9 17 4 12"/></svg>,
  TrendingUp: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  Brain: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>,
  BarChart: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  Eye: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  Code: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Cpu: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2"/></svg>,
  Lightbulb: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
  Target: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Layers: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>,
  Sparkles: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  MapPin: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  BookOpen: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  GitBranch: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
  Briefcase: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  GraduationCap: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Send: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={p.style}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
  Database: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={p.style}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
};

// ── Navbar ────────────────────────────────────────────────────────
function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile } = useMobile();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Close mobile menu on page change
  useEffect(() => { setMobileOpen(false); }, [currentPage]);

  const links = ['home', 'projects', 'about', 'contact'];
  const nav = (page) => { onNavigate(page); setMobileOpen(false); };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      background: scrolled || mobileOpen ? 'rgba(8,8,8,0.97)' : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '0 20px' : '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div onClick={() => nav('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>
          <span className="syne" style={{ fontSize: 20, fontWeight: 800, color: '#f2f0eb', letterSpacing: '-0.04em' }}>Younes</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#f59e0b)', marginLeft: 3, marginBottom: 12, display: 'inline-block' }} />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {links.map(l => (
              <span key={l} onClick={() => nav(l)} style={{
                padding: '7px 16px', borderRadius: 8, fontSize: 13.5, fontWeight: 500,
                cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.2s',
                color: currentPage === l ? '#f2f0eb' : 'rgba(242,240,235,0.4)',
                background: currentPage === l ? 'rgba(255,255,255,0.07)' : 'transparent',
                letterSpacing: '0.01em',
              }}
                onMouseEnter={e => { if (currentPage !== l) e.currentTarget.style.color = 'rgba(242,240,235,0.75)'; }}
                onMouseLeave={e => { if (currentPage !== l) e.currentTarget.style.color = 'rgba(242,240,235,0.4)'; }}>
                {l}
              </span>
            ))}
            <div onClick={() => nav('contact')} style={{
              marginLeft: 8, padding: '8px 20px', borderRadius: 8, cursor: 'pointer',
              background: 'linear-gradient(135deg, #10b981, #f59e0b)',
              fontSize: 13.5, fontWeight: 700, color: '#080808',
              letterSpacing: '0.01em', transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(16,185,129,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(16,185,129,0.3)'; }}>
              Hire Me
            </div>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#f2f0eb', padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {mobileOpen ? <Icon.X size={22} /> : <Icon.Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile full-screen menu */}
      {isMobile && mobileOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
          background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)',
          zIndex: 99, display: 'flex', flexDirection: 'column', padding: '32px 24px',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <div key={l} onClick={() => nav(l)} style={{
              padding: '20px 4px', fontSize: 32, fontWeight: 800,
              color: currentPage === l ? '#10b981' : 'rgba(242,240,235,0.8)',
              cursor: 'pointer', textTransform: 'capitalize',
              fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              transition: 'color 0.2s',
            }}>
              {l}
            </div>
          ))}
          <div onClick={() => nav('contact')} style={{
            marginTop: 32, padding: '18px', borderRadius: 14,
            background: 'linear-gradient(135deg, #10b981, #f59e0b)',
            fontSize: 18, fontWeight: 700, color: '#080808',
            textAlign: 'center', cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(16,185,129,0.35)',
          }}>
            Hire Me
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────
function Footer({ onNavigate }) {
  const { isMobile } = useMobile();
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '40px 20px 28px' : '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
          <div>
            <div className="syne" style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, letterSpacing: '-0.03em' }}>
              Younes<span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#f59e0b)', display: 'inline-block', marginLeft: 3, marginBottom: 4 }} />
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(242,240,235,0.35)', maxWidth: 220, lineHeight: 1.7 }}>AI & Data Analytics professional building data-driven solutions.</p>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 40 : 60 }}>
            {[
              { title: 'Navigate', items: [['Home', 'home'], ['Projects', 'projects'], ['About', 'about'], ['Contact', 'contact']] },
              { title: 'Connect', items: [['GitHub', 'https://github.com/YounesSoul'], ['LinkedIn', 'https://linkedin.com/in/younes-soulaiman-201b9a241/'], ['Email', 'mailto:topmind.youness@gmail.com']] },
            ].map(col => (
              <div key={col.title}>
                <div className="syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.25)', marginBottom: 16 }}>{col.title}</div>
                {col.items.map(([label, href]) => (
                  <div key={label} onClick={() => href.startsWith('http') || href.startsWith('mailto') ? window.open(href, '_blank') : onNavigate(href)}
                    style={{ fontSize: 13.5, color: 'rgba(242,240,235,0.4)', marginBottom: 10, cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,240,235,0.4)'}>
                    {label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(242,240,235,0.2)' }}>© 2026 Younes Soulaiman</span>
          <span style={{ fontSize: 12, color: 'rgba(242,240,235,0.2)' }}>Built with React · Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}

// ── AnimateIn ────────────────────────────────────────────────────
function AnimateIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}>
      {children}
    </div>
  );
}

// ── CountUp ──────────────────────────────────────────────────────
function CountUp({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const isFloat = String(target).includes('.');
        const num = parseFloat(target);
        const dur = 1600; const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setCount(isFloat ? (num * ease).toFixed(2) : Math.round(num * ease));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ── Lightbox ─────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, objectFit: 'contain', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }} />
      <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>×</button>
    </div>
  );
}

// ── GradientButton ───────────────────────────────────────────────
function GradBtn({ children, onClick, href, outline = false, size = 'md' }) {
  const pad = size === 'sm' ? '8px 20px' : '12px 28px';
  const fs = size === 'sm' ? 13 : 14.5;
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: pad, borderRadius: 10, cursor: 'pointer',
    fontSize: fs, fontWeight: 700, textDecoration: 'none',
    transition: 'all 0.25s ease', fontFamily: 'Syne, sans-serif',
    letterSpacing: '0.01em',
  };
  const filled = { ...base, background: 'linear-gradient(135deg,#10b981,#f59e0b)', color: '#080808', border: 'none', boxShadow: '0 4px 24px rgba(16,185,129,0.3)' };
  const outl = { ...base, background: 'transparent', color: '#f2f0eb', border: '1px solid rgba(255,255,255,0.15)' };

  const style = outline ? outl : filled;
  const hoverIn = (e) => {
    if (outline) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }
    else { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.45)'; }
  };
  const hoverOut = (e) => {
    if (outline) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }
    else { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(16,185,129,0.3)'; }
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</a>;
  return <div style={style} onClick={onClick} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</div>;
}

// ── Tag ──────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span style={{ display: 'inline-block', padding: '4px 11px', borderRadius: 6, fontSize: 11, fontWeight: 600, background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', letterSpacing: '0.02em' }}>
      {children}
    </span>
  );
}

Object.assign(window, { useMobile, Navbar, Footer, AnimateIn, CountUp, Lightbox, GradBtn, Tag, Icon });

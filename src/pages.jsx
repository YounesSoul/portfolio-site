// ── Pages — Dark Emerald/Amber Theme ───────────────────────────

// ══════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════

function HeroSection({ onNavigate }) {
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });
  const [tick, setTick] = React.useState(0);
  const { isMobile } = useMobile();

  React.useEffect(() => {
    const h = (e) => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#080808' }}>

      {/* Dot grid background */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0 }} />

      {/* Gradient orbs — mouse-tracked (desktop only) */}
      {!isMobile && <>
        <div style={{
          position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
          width: 700, height: 700,
          left: `calc(${mouse.x * 100}% - 350px)`,
          top: `calc(${mouse.y * 100}% - 350px)`,
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)',
          transition: 'left 1.2s cubic-bezier(0.22,1,0.36,1), top 1.2s cubic-bezier(0.22,1,0.36,1)'
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
          width: 500, height: 500,
          right: `calc(${(1 - mouse.x) * 60}% - 100px)`,
          bottom: `calc(${(1 - mouse.y) * 50}% - 50px)`,
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)',
          transition: 'right 1.8s cubic-bezier(0.22,1,0.36,1), bottom 1.8s cubic-bezier(0.22,1,0.36,1)'
        }} />
      </>}

      {/* Static glow on mobile */}
      {isMobile && <>
        <div style={{ position: 'absolute', top: '10%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </>}

      {/* Large decorative YS — desktop only */}
      {!isMobile && (
        <div className="syne" style={{
          position: 'absolute', right: '-2%', top: '8%',
          fontSize: 'clamp(180px, 22vw, 340px)', fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
          letterSpacing: '-0.06em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none'
        }}>YS</div>
      )}

      {/* Floating abstract decoration — desktop only */}
      {!isMobile && (
        <svg style={{ position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', opacity: 0.08, pointerEvents: 'none' }} width="320" height="320" viewBox="0 0 320 320">
          <circle cx="160" cy="160" r="140" stroke="#10b981" strokeWidth="1" fill="none" strokeDasharray="4 8" />
          <circle cx="160" cy="160" r="100" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="2 6" />
          <circle cx="160" cy="160" r="60" stroke="#10b981" strokeWidth="1" fill="none" />
          <line x1="20" y1="160" x2="300" y2="160" stroke="#f59e0b" strokeWidth="0.5" />
          <line x1="160" y1="20" x2="160" y2="300" stroke="#10b981" strokeWidth="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
            const r = [140, 100, 120, 80, 140, 100, 60, 120][i];
            const x = 160 + r * Math.cos(a * Math.PI / 180);
            const y = 160 + r * Math.sin(a * Math.PI / 180);
            return <circle key={a} cx={x} cy={y} r="3" fill={i % 2 === 0 ? '#10b981' : '#f59e0b'} />;
          })}
        </svg>
      )}

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to top, #080808, transparent)', pointerEvents: 'none' }} />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: isMobile ? '96px 20px 64px' : '110px 32px 72px', width: '100%' }}>

        {/* TOP ROW: text + photo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 300px',
          gap: isMobile ? 36 : 64,
          alignItems: 'flex-start',
          marginBottom: isMobile ? 40 : 56,
        }}>

          {/* LEFT: pill + headline + subtitle + CTAs */}
          <div style={{ order: isMobile ? 2 : 1 }}>
            <div className="fade-up" style={{ animationDelay: '0.05s', marginBottom: 24 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 99, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', fontSize: 12, fontWeight: 600, color: '#10b981', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                <span style={{ position: 'relative', width: 8, height: 8 }}>
                  <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', animation: 'ping 1.5s infinite' }} />
                  <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                </span>
                Available for opportunities · UAE
              </span>
            </div>

            <div className="fade-up" style={{ animationDelay: '0.15s' }}>
              <h1 className="syne" style={{ fontSize: isMobile ? 'clamp(44px, 13vw, 64px)' : 'clamp(46px, 6.5vw, 88px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 0 }}>
                <span style={{ display: 'block', color: '#f2f0eb' }}>Turning</span>
                <span style={{ display: 'block' }}>
                  <span className="grad-text">Data</span>
                  <span style={{ color: 'rgba(242,240,235,0.15)', margin: '0 0.15em' }}>into</span>
                </span>
                <span style={{ display: 'block', color: '#f2f0eb' }}>Decisions.</span>
              </h1>
            </div>

            <div className="fade-up" style={{ animationDelay: '0.3s', marginTop: 28 }}>
              <p style={{ fontSize: isMobile ? 15 : 'clamp(14px,1.4vw,16px)', color: 'rgba(242,240,235,0.45)', lineHeight: 1.8, maxWidth: 460, marginBottom: 24 }}>
                I'm <strong style={{ color: '#f2f0eb', fontWeight: 600 }}>Younes</strong> — AI & Data Analytics specialist. I build end-to-end ML pipelines, Power BI dashboards, and computer vision systems that create measurable business impact.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <GradBtn onClick={() => onNavigate('projects')}>View Projects <Icon.ArrowRight size={15} /></GradBtn>
                <GradBtn outline onClick={() => onNavigate('about')}>About Me</GradBtn>
                <GradBtn outline href="https://github.com/YounesSoul"><Icon.Github size={14} /> GitHub</GradBtn>
              </div>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="fade-up" style={{ animationDelay: '0.2s', position: 'relative', order: isMobile ? 1 : 2, maxWidth: isMobile ? 280 : '100%', margin: isMobile ? '0 auto' : 0, width: '100%' }}>
            <div style={{ position: 'absolute', inset: -2, borderRadius: 22, background: 'linear-gradient(135deg, #10b981, #f59e0b, #10b981)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 2, borderRadius: 20, background: '#080808', zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2, width: '100%', height: isMobile ? 300 : 420, borderRadius: 18, overflow: 'hidden' }}>
              <img src="assets/images/younes.jpeg" alt="Younes Soulaiman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 38%', display: 'block', filter: 'brightness(0.88) contrast(1.05) saturate(0.95)', transform: 'scale(1.9)', transformOrigin: 'center 42%' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 130, background: 'linear-gradient(to top, rgba(8,8,8,0.78), transparent)' }} />
              <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, padding: '11px 14px', borderRadius: 11, background: 'rgba(8,8,8,0.72)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.09)' }}>
                <div className="syne" style={{ fontSize: 13.5, fontWeight: 800, color: '#f2f0eb', letterSpacing: '-0.01em' }}>Younes Soulaiman</div>
                <div style={{ fontSize: 11, color: 'rgba(242,240,235,0.4)', marginTop: 2 }}>AI & Data Analytics</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: -10, right: -10, width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#10b981,#f59e0b)', boxShadow: '0 0 16px rgba(16,185,129,0.6)', zIndex: 3 }} />
          </div>
        </div>

        {/* BOTTOM ROW: stats + stack */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32 }}>
          <div className="fade-up" style={{ animationDelay: '0.4s', display: 'flex', flexWrap: 'wrap', gap: isMobile ? 24 : 0, justifyContent: isMobile ? 'flex-start' : 'space-between', marginBottom: 20 }}>
            {[{ n: '3', suffix: '+', label: 'Projects' }, { n: '93', suffix: '%', label: 'CV F1 Score' }, { n: '1.57', suffix: 'M', prefix: '$', label: 'Revenue Analyzed' }].map((s, i) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingRight: (!isMobile && i < 2) ? 48 : 0, borderRight: (!isMobile && i < 2) ? '1px solid rgba(255,255,255,0.06)' : 'none', minWidth: isMobile ? 90 : 'auto' }}>
                <div className="syne" style={{ fontSize: isMobile ? 26 : 32, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, background: 'linear-gradient(135deg,#10b981,#f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <CountUp target={s.n} prefix={s.prefix || ''} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 10.5, color: 'rgba(242,240,235,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
            {/* Stack tags — hidden on mobile to keep it clean */}
            {!isMobile && (
              <div className="fade-up" style={{ animationDelay: '0.5s', display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', flex: 1, paddingLeft: 48, justifyContent: 'flex-end' }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(242,240,235,0.18)', letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: 4, whiteSpace: 'nowrap' }}>Stack</span>
                {['SQL', 'Python', 'Power BI', 'ML', 'Deep Learning', 'Computer Vision', 'TensorFlow'].map(t => (
                  <span key={t} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500, border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(242,240,235,0.3)', transition: 'all 0.2s', cursor: 'default', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.color = '#10b981'; e.currentTarget.style.background = 'rgba(16,185,129,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(242,240,235,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Stack tags row on mobile */}
          {isMobile && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {['SQL', 'Python', 'Power BI', 'ML', 'TensorFlow'].map(t => (
                <span key={t} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500, border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(242,240,235,0.3)' }}>{t}</span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Scroll cue — desktop only */}
      {!isMobile && (
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.3, animation: 'fadeIn 1s ease 2s both' }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, #10b981)' }} />
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#10b981' }}>Scroll</span>
        </div>
      )}
    </section>
  );
}

function FeaturedSection({ onNavigate }) {
  const { isMobile } = useMobile();
  const projects = [
    { id: 'retail-performance-dashboard', title: 'Retail Performance Dashboard', cat: 'Business Intelligence', desc: 'Analyzed $1.57M in retail revenue using SQL + Power BI — uncovering critical margin gaps between categories with 19% Technology vs 2% Furniture profitability.', tools: ['SQL', 'Power BI', 'SQLite'], metric: '$1.57M', metricLabel: 'Revenue Analyzed', img: 'assets/images/retail-dashboard-v2.png', color: '#f59e0b' },
    { id: 'predicting-customer-returns', title: 'Predicting Customer Returns', cat: 'Machine Learning', desc: 'End-to-end imbalanced ML pipeline detecting 79% of return cases by optimizing Random Forest thresholds via F2-score — enabling proactive business intervention.', tools: ['Python', 'Scikit-Learn', 'Pandas'], metric: '78.95%', metricLabel: 'Recall Achieved', img: 'assets/images/feature-importance.png', color: '#10b981' },
    { id: 'vehicle-damage-detection', title: 'Vehicle Damage Detection', cat: 'Computer Vision', desc: 'MobileNetV2 transfer learning achieving 93% F1 after business-driven threshold optimization — with Grad-CAM explainability trusted by insurance stakeholders.', tools: ['TensorFlow', 'Keras', 'Grad-CAM'], metric: '93%', metricLabel: 'Damage F1', img: 'assets/images/gradcam-examples.png', color: '#8b5cf6' }
  ];

  return (
    <section style={{ background: '#080808', padding: isMobile ? '72px 20px' : '120px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 0, marginBottom: isMobile ? 40 : 64 }}>
            <div>
              <div className="sect-label" style={{ marginBottom: 16 }}>Selected Work</div>
              <h2 className="syne" style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#f2f0eb', lineHeight: 1.1 }}>
                Three projects.<br /><span style={{ color: 'rgba(242,240,235,0.3)' }}>Real impact.</span>
              </h2>
            </div>
            <GradBtn outline onClick={() => onNavigate('projects')} size="sm">
              All Projects <Icon.ArrowRight size={13} />
            </GradBtn>
          </div>
        </AnimateIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {projects.map((p, i) =>
            <AnimateIn key={p.id} delay={i * 0.1}>
              <ProjectRow project={p} onNavigate={onNavigate} index={i} />
            </AnimateIn>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p, onNavigate, index }) {
  const [hovered, setHovered] = React.useState(false);
  const { isMobile } = useMobile();

  if (isMobile) {
    return (
      <div
        onClick={() => onNavigate('project-' + p.id)}
        style={{
          padding: '24px 0', cursor: 'pointer',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, padding: '3px 10px', borderRadius: 99, border: `1px solid ${p.color}33`, background: `${p.color}0f` }}>{p.cat}</span>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
            <div className="syne" style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em', color: p.color, lineHeight: 1 }}>{p.metric}</div>
            <div style={{ fontSize: 9, fontWeight: 600, color: 'rgba(242,240,235,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{p.metricLabel}</div>
          </div>
        </div>
        <h3 className="syne" style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.03em', color: '#f2f0eb', lineHeight: 1.2, marginBottom: 8 }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: 'rgba(242,240,235,0.35)', lineHeight: 1.65, marginBottom: 12 }}>{p.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {p.tools.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
          <Icon.ArrowUpRight size={16} style={{ color: p.color, flexShrink: 0, marginLeft: 8 }} />
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate('project-' + p.id)}
      style={{
        display: 'grid', gridTemplateColumns: '48px 1fr auto',
        alignItems: 'center', gap: 32,
        padding: '28px 0', cursor: 'pointer',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.3s ease'
      }}>
      <div className="syne" style={{ fontSize: 12, fontWeight: 700, color: 'rgba(242,240,235,0.2)', letterSpacing: '0.08em' }}>
        0{index + 1}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, padding: '3px 10px', borderRadius: 99, border: `1px solid ${p.color}33`, background: `${p.color}0f` }}>{p.cat}</span>
          </div>
          <h3 className="syne" style={{ fontSize: 'clamp(18px,2.5vw,26px)', fontWeight: 800, letterSpacing: '-0.03em', color: hovered ? '#f2f0eb' : 'rgba(242,240,235,0.8)', transition: 'color 0.3s', lineHeight: 1.2 }}>
            {p.title}
          </h3>
        </div>
        <div>
          <p style={{ fontSize: 13.5, color: 'rgba(242,240,235,0.35)', lineHeight: 1.65, transition: 'color 0.3s', ...(hovered ? { color: 'rgba(242,240,235,0.55)' } : {}) }}>
            {p.desc}
          </p>
          <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
            {p.tools.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexShrink: 0 }}>
        <div style={{ textAlign: 'right' }}>
          <div className="syne" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.03em', color: p.color, lineHeight: 1 }}>{p.metric}</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(242,240,235,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{p.metricLabel}</div>
        </div>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: `1px solid ${hovered ? p.color : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: hovered ? p.color : 'rgba(242,240,235,0.3)', transition: 'all 0.3s', transform: hovered ? 'rotate(-45deg)' : 'none' }}>
          <Icon.ArrowRight size={15} />
        </div>
      </div>
    </div>
  );
}

function AboutHomeSection({ onNavigate }) {
  const { isMobile } = useMobile();
  return (
    <section style={{ background: '#0d0d0d', padding: isMobile ? '72px 20px' : '120px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 48 : 80, alignItems: 'center' }}>
        <AnimateIn>
          <div>
            <div className="sect-label" style={{ marginBottom: 20 }}>About</div>
            <h2 className="syne" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
              Where business meets <span className="grad-text">data science</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(242,240,235,0.45)', lineHeight: 1.8, marginBottom: 16 }}>
              I'm <strong style={{ color: '#f2f0eb', fontWeight: 600 }}>Younes Soulaiman</strong> — a data analyst and AI practitioner who transforms complex datasets into actionable business decisions. My work spans business intelligence, machine learning, and computer vision.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(242,240,235,0.35)', lineHeight: 1.8, marginBottom: 36 }}>
              I specialize in building end-to-end pipelines that don't just produce metrics — they change how organizations make decisions.
            </p>
            <GradBtn outline onClick={() => onNavigate('about')} size="sm">
              Full Story <Icon.ArrowRight size={13} />
            </GradBtn>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { icon: Icon.BarChart, title: 'Data Analysis', desc: 'SQL · Power BI · Excel', color: '#f59e0b' },
              { icon: Icon.Code, title: 'Programming', desc: 'Python · Pandas · NumPy', color: '#10b981' },
              { icon: Icon.Brain, title: 'ML / AI', desc: 'Scikit-Learn · TensorFlow', color: '#8b5cf6' },
              { icon: Icon.Eye, title: 'Computer Vision', desc: 'Keras · Grad-CAM · CV', color: '#f43f5e' }
            ].map(card => {
              const Ic = card.icon;
              return (
                <div key={card.title} style={{ padding: '24px', borderRadius: 16, background: '#141414', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '44'; e.currentTarget.style.background = card.color + '08'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#141414'; e.currentTarget.style.transform = 'none'; }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: card.color + '15', color: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Ic size={17} />
                  </div>
                  <div className="syne" style={{ fontSize: 13.5, fontWeight: 700, color: '#f2f0eb', marginBottom: 5 }}>{card.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(242,240,235,0.3)', lineHeight: 1.5 }}>{card.desc}</div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function CtaSection({ onNavigate }) {
  const { isMobile } = useMobile();
  return (
    <section style={{ background: '#080808', padding: isMobile ? '72px 20px' : '120px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: isMobile ? '48px 24px' : '80px 48px', borderRadius: 24, border: '1px solid rgba(16,185,129,0.15)', background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(245,158,11,0.04) 100%)' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 40, height: 40, borderTop: '2px solid #10b981', borderLeft: '2px solid #10b981', borderRadius: '24px 0 0 0' }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 40, height: 40, borderBottom: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 0 24px 0' }} />
          <AnimateIn>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 99, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', fontSize: 11, fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
              Open to opportunities
            </div>
            <h2 className="syne" style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f2f0eb', marginBottom: 16, lineHeight: 1.1 }}>
              Let's build something<br /><span className="grad-text">that matters.</span>
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(242,240,235,0.4)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>
              Whether you're a recruiter, hiring manager, or collaborator — I'd love to connect and explore how data can create real impact.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <GradBtn onClick={() => onNavigate('contact')}>
                <Icon.Mail size={14} /> Get in Touch
              </GradBtn>
              <GradBtn outline onClick={() => onNavigate('projects')}>
                View My Work <Icon.ArrowRight size={13} />
              </GradBtn>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page">
      <HeroSection onNavigate={onNavigate} />
      <FeaturedSection onNavigate={onNavigate} />
      <AboutHomeSection onNavigate={onNavigate} />
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// PROJECTS PAGE
// ══════════════════════════════════════════════════════════════

function ProjectsPage({ onNavigate }) {
  const { isMobile, isTablet } = useMobile();
  const projects = [
    { id: 'retail-performance-dashboard', title: 'Retail Performance Dashboard', cat: 'Business Intelligence', desc: 'Analyzed $1.57M in retail revenue across 3K orders using SQL and Power BI — uncovering Technology\'s 19% profit margin dominance versus Furniture\'s critical 2% margin risk.', tools: ['SQL', 'SQLite', 'Power BI'], metric: '$1.57M', metricLabel: 'Revenue Analyzed', img: 'assets/images/retail-dashboard-v2.png', color: '#f59e0b', results: ['$175K profit tracked', '19% tech margin', 'Q4 seasonality revealed'] },
    { id: 'predicting-customer-returns', title: 'Predicting Customer Returns', cat: 'Machine Learning', desc: 'End-to-end imbalanced classification pipeline — detecting 79% of return cases via F2-optimized Random Forest thresholds instead of naive accuracy metrics.', tools: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'], metric: '78.95%', metricLabel: 'Recall Achieved', img: 'assets/images/feature-importance.png', color: '#10b981', results: ['78.95% recall', 'F2 threshold optimization', 'PR-AUC: 25.48%'] },
    { id: 'vehicle-damage-detection', title: 'Vehicle Damage Detection', cat: 'Computer Vision', desc: 'MobileNetV2 transfer learning for insurance damage triage — 93% F1 after business-driven threshold calibration with Grad-CAM explainability for stakeholder trust.', tools: ['Python', 'TensorFlow', 'Keras', 'Grad-CAM'], metric: '93%', metricLabel: 'Damage F1', img: 'assets/images/gradcam-examples.png', color: '#8b5cf6', results: ['93% F1 score', '70%+ fewer missed damages', 'Grad-CAM validated'] }
  ];

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <div className="page" style={{ paddingTop: 64, background: '#080808', minHeight: '100vh' }}>
      <div style={{ position: 'relative', padding: isMobile ? '56px 20px 48px' : '80px 32px 64px', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 0, right: '20%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="sect-label" style={{ marginBottom: 20 }}>Portfolio</div>
          <h1 className="syne" style={{ fontSize: 'clamp(36px,7vw,80px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f2f0eb', marginBottom: 16, lineHeight: 1 }}>
            All <span className="grad-text">Projects</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(242,240,235,0.35)', maxWidth: 480, lineHeight: 1.7 }}>
            Data analytics and AI projects solving real business problems — from SQL pipelines to deep learning.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '24px 20px 72px' : '32px 32px 96px', display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
        {projects.map((p, i) =>
          <AnimateIn key={p.id} delay={i * 0.1}>
            <ProjectCard project={p} onNavigate={onNavigate} />
          </AnimateIn>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project: p, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onNavigate('project-' + p.id)}
      style={{
        borderRadius: 20, border: hov ? `1px solid ${p.color}40` : '1px solid rgba(255,255,255,0.07)',
        background: '#111', overflow: 'hidden', cursor: 'pointer',
        boxShadow: hov ? `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${p.color}12` : '0 4px 20px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-6px)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', flexDirection: 'column'
      }}>
      <div style={{ height: 220, overflow: 'hidden', position: 'relative', background: '#0a0a0a' }}>
        <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.6s ease', transform: hov ? 'scale(1.07)' : 'scale(1)', filter: 'brightness(0.8)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, #111 100%)` }} />
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <span style={{ padding: '4px 12px', borderRadius: 99, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: '#080808cc', color: p.color, border: `1px solid ${p.color}40`, backdropFilter: 'blur(8px)' }}>{p.cat}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 16, right: 16, textAlign: 'right' }}>
          <div className="syne" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.03em', color: p.color, lineHeight: 1 }}>{p.metric}</div>
          <div style={{ fontSize: 9.5, fontWeight: 600, color: 'rgba(242,240,235,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.metricLabel}</div>
        </div>
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="syne" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#f2f0eb', marginBottom: 10, lineHeight: 1.25 }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: 'rgba(242,240,235,0.35)', lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
          {p.results.map(r =>
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(242,240,235,0.35)' }}>
              <Icon.Check size={11} style={{ color: p.color, flexShrink: 0 }} /> {r}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {p.tools.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: p.color }}>
          View Case Study <Icon.ArrowUpRight size={13} style={{ transform: hov ? 'translate(2px,-2px)' : 'none', transition: 'transform 0.2s' }} />
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// PROJECT DETAIL PAGE
// ══════════════════════════════════════════════════════════════

const projectData = {
  'retail-performance-dashboard': {
    title: 'Retail Performance Dashboard', category: 'Business Intelligence',
    description: 'Analyzed $1.57M in retail revenue across 3K orders using SQL and Power BI — uncovering Technology dominates profitability at 19% margin while Furniture poses critical operational risk at 2% margin.',
    tools: ['SQL', 'SQLite', 'Power BI'], image: 'assets/images/retail-dashboard-v2.png', color: '#f59e0b',
    kpis: [{ label: 'Total Revenue', value: '$1.57M' }, { label: 'Total Profit', value: '$175K' }, { label: 'Profit Margin', value: '11.19%' }, { label: 'Total Orders', value: '3K' }],
    businessProblem: 'A retail company needed to evaluate its overall business performance across products, customers, regions, and time periods. Management required clear visibility into revenue drivers, profitability gaps, customer concentration risks, and operational inefficiencies like high return rates — to support better strategic decision-making.',
    overview: 'This project combines SQL-based data engineering and analysis with Power BI dashboarding. Raw transactional data (5,901 records across Jan 2019 – Dec 2020) was ingested into SQLite, transformed into a star schema, validated for quality, and queried using advanced SQL techniques including window functions, CTEs, and ranking.',
    results: ['Office Supplies leads revenue at ~$500K, but Technology is the most profitable category with a ~19% margin', 'Furniture generates ~$400K in revenue but has a critically low ~2% margin and the highest return rate (~5%)', 'Top 20% of customers contribute nearly 48% of total revenue, highlighting customer concentration risk', 'Strong Q4 seasonality — monthly revenue peaked at $0.17M in late 2020', 'The West region leads performance while the South underperforms'],
    impact: 'The project highlights the critical difference between revenue leadership and profitability leadership. It identifies Furniture as a strategic risk area requiring immediate pricing or cost intervention, and provides management with data-backed recommendations.',
    githubLink: null
  },
  'predicting-customer-returns': {
    title: 'Predicting Customer Returns', category: 'Machine Learning',
    description: 'Built an imbalanced classification ML pipeline to predict retail customer returns, optimizing Random Forest thresholds via F2-score to detect nearly 79% of return cases — enabling proactive business intervention.',
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'], image: 'assets/images/feature-importance.png', color: '#10b981',
    kpis: [{ label: 'Recall', value: '78.95%' }, { label: 'F2 Score', value: '43.27%' }, { label: 'PR-AUC', value: '25.48%' }, { label: 'Model', value: 'RF' }],
    businessProblem: 'A retail company noticed an increasing trend in customer returns, significantly impacting operational costs and profit margins. Predicting which orders are likely returned allows proactive intervention — adjusting shipping expectations, reviewing high-risk product categories, or restricting promotional offers.',
    overview: 'This project implements an end-to-end ML pipeline to predict whether a retail order will be returned. It focuses heavily on addressing severe class imbalance and optimizing classification thresholds to prioritize recall, ensuring the maximum number of potential returns are caught.',
    methodology: 'Engineered temporal and logistics features from raw transaction data. Utilized weighted models (Logistic Regression and Random Forest) and explicitly optimized the decision threshold using the F2-score to heavily prioritize Recall. Evaluated using PR-AUC given the imbalanced nature of the dataset.',
    results: ['Order timing strongly impacts return probability', 'Shipping delays correlate with higher returns', 'High-value / low-margin orders show elevated return risk', 'Regional behavior differs significantly across categories', 'Random Forest significantly outperformed Logistic Regression'],
    impact: 'By detecting almost 79% of all expected returns prior to fulfillment, the business gains the capability to strategically intervene. The cost savings from prevented fast-shipping logistics on likely-returned items outweigh the cost of false positives.',
    visuals: [{ src: 'assets/images/rf-threshold.png', alt: 'RF Threshold Tradeoff', caption: 'Optimizing the decision threshold based on F2-Score.' }, { src: 'assets/images/pr-curve.png', alt: 'Precision–Recall Comparison', caption: 'PR Curve showcasing the superiority of Random Forest over Logistic Regression.' }, { src: 'assets/images/feature-importance.png', alt: 'Top Return Drivers', caption: 'Top 10 features driving customer returns.' }],
    githubLink: 'https://github.com/YounesSoul/ml-return-prediction'
  },
  'vehicle-damage-detection': {
    title: 'Vehicle Damage Detection', category: 'Computer Vision',
    description: 'Built an end-to-end deep learning vehicle damage classification system using MobileNetV2 transfer learning, achieving 93% F1 after business-driven threshold optimization with Grad-CAM explainability.',
    tools: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'Grad-CAM'], image: 'assets/images/gradcam-examples.png', color: '#8b5cf6',
    kpis: [{ label: 'Damage F1', value: '92.8%' }, { label: 'Recall', value: '93.1%' }, { label: 'Precision', value: '92.5%' }, { label: 'Accuracy', value: '93.0%' }],
    businessProblem: 'Manual vehicle damage assessment is slow, costly, and difficult to scale across insurance, rental, and fleet management operations. Claims adjusters must visually inspect every vehicle, creating bottlenecks that delay settlements and increase operational costs.',
    overview: 'End-to-end deep learning pipeline for automated vehicle damage classification from images. Using MobileNetV2 transfer learning on 2,300 vehicle images, the model classifies vehicles as damaged or undamaged. The pipeline includes EDA, stratified data splitting, transfer learning with frozen backbone, fine-tuning, business-driven threshold optimization, and Grad-CAM explainability.',
    methodology: 'Started with a pretrained MobileNetV2 backbone as a feature extractor, then progressively fine-tuned upper convolutional blocks. Rather than accepting the default 0.50 threshold, I swept thresholds from 0.10 to 0.90 and selected 0.15 based on Damage F1 Score — prioritizing recall to minimize missed damage cases.',
    results: ['Threshold optimization improved Damage F1 from 0.80 → 0.93 (+16%)', 'Reduced missed damage cases by 70%+ (recall: 68% → 93%)', 'Grad-CAM confirmed model focuses on actual damage regions, not background', 'MobileNetV2 achieved production-quality performance with only 2,300 images', 'Failure modes identified: subtle damage, reflective surfaces, lighting artifacts'],
    impact: 'By automatically detecting 93% of vehicle damage with high precision, this system enables insurance companies and fleet operators to dramatically accelerate damage triage. The Grad-CAM layer provides visual evidence of why the model flagged areas, building trust for real-world deployment.',
    visuals: [{ src: 'assets/images/confusion-matrix.png', alt: 'Baseline Confusion Matrix', caption: 'Baseline at 0.50 threshold — 68% damage recall.' }, { src: 'assets/images/optimized-confusion-matrix.png', alt: 'Optimized Confusion Matrix', caption: 'After threshold optimization (0.15) — 93.1% recall.' }, { src: 'assets/images/gradcam-examples.png', alt: 'Grad-CAM Explainability', caption: 'Grad-CAM heatmaps showing model focus on damage regions.' }, { src: 'assets/images/precision-recall.png', alt: 'Precision-Recall Curve', caption: 'PR curve with AUC = 0.979.' }],
    githubLink: 'https://github.com/YounesSoul/vehicle-damage-detection'
  }
};

function ProjectDetailPage({ projectId, onNavigate }) {
  const p = projectData[projectId];
  const [lb, setLb] = React.useState(null);
  const { isMobile } = useMobile();
  React.useEffect(() => { window.scrollTo(0, 0); }, [projectId]);
  if (!p) return <div style={{ padding: 120, textAlign: 'center', color: '#f2f0eb' }}>Project not found.</div>;

  const px = isMobile ? '20px' : '32px';
  const sectionPad = isMobile ? '40px' : '56px';

  return (
    <div className="page" style={{ paddingTop: 64, background: '#080808', minHeight: '100vh' }}>
      {lb && <Lightbox src={lb} alt="Visual" onClose={() => setLb(null)} />}

      {/* Hero */}
      <div style={{ position: 'relative', padding: isMobile ? `48px ${px} 40px` : `72px ${px} 56px`, overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: -80, right: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${p.color}15 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button onClick={() => onNavigate('projects')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '7px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', color: 'rgba(242,240,235,0.4)', fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f2f0eb'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(242,240,235,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
            <Icon.ArrowLeft size={13} /> All Projects
          </button>
          <span style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 99, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: p.color + '15', color: p.color, border: `1px solid ${p.color}30`, marginBottom: 18 }}>{p.category}</span>
          <h1 className="syne" style={{ fontSize: 'clamp(26px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f2f0eb', marginBottom: 16, lineHeight: 1.05 }}>{p.title}</h1>
          <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(242,240,235,0.4)', maxWidth: 640, lineHeight: 1.7, marginBottom: 24 }}>{p.description}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {p.tools.map(t => <Tag key={t}>{t}</Tag>)}
            {p.githubLink &&
              <a href={p.githubLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 16px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, background: 'rgba(255,255,255,0.06)', color: 'rgba(242,240,235,0.6)', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#f2f0eb'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(242,240,235,0.6)'; }}>
                <Icon.Github size={13} /> GitHub
              </a>
            }
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: `40px ${px}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : `repeat(${p.kpis.length}, 1fr)`, gap: isMobile ? 0 : 1 }}>
          {p.kpis.map((kpi, i) =>
            <AnimateIn key={kpi.label} delay={i * 0.08}>
              <div style={{ textAlign: 'center', padding: isMobile ? '20px 12px' : '24px', borderRight: (!isMobile && i < p.kpis.length - 1) ? '1px solid rgba(255,255,255,0.06)' : 'none', borderBottom: (isMobile && i < 2) ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="syne" style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 900, letterSpacing: '-0.04em', color: p.color, lineHeight: 1, marginBottom: 8 }}>{kpi.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(242,240,235,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{kpi.label}</div>
              </div>
            </AnimateIn>
          )}
        </div>
      </div>

      {/* Main image */}
      <div style={{ padding: `${sectionPad} ${px}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: `1px solid ${p.color}20`, boxShadow: `0 24px 80px rgba(0,0,0,0.6), 0 0 60px ${p.color}10`, cursor: 'zoom-in' }} onClick={() => setLb(p.image)}>
          <img src={p.image} alt={p.title} style={{ width: '100%', display: 'block' }} />
        </div>
      </div>

      {/* Content sections */}
      {[
        { icon: Icon.Target, title: 'Business Problem', color: '#f43f5e', text: p.businessProblem },
        { icon: Icon.BookOpen, title: 'Project Overview', color: '#f59e0b', text: p.overview },
        p.methodology ? { icon: Icon.GitBranch, title: 'Methodology', color: '#8b5cf6', text: p.methodology } : null
      ].filter(Boolean).map((sec, i) =>
        <div key={sec.title} style={{ padding: `${sectionPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? '#080808' : '#0c0c0c' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <AnimateIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: sec.color + '15', color: sec.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <sec.icon size={18} />
                </div>
                <h2 className="syne" style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f2f0eb' }}>{sec.title}</h2>
              </div>
              <p style={{ fontSize: isMobile ? 14.5 : 15.5, color: 'rgba(242,240,235,0.45)', lineHeight: 1.85 }}>{sec.text}</p>
            </AnimateIn>
          </div>
        </div>
      )}

      {/* Results */}
      <div style={{ padding: `${sectionPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0c0c0c' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: '#10b98115', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon.TrendingUp size={18} />
              </div>
              <h2 className="syne" style={{ fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f2f0eb' }}>Results & Impact</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {p.results.map((r, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 18px', borderRadius: 10, background: '#141414', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon.Check size={11} style={{ color: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: isMobile ? 13.5 : 14.5, color: 'rgba(242,240,235,0.55)', lineHeight: 1.65 }}>{r}</span>
                </div>
              )}
            </div>
            <div style={{ padding: '28px', borderRadius: 14, background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(245,158,11,0.06))', border: `1px solid ${p.color}25` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Icon.Sparkles size={15} style={{ color: p.color }} />
                <span className="syne" style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Business Value</span>
              </div>
              <p style={{ fontSize: isMobile ? 14 : 15, color: 'rgba(242,240,235,0.5)', lineHeight: 1.8 }}>{p.impact}</p>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Visuals gallery */}
      {p.visuals &&
        <div style={{ padding: `${sectionPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)', background: '#080808' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <AnimateIn>
              <div className="sect-label" style={{ marginBottom: 20 }}>Visuals</div>
              <h2 className="syne" style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 36 }}>Key Charts & Analysis</h2>
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 16 }}>
              {p.visuals.map((v, i) =>
                <AnimateIn key={i} delay={i * 0.08}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', background: '#111', cursor: 'zoom-in', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}40`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}
                    onClick={() => setLb(v.src)}>
                    <img src={v.src} alt={v.alt} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', filter: 'brightness(0.9)' }} />
                    <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#f2f0eb', marginBottom: 3 }}>{v.alt}</div>
                      <div style={{ fontSize: 11.5, color: 'rgba(242,240,235,0.3)' }}>{v.caption}</div>
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>
          </div>
        </div>
      }

      {/* Back CTA */}
      <div style={{ padding: isMobile ? '48px 20px' : '72px 32px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <AnimateIn>
          <h2 className="syne" style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: '#f2f0eb' }}>Explore More Projects</h2>
          <p style={{ fontSize: 15, color: 'rgba(242,240,235,0.3)', marginBottom: 32 }}>See how I solve different business problems using data and AI.</p>
          <GradBtn onClick={() => onNavigate('projects')}>View All Projects <Icon.ArrowRight size={14} /></GradBtn>
        </AnimateIn>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// ABOUT PAGE
// ══════════════════════════════════════════════════════════════

function AboutPage({ onNavigate }) {
  const { isMobile } = useMobile();
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const journey = [
    { icon: Icon.GraduationCap, title: 'Business Foundation', desc: 'Understanding how organizations make decisions and where data creates the most value.', done: true },
    { icon: Icon.BarChart, title: 'Data Analytics & Dashboards', desc: 'Building end-to-end analytics pipelines — from SQL queries to Power BI dashboards tracking $1.57M in retail revenue.', done: true },
    { icon: Icon.Brain, title: 'Machine Learning & AI', desc: 'Classification models, threshold optimization, and deep learning for computer vision with Grad-CAM explainability.', done: true },
    { icon: Icon.Sparkles, title: 'Applied AI for Business', desc: 'Current focus: building explainable, production-ready AI solutions that bridge model performance and business impact.', current: true }
  ];

  const skills = [
    { icon: Icon.Database, label: 'Data Analysis', skills: ['SQL', 'Power BI', 'Excel'], color: '#f59e0b' },
    { icon: Icon.Code, label: 'Programming', skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'], color: '#10b981' },
    { icon: Icon.Brain, label: 'AI / ML', skills: ['Scikit-Learn', 'TensorFlow', 'Keras', 'Grad-CAM'], color: '#8b5cf6' },
    { icon: Icon.Layers, label: 'Tools', skills: ['Git', 'Jupyter', 'SQLite', 'VS Code'], color: '#f43f5e' }
  ];

  const px = isMobile ? '20px' : '32px';
  const secPad = isMobile ? '56px' : '72px';

  return (
    <div className="page" style={{ paddingTop: 64, background: '#080808', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ position: 'relative', padding: isMobile ? `56px ${px} 48px` : `80px ${px} 64px`, overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '10%', right: '15%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="sect-label" style={{ marginBottom: 20 }}>About</div>
          <h1 className="syne" style={{ fontSize: 'clamp(36px,7vw,80px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f2f0eb', marginBottom: 16, lineHeight: 1 }}>
            About <span className="grad-text">Me</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, color: 'rgba(242,240,235,0.4)', maxWidth: 520, lineHeight: 1.75, marginBottom: 24 }}>
            I turn complex data into clear business decisions using modern analytics, machine learning, and a relentless focus on impact.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['AI & Data Analytics', 'SQL · Python · Power BI', 'Open to opportunities'].map(chip =>
              <span key={chip} style={{ padding: '6px 16px', borderRadius: 99, border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.06)', fontSize: 12.5, fontWeight: 500, color: '#10b981' }}>{chip}</span>
            )}
          </div>
        </div>
      </div>

      {/* Who I Am */}
      <div style={{ padding: `${secPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: isMobile ? 40 : 72, alignItems: 'start' }}>
          <AnimateIn>
            <div className="sect-label" style={{ marginBottom: 20 }}>Who I Am</div>
            <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(242,240,235,0.5)', lineHeight: 1.85, marginBottom: 16 }}>
              I'm <strong style={{ color: '#f2f0eb', fontWeight: 700 }}>Younes Soulaiman</strong> — a data analyst and AI practitioner who transforms complex datasets into <strong style={{ color: '#f2f0eb', fontWeight: 600 }}>actionable business decisions</strong>. My work sits at the intersection of business intelligence, machine learning, and data storytelling.
            </p>
            <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(242,240,235,0.35)', lineHeight: 1.85, marginBottom: 28 }}>
              I specialize in building <strong style={{ color: '#f2f0eb', fontWeight: 600 }}>end-to-end analytics pipelines</strong> and ML solutions — from retail revenue analysis to deep learning for computer vision — always with a focus on outcomes that matter.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {[{ icon: Icon.MapPin, text: 'Based in UAE' }, { icon: Icon.Briefcase, text: 'Open to opportunities' }].map(({ icon: Ic, text }) =>
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'rgba(242,240,235,0.3)' }}>
                  <Ic size={13} style={{ color: '#10b981' }} /> {text}
                </div>
              )}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: Icon.Lightbulb, title: 'Problem Solver', desc: 'Every dataset is a business question waiting to be answered.', color: '#f59e0b' },
                { icon: Icon.TrendingUp, title: 'Impact Driven', desc: 'Focused on outcomes that move real business metrics.', color: '#10b981' },
                { icon: Icon.Sparkles, title: 'Applied AI', desc: 'Building explainable, production-ready AI solutions.', color: '#8b5cf6' }
              ].map(item => {
                const Ic = item.icon;
                return (
                  <div key={item.title} style={{ display: 'flex', gap: 14, padding: '16px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#111', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + '44'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: item.color + '15', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Ic size={15} />
                    </div>
                    <div>
                      <div className="syne" style={{ fontSize: 13.5, fontWeight: 700, color: '#f2f0eb', marginBottom: 3 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'rgba(242,240,235,0.3)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Journey */}
      <div style={{ padding: `${secPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0c0c0c' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <AnimateIn>
            <div className="sect-label" style={{ marginBottom: 16 }}>Journey</div>
            <h2 className="syne" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 48, color: '#f2f0eb' }}>My Path</h2>
          </AnimateIn>
          {journey.map((step, i) => {
            const Ic = step.icon;
            return (
              <AnimateIn key={step.title} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 20, marginBottom: 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: step.current ? 'linear-gradient(135deg,#10b981,#f59e0b)' : step.done ? 'rgba(16,185,129,0.12)' : '#141414', color: step.current ? '#080808' : step.done ? '#10b981' : 'rgba(242,240,235,0.2)', border: step.current ? 'none' : step.done ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(255,255,255,0.08)', boxShadow: step.current ? '0 4px 20px rgba(16,185,129,0.4)' : 'none', flexShrink: 0 }}>
                      <Ic size={15} />
                    </div>
                    {i < journey.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 28, background: 'linear-gradient(to bottom, rgba(16,185,129,0.2), transparent)', marginTop: 4 }} />}
                  </div>
                  <div style={{ paddingBottom: 32, paddingTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                      <h3 className="syne" style={{ fontSize: 14.5, fontWeight: 700, color: '#f2f0eb' }}>{step.title}</h3>
                      {step.current && <span style={{ padding: '2px 10px', borderRadius: 99, background: 'linear-gradient(135deg,#10b981,#f59e0b)', color: '#080808', fontSize: 9.5, fontWeight: 800, letterSpacing: '0.08em' }}>NOW</span>}
                    </div>
                    <p style={{ fontSize: 13.5, color: 'rgba(242,240,235,0.3)', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>

      {/* Toolkit */}
      <div style={{ padding: `${secPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimateIn>
            <div className="sect-label" style={{ marginBottom: 16 }}>Toolkit</div>
            <h2 className="syne" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 40, color: '#f2f0eb' }}>Technical Stack</h2>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
            {skills.map((g, i) => {
              const Ic = g.icon;
              return (
                <AnimateIn key={g.label} delay={i * 0.08}>
                  <div style={{ padding: '24px 20px', borderRadius: 16, background: '#111', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = g.color + '44'; e.currentTarget.style.background = g.color + '08'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#111'; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: g.color + '15', color: g.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <Ic size={18} />
                    </div>
                    <div className="syne" style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#f2f0eb', marginBottom: 14 }}>{g.label}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {g.skills.map(s =>
                        <span key={s} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11.5, fontWeight: 500, background: 'rgba(255,255,255,0.04)', color: 'rgba(242,240,235,0.4)', border: '1px solid rgba(255,255,255,0.07)' }}>{s}</span>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* Looking for */}
      <div style={{ padding: `${secPad} ${px}`, borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0c0c0c' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{ padding: isMobile ? '28px 20px' : '40px', borderRadius: 20, border: '1px solid rgba(16,185,129,0.2)', background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(245,158,11,0.05))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Icon.Briefcase size={18} style={{ color: '#10b981' }} />
                <h2 className="syne" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#f2f0eb' }}>What I'm Looking For</h2>
              </div>
              <p style={{ fontSize: isMobile ? 14.5 : 15.5, color: 'rgba(242,240,235,0.4)', lineHeight: 1.8, marginBottom: 28 }}>
                I'm actively seeking roles in <strong style={{ color: '#10b981' }}>data analytics</strong>, <strong style={{ color: '#f59e0b' }}>business intelligence</strong>, and <strong style={{ color: '#8b5cf6' }}>AI/ML engineering</strong> where I can contribute to data-driven decision-making and grow alongside a team that values analytical rigor and business impact.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <GradBtn href="mailto:topmind.youness@gmail.com" size="sm">
                  <Icon.Mail size={13} /> Get in Touch
                </GradBtn>
                <GradBtn outline href="https://www.linkedin.com/in/younes-soulaiman-201b9a241/" size="sm">
                  <Icon.LinkedIn size={13} /> LinkedIn
                </GradBtn>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <CtaSection onNavigate={onNavigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// CONTACT PAGE
// ══════════════════════════════════════════════════════════════

function ContactPage() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const [focused, setFocused] = React.useState(null);
  const { isMobile } = useMobile();
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const inp = (field) => ({
    width: '100%', padding: '13px 16px', borderRadius: 10, fontSize: 14.5,
    border: `1px solid ${focused === field ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.08)'}`,
    background: focused === field ? 'rgba(16,185,129,0.04)' : '#111',
    color: '#f2f0eb', outline: 'none',
    boxShadow: focused === field ? '0 0 0 3px rgba(16,185,129,0.08)' : 'none',
    transition: 'all 0.2s ease', fontFamily: 'Inter, sans-serif'
  });

  const px = isMobile ? '20px' : '32px';

  return (
    <div className="page" style={{ paddingTop: 64, background: '#080808', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ position: 'relative', padding: isMobile ? `56px ${px} 48px` : `80px ${px} 64px`, overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '30%', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="sect-label" style={{ marginBottom: 20 }}>Contact</div>
          <h1 className="syne" style={{ fontSize: 'clamp(36px,7vw,80px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f2f0eb', marginBottom: 16, lineHeight: 1 }}>
            Let's <span className="grad-text">Connect</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 16, color: 'rgba(242,240,235,0.35)', maxWidth: 460, lineHeight: 1.75 }}>
            Whether you're a recruiter, hiring manager, or collaborator — I'd love to explore how data can create impact together.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: isMobile ? `40px ${px} 72px` : `48px ${px} 96px`, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr', gap: isMobile ? 48 : 64, alignItems: 'start' }}>
          {/* Left info */}
          <AnimateIn>
            <div>
              <h2 className="syne" style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#f2f0eb', marginBottom: 12 }}>Get in Touch</h2>
              <p style={{ fontSize: 14, color: 'rgba(242,240,235,0.35)', lineHeight: 1.75, marginBottom: 32 }}>
                Actively seeking roles in data analytics, business intelligence, and AI/ML. Open to full-time positions, freelance projects, and collaborations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: Icon.Mail, label: 'Email', value: 'topmind.youness@gmail.com', href: 'mailto:topmind.youness@gmail.com' },
                  { icon: Icon.LinkedIn, label: 'LinkedIn', value: 'Younes Soulaiman', href: 'https://www.linkedin.com/in/younes-soulaiman-201b9a241/' },
                  { icon: Icon.Github, label: 'GitHub', value: 'YounesSoul', href: 'https://github.com/YounesSoul' }
                ].map(item => {
                  const Ic = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: '#111', textDecoration: 'none', color: '#f2f0eb', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = '#111'; e.currentTarget.style.transform = 'none'; }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(16,185,129,0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Ic size={15} />
                      </div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.2)', marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 13.5, fontWeight: 500, color: 'rgba(242,240,235,0.65)' }}>{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <div style={{ marginTop: 24, padding: '16px 18px', borderRadius: 12, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ position: 'relative', width: 8, height: 8 }}>
                    <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', animation: 'ping 1.5s infinite' }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#10b981' }}>Available for new opportunities</span>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(16,185,129,0.6)', marginTop: 4 }}>Typically responds within 24 hours.</p>
              </div>
            </div>
          </AnimateIn>

          {/* Right form */}
          <AnimateIn delay={0.15}>
            {submitted ?
              <div style={{ textAlign: 'center', padding: '64px 40px', borderRadius: 20, border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.05)' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon.Check size={24} style={{ color: '#10b981' }} />
                </div>
                <h3 className="syne" style={{ fontSize: 20, fontWeight: 800, color: '#f2f0eb', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontSize: 14.5, color: 'rgba(242,240,235,0.4)' }}>Thank you for reaching out. I'll get back to you shortly.</p>
              </div> :
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                  {[['name', 'Name', 'Your name', 'text'], ['email', 'Email', 'your@email.com', 'email']].map(([id, label, ph, type]) =>
                    <div key={id}>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 700, color: 'rgba(242,240,235,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{label} *</label>
                      <input required type={type} placeholder={ph} value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })}
                        onFocus={() => setFocused(id)} onBlur={() => setFocused(null)} style={inp(id)} />
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11.5, fontWeight: 700, color: 'rgba(242,240,235,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Subject</label>
                  <input type="text" placeholder="What's this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} style={inp('subject')} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11.5, fontWeight: 700, color: 'rgba(242,240,235,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Message *</label>
                  <textarea required rows={6} placeholder="Tell me about your project, role, or just say hello..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    style={{ ...inp('message'), resize: 'vertical', minHeight: 140 }} />
                </div>
                <GradBtn onClick={() => {}}>
                  <Icon.Send size={14} /> Send Message
                </GradBtn>
              </form>
            }
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, ProjectsPage, ProjectDetailPage, AboutPage, ContactPage, CtaSection });

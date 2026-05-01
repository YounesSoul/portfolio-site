// ── All Page Components ─────────────────────────────────────────

// ══════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════

function HeroSection({ onNavigate }) {
  const [mousePos, setMousePos] = React.useState({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const handler = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const techStack = [
    { label: 'SQL', color: '#f59e0b' },
    { label: 'Python', color: '#3b82f6' },
    { label: 'Power BI', color: '#f97316' },
    { label: 'Machine Learning', color: '#8b5cf6' },
    { label: 'Deep Learning', color: '#06b6d4' },
    { label: 'Computer Vision', color: '#10b981' },
  ];

  const credibilityItems = [
    { icon: Icon.BarChart, label: 'Business Intelligence' },
    { icon: Icon.Brain, label: 'Machine Learning' },
    { icon: Icon.Eye, label: 'Computer Vision' },
    { icon: Icon.Layers, label: 'Data Analytics' },
    { icon: Icon.Cpu, label: 'Deep Learning' },
  ];

  const glowX = (mousePos.x - 0.5) * 60;
  const glowY = (mousePos.y - 0.5) * 60;

  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      background: 'var(--hero-bg)',
    }}>
      {/* Grid pattern */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />

      {/* Animated glow blobs */}
      <div style={{
        position: 'absolute', top: '15%', left: `${30 + glowX * 0.3}%`,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)', transition: 'left 0.8s ease, top 0.8s ease',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: `${15 - glowX * 0.2}%`,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '60%', left: '60%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating dots decoration */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 4, height: 4, borderRadius: '50%',
          background: `rgba(129,140,248,${0.2 + i * 0.05})`,
          top: `${20 + i * 12}%`,
          left: `${8 + i * 14}%`,
          animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
        }} />
      ))}

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, var(--bg), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 820, padding: '100px 24px 40px' }}>

        {/* Status badge */}
        <div className="fade-up" style={{ animationDelay: '0.1s', marginBottom: 28 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 99,
            border: '1px solid rgba(129,140,248,0.25)',
            background: 'rgba(99,102,241,0.08)',
            backdropFilter: 'blur(12px)',
            fontSize: 12.5, fontWeight: 600, color: '#a5b4fc',
            letterSpacing: '0.02em',
          }}>
            <span style={{ position: 'relative', width: 8, height: 8, flexShrink: 0 }}>
              <span style={{
                position: 'absolute', inset: 0, borderRadius: '50%', background: '#4ade80',
                animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
              }} />
              <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
            </span>
            Open to opportunities · Based in Morocco
          </span>
        </div>

        {/* Headline */}
        <div className="fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900,
            letterSpacing: '-0.04em', lineHeight: 1.05,
            color: '#f0f4ff',
            marginBottom: 0,
          }}>
            Hi, I'm{' '}
            <span className="grad-text" style={{ display: 'inline-block' }}>Younes</span>
          </h1>
          <h2 style={{
            fontSize: 'clamp(20px, 3.5vw, 36px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.3,
            color: 'rgba(240,244,255,0.55)',
            marginTop: 12,
          }}>
            AI & Data Analytics for Business
          </h2>
        </div>

        {/* Intro */}
        <div className="fade-up" style={{ animationDelay: '0.35s', marginTop: 20 }}>
          <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: 'rgba(240,244,255,0.45)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            I build data-driven solutions using SQL, Power BI, Python, and Machine Learning — turning complex datasets into decisions that move the needle.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-up" style={{ animationDelay: '0.5s', marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('projects')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 28px', borderRadius: 12, border: 'none',
            background: 'var(--accent)', color: '#fff', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', boxShadow: '0 4px 24px rgba(67,56,202,0.4)',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(67,56,202,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(67,56,202,0.4)'; }}>
            View Projects <Icon.ArrowRight size={15} />
          </button>
          <button onClick={() => onNavigate('contact')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 28px', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', backdropFilter: 'blur(8px)',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
            <Icon.Mail size={15} /> Get in Touch
          </button>
          <a href="https://github.com/YounesSoul" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 48, padding: '0 24px', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)', background: 'transparent',
            color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
            <Icon.Github size={16} /> GitHub
          </a>
        </div>

        {/* Tech badges */}
        <div className="fade-up" style={{ animationDelay: '0.65s', marginTop: 44, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {techStack.map((t) => (
            <span key={t.label} style={{
              padding: '5px 13px', borderRadius: 7,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)',
              transition: 'all 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.color + '55'; e.currentTarget.style.color = t.color; e.currentTarget.style.background = t.color + '12'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Credibility strip */}
      <div className="fade-up" style={{ animationDelay: '0.8s', position: 'relative', zIndex: 10, width: '100%', padding: '0 24px 60px' }}>
        <div style={{
          maxWidth: 700, margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 28,
          display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap',
        }}>
          {credibilityItems.map(({ icon: Ic, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.32)', fontSize: 12, fontWeight: 500 }}>
              <Ic size={14} style={{ color: 'rgba(129,140,248,0.6)' }} /> {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10,
        animation: 'fadeIn 1s ease 1.5s both',
      }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Scroll</span>
        <div style={{ width: 20, height: 30, borderRadius: 10, border: '2px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.25)', animation: 'float 1.8s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { value: '1.57', suffix: 'M', prefix: '$', label: 'Revenue Analyzed', color: '#4338ca' },
    { value: '93', suffix: '%', label: 'CV Model F1 Score', color: '#7c3aed' },
    { value: '79', suffix: '%', label: 'Return Prediction Recall', color: '#0891b2' },
    { value: '3', suffix: '+', label: 'Production-Ready Projects', color: '#059669' },
  ];

  return (
    <section style={{ background: '#fff', padding: '72px 24px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
        {stats.map((s, i) => (
          <AnimateIn key={s.label} delay={i * 0.08}>
            <div style={{
              textAlign: 'center', padding: '32px 20px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            }}>
              <div className="stat-num" style={{ color: s.color, marginBottom: 8 }}>
                <CountUp target={s.value} prefix={s.prefix || ''} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.01em' }}>{s.label}</div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects({ onNavigate }) {
  const projects = [
    {
      id: 'retail-performance-dashboard',
      title: 'Retail Performance Dashboard',
      category: 'Business Intelligence',
      description: 'Analyzed $1.57M in retail revenue across 3K orders using SQL + Power BI — uncovering Technology as the most profitable category at 19% margin while Furniture posed critical operational risk.',
      tools: ['SQL', 'SQLite', 'Power BI'],
      metric: { label: 'Revenue Analyzed', value: '$1.57M' },
      image: 'images/retail-dashboard-v2.png',
      accentColor: '#f97316',
    },
    {
      id: 'predicting-customer-returns',
      title: 'Predicting Customer Returns',
      category: 'Machine Learning',
      description: 'End-to-end ML pipeline for imbalanced classification — detecting nearly 79% of return cases by optimizing Random Forest thresholds via F2-score instead of default accuracy.',
      tools: ['Python', 'Scikit-Learn', 'Pandas'],
      metric: { label: 'Recall Achieved', value: '79%' },
      image: 'images/feature-importance.png',
      accentColor: '#8b5cf6',
    },
    {
      id: 'vehicle-damage-detection',
      title: 'Vehicle Damage Detection',
      category: 'Computer Vision',
      description: 'MobileNetV2 transfer learning for automated insurance damage triage — 93% F1 after business-driven threshold optimization, with Grad-CAM explainability for real-world deployment.',
      tools: ['TensorFlow', 'Keras', 'Grad-CAM'],
      metric: { label: 'Damage F1 Score', value: '93%' },
      image: 'images/gradcam-examples.png',
      accentColor: '#0891b2',
    },
  ];

  return (
    <section style={{ background: 'var(--section-alt)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <AnimateIn>
          <SectionHeading
            label="Featured Work"
            title="Recent Projects"
            subtitle="Real-world data analytics and AI projects demonstrating business impact through SQL, dashboarding, machine learning, and deep learning."
          />
        </AnimateIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((project, i) => (
            <AnimateIn key={project.id} delay={i * 0.1}>
              <FeaturedProjectCard project={project} onNavigate={onNavigate} accent={project.accentColor} index={i} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button onClick={() => onNavigate('projects')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 46, padding: '0 28px', borderRadius: 10,
              border: '1.5px solid var(--border-strong)', background: '#fff',
              color: 'var(--fg)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--fg)'; e.currentTarget.style.transform = 'none'; }}>
              View All Projects <Icon.ArrowRight size={14} />
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, onNavigate, index }) {
  const [hovered, setHovered] = React.useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 20,
        border: '1px solid var(--border)', background: '#fff', overflow: 'hidden',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={() => onNavigate('project-' + project.id)}>

      {/* Image */}
      <div style={{ order: isEven ? 0 : 1, position: 'relative', minHeight: 280, overflow: 'hidden', background: 'var(--section-alt)' }}>
        <img src={project.image} alt={project.title} style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          position: 'absolute', inset: 0,
        }} />
        {/* Overlay tint */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.1), transparent)' }} />
        {/* Category pill */}
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: 99,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
            background: 'rgba(0,0,0,0.5)', color: '#fff', backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ order: isEven ? 1 : 0, padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 12, lineHeight: 1.25 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20 }}>
            {project.description}
          </p>
          {/* Tools */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
            {project.tools.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
          {/* Key metric */}
          <div style={{
            display: 'inline-flex', flexDirection: 'column',
            padding: '14px 20px', borderRadius: 12,
            background: 'var(--accent-bg)', border: '1px solid rgba(67,56,202,0.12)',
          }}>
            <span style={{ fontSize: 26, fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{project.metric.value}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: 2 }}>{project.metric.label}</span>
          </div>
        </div>

        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--accent)' }}>
          View Case Study
          <Icon.ArrowRight size={14} style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }} />
        </div>
      </div>
    </div>
  );
}

function SkillsHomeSection() {
  const groups = [
    { icon: Icon.BarChart, label: 'Data Analysis', skills: ['SQL', 'Power BI', 'Excel'], color: '#f97316' },
    { icon: Icon.Code, label: 'Programming', skills: ['Python', 'Pandas', 'NumPy'], color: '#3b82f6' },
    { icon: Icon.Brain, label: 'AI / ML', skills: ['Scikit-Learn', 'TensorFlow', 'Keras', 'Grad-CAM'], color: '#8b5cf6' },
    { icon: Icon.Layers, label: 'Tools', skills: ['Git', 'Jupyter', 'SQLite'], color: '#059669' },
  ];

  return (
    <section style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <AnimateIn>
          <SectionHeading label="Capabilities" title="Tools & Technologies" subtitle="The core technologies I use to turn data into actionable business insights." />
        </AnimateIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {groups.map((g, i) => (
            <AnimateIn key={g.label} delay={i * 0.08}>
              <SkillCard group={g} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group }) {
  const [hovered, setHovered] = React.useState(false);
  const Ic = group.icon;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px 24px', borderRadius: 16,
        border: hovered ? '1px solid ' + group.color + '44' : '1px solid var(--border)',
        background: hovered ? group.color + '06' : '#fff',
        boxShadow: hovered ? `0 8px 32px ${group.color}18` : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.25s ease',
      }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, marginBottom: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: group.color + '15', color: group.color,
        transition: 'transform 0.25s ease',
        transform: hovered ? 'scale(1.1)' : 'none',
      }}>
        <Ic size={20} />
      </div>
      <h3 style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg)', marginBottom: 14 }}>
        {group.label}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {group.skills.map(s => (
          <span key={s} style={{
            padding: '4px 10px', borderRadius: 6, fontSize: 11.5, fontWeight: 500,
            background: hovered ? group.color + '12' : 'var(--section-alt)',
            color: hovered ? group.color : 'var(--muted)',
            transition: 'all 0.2s',
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function AboutPreviewSection({ onNavigate }) {
  return (
    <section style={{ background: 'var(--section-alt)', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <AnimateIn>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>About Me</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15 }}>
              Where business meets data science
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 24 }}>
              I'm a data analyst and AI practitioner who transforms complex datasets into actionable business decisions. My work sits at the intersection of business intelligence, machine learning, and data storytelling.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--muted)', marginBottom: 32 }}>
              I specialize in building end-to-end analytics pipelines and ML solutions — always with a focus on outcomes that matter to real organizations.
            </p>
            <button onClick={() => onNavigate('about')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 24px', borderRadius: 10,
              border: '1.5px solid var(--border-strong)', background: '#fff',
              color: 'var(--fg)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--fg)'; }}>
              Learn more about me <Icon.ArrowRight size={14} />
            </button>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: Icon.Lightbulb, title: 'Problem Solver', desc: 'Every dataset is a business question waiting to be answered.', color: '#d97706' },
              { icon: Icon.TrendingUp, title: 'Impact Driven', desc: 'Focused on outcomes that move real business metrics.', color: '#059669' },
              { icon: Icon.Sparkles, title: 'Applied AI', desc: 'Building explainable, production-ready AI solutions.', color: '#7c3aed' },
            ].map((item, i) => {
              const Ic = item.icon;
              return (
                <div key={item.title} style={{
                  display: 'flex', gap: 16, padding: '20px 24px',
                  borderRadius: 14, background: '#fff', border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: item.color + '15', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Ic size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function ContactCTASection({ onNavigate }) {
  return (
    <section style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 24,
          background: 'linear-gradient(135deg, #312e81 0%, #4338ca 40%, #6d28d9 100%)',
          padding: '64px 48px', textAlign: 'center',
          boxShadow: '0 20px 60px rgba(67,56,202,0.3)',
        }}>
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', filter: 'blur(30px)' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', filter: 'blur(30px)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(199,210,254,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Open to opportunities</p>
            <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 14 }}>Let's Work Together</h2>
            <p style={{ fontSize: 15, color: 'rgba(199,210,254,0.75)', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Whether you're a recruiter, hiring manager, or collaborator — I'd love to connect and discuss how data-driven solutions can create impact.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('contact')} style={{
                height: 46, padding: '0 28px', borderRadius: 10, border: 'none',
                background: '#fff', color: '#4338ca', fontSize: 14, fontWeight: 700,
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
                Get in Touch
              </button>
              <button onClick={() => onNavigate('projects')} style={{
                height: 46, padding: '0 28px', borderRadius: 10,
                border: '2px solid rgba(255,255,255,0.3)', background: 'transparent',
                color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNavigate, tweaks = {} }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const showStats = tweaks.showStats !== false;
  return (
    <div className="page">
      <HeroSection onNavigate={onNavigate} />
      {showStats && <StatsStrip />}
      <FeaturedProjects onNavigate={onNavigate} />
      <SkillsHomeSection />
      <AboutPreviewSection onNavigate={onNavigate} />
      <ContactCTASection onNavigate={onNavigate} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// PROJECTS PAGE
// ══════════════════════════════════════════════════════════════

function ProjectsPage({ onNavigate }) {
  const allProjects = [
    {
      id: 'retail-performance-dashboard',
      title: 'Retail Performance Dashboard',
      category: 'Business Intelligence',
      description: 'Analyzed $1.57M in retail revenue across 3K orders using SQL and Power BI — uncovering that while Office Supplies leads revenue, Technology dominates profitability at 19% margin.',
      tools: ['SQL', 'SQLite', 'Power BI'],
      metric: { label: 'Revenue Analyzed', value: '$1.57M' },
      image: 'images/retail-dashboard-v2.png',
      results: ['$175K profit tracked', '19% tech margin', 'Q4 seasonality identified'],
    },
    {
      id: 'predicting-customer-returns',
      title: 'Predicting Customer Returns',
      category: 'Machine Learning',
      description: 'Built an imbalanced classification ML pipeline to predict retail customer returns, optimizing Random Forest thresholds via F2-score to detect nearly 79% of return cases.',
      tools: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
      metric: { label: 'Recall Achieved', value: '78.95%' },
      image: 'images/feature-importance.png',
      results: ['78.95% recall', 'F2 optimized threshold', 'PR-AUC: 25.48%'],
    },
    {
      id: 'vehicle-damage-detection',
      title: 'Vehicle Damage Detection',
      category: 'Computer Vision',
      description: 'End-to-end deep learning vehicle damage classification using MobileNetV2 transfer learning — 93% F1 after threshold optimization with Grad-CAM explainability.',
      tools: ['Python', 'TensorFlow', 'Keras', 'Grad-CAM'],
      metric: { label: 'Damage F1 Score', value: '93%' },
      image: 'images/gradcam-examples.png',
      results: ['93% F1 score', '70%+ fewer missed damages', 'Grad-CAM validated'],
    },
  ];

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page" style={{ paddingTop: 64 }}>
      {/* Page hero */}
      <div style={{
        background: 'var(--hero-bg)', padding: '80px 24px 64px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '20%', left: '60%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 99, border: '1px solid rgba(129,140,248,0.2)', background: 'rgba(99,102,241,0.08)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: 20 }}>
            Portfolio
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f0f4ff', marginBottom: 16, lineHeight: 1.1 }}>
            All <span className="grad-text">Projects</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(240,244,255,0.45)', maxWidth: 520, lineHeight: 1.7 }}>
            A collection of data analytics and AI projects, each solving real business problems with modern tools and techniques.
          </p>
        </div>
      </div>

      {/* Projects grid */}
      <div style={{ background: '#fff', padding: '64px 24px 96px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {allProjects.map((p, i) => (
            <AnimateIn key={p.id} delay={i * 0.1}>
              <ProjectGridCard project={p} onNavigate={onNavigate} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectGridCard({ project, onNavigate }) {
  const [hovered, setHovered] = React.useState(false);
  const categoryColors = {
    'Business Intelligence': '#f97316',
    'Machine Learning': '#8b5cf6',
    'Computer Vision': '#0891b2',
  };
  const accent = categoryColors[project.category] || 'var(--accent)';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate('project-' + project.id)}
      style={{
        borderRadius: 18, border: hovered ? `1px solid ${accent}44` : '1px solid var(--border)',
        background: '#fff', overflow: 'hidden', cursor: 'pointer',
        boxShadow: hovered ? `0 16px 48px ${accent}18, var(--shadow-md)` : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column',
      }}>
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', background: 'var(--section-alt)', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
          transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))' }} />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          padding: '4px 12px', borderRadius: 99,
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          background: accent, color: '#fff',
        }}>{project.category}</span>
        {/* Metric badge */}
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          padding: '6px 14px', borderRadius: 10, backdropFilter: 'blur(12px)',
          background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)',
          textAlign: 'right',
        }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{project.metric.value}</div>
          <div style={{ fontSize: 9.5, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{project.metric.label}</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 10, lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{project.description}</p>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
          {project.results.map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--muted)' }}>
              <Icon.Check size={12} style={{ color: accent, flexShrink: 0 }} /> {r}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
          {project.tools.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: accent, transition: 'gap 0.2s' }}>
          View Case Study <Icon.ArrowRight size={13} style={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform 0.2s' }} />
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
    title: 'Retail Performance Dashboard',
    category: 'Business Intelligence',
    description: 'Analyzed $1.57M in retail revenue across 3K orders using SQL and Power BI — uncovering that while Office Supplies leads revenue, Technology dominates profitability at 19% margin, and Furniture poses operational risk with only 2% margin and the highest return rate.',
    tools: ['SQL', 'SQLite', 'Power BI'],
    image: 'images/retail-dashboard-v2.png',
    kpis: [
      { label: 'Total Revenue', value: '$1.57M', color: '#4338ca' },
      { label: 'Total Profit', value: '$175K', color: '#059669' },
      { label: 'Profit Margin', value: '11.19%', color: '#7c3aed' },
      { label: 'Total Orders', value: '3K', color: '#0891b2' },
    ],
    businessProblem: 'A retail company needed to evaluate its overall business performance across products, customers, regions, and time periods. Management required clear visibility into revenue drivers, profitability gaps, customer concentration risks, and operational inefficiencies like high return rates — to support better strategic decision-making.',
    overview: 'This project combines SQL-based data engineering and analysis with Power BI dashboarding. Raw transactional data (5,901 records across Jan 2019 – Dec 2020) was ingested into SQLite, transformed into a star schema, validated for quality, and queried using advanced SQL techniques including window functions, CTEs, and ranking. The insights were then visualized in a professional Power BI dashboard.',
    results: [
      'Office Supplies leads revenue at ~$500K, but Technology is the most profitable category with a ~19% margin',
      'Furniture generates ~$400K in revenue but has a critically low ~2% margin and the highest return rate (~5%), flagging it as an operational risk',
      'Top 20% of customers contribute nearly 48% of total revenue, highlighting customer concentration risk',
      'Strong Q4 seasonality — monthly revenue peaked at $0.17M in late 2020',
      'The West region leads performance while the South underperforms',
    ],
    impact: 'The project highlights the critical difference between revenue leadership and profitability leadership. It identifies Furniture as a strategic risk area requiring immediate pricing or cost intervention, and provides management with data-backed recommendations for regional expansion, seasonal preparation, and customer retention strategies.',
    githubLink: null,
  },
  'predicting-customer-returns': {
    title: 'Predicting Customer Returns',
    category: 'Machine Learning',
    description: 'Built an imbalanced classification machine learning pipeline to predict retail customer returns, optimizing Random Forest decision thresholds via F2-score and PR-AUC to detect nearly 79% of return cases.',
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
    image: 'images/feature-importance.png',
    kpis: [
      { label: 'Recall', value: '78.95%', color: '#4338ca' },
      { label: 'F2 Score', value: '43.27%', color: '#7c3aed' },
      { label: 'PR-AUC', value: '25.48%', color: '#0891b2' },
      { label: 'Final Model', value: 'RF', color: '#059669' },
    ],
    businessProblem: 'A retail company noticed an increasing trend in customer returns, significantly impacting operational costs and profit margins. Predicting which orders are likely to be returned allows the business to proactively intervene — adjusting shipping expectations, reviewing high-risk product categories, or restricting certain promotional offers.',
    overview: 'This project implements an end-to-end machine learning pipeline to predict whether a retail order will be returned. It focuses heavily on addressing severe class imbalance and optimizing classification thresholds to prioritize recall, ensuring the maximum number of potential returns are caught while balancing precision.',
    methodology: 'Engineered temporal and logistics features from raw transaction data. Due to severe class imbalance, I utilized weighted models (Logistic Regression and Random Forest) and explicitly optimized the decision threshold using the F2-score to heavily prioritize Recall. The model\'s performance was evaluated using PR-AUC given the imbalanced nature of the dataset.',
    results: [
      'Order timing strongly impacts return probability',
      'Shipping delays correlate with higher returns',
      'High-value / low-margin orders show elevated return risk',
      'Regional behavior differs significantly, with certain categories driving more returns',
      'Random Forest significantly outperformed Logistic Regression at capturing complex non-linear relationships',
    ],
    impact: 'By detecting almost 79% of all expected returns prior to fulfillment, the business gains the capability to strategically intervene. Even with lower precision (expected in severe imbalance), the cost savings from prevented fast-shipping logistics on likely-returned items outweigh the cost of false positives.',
    visuals: [
      { src: 'images/rf-threshold.png', alt: 'RF Threshold Tradeoff', caption: 'Optimizing the decision threshold based on F2-Score.' },
      { src: 'images/pr-curve.png', alt: 'Precision–Recall Comparison', caption: 'PR Curve showcasing the superiority of Random Forest over Logistic Regression.' },
      { src: 'images/feature-importance.png', alt: 'Top Return Drivers', caption: 'Top 10 features driving customer returns.' },
    ],
    githubLink: 'https://github.com/YounesSoul/ml-return-prediction',
  },
  'vehicle-damage-detection': {
    title: 'Vehicle Damage Detection',
    category: 'Computer Vision',
    description: 'Built an end-to-end deep learning vehicle damage classification system using MobileNetV2 transfer learning, achieving 93% F1 after threshold optimization — with Grad-CAM explainability for insurance/fleet inspection workflows.',
    tools: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'Grad-CAM'],
    image: 'images/gradcam-examples.png',
    kpis: [
      { label: 'Damage F1', value: '92.8%', color: '#4338ca' },
      { label: 'Recall', value: '93.1%', color: '#059669' },
      { label: 'Precision', value: '92.5%', color: '#7c3aed' },
      { label: 'Accuracy', value: '93.0%', color: '#0891b2' },
    ],
    businessProblem: 'Manual vehicle damage assessment is slow, costly, and difficult to scale across insurance, rental, and fleet management operations. Claims adjusters must visually inspect every vehicle, creating bottlenecks that delay settlements and increase operational costs.',
    overview: 'This project implements an end-to-end deep learning pipeline for automated vehicle damage classification from images. Using MobileNetV2 transfer learning on 2,300 vehicle images, the model classifies vehicles as damaged or undamaged. The pipeline includes comprehensive EDA, stratified data splitting, transfer learning with frozen backbone, fine-tuning, business-driven threshold optimization, and Grad-CAM explainability.',
    methodology: 'Started with a pretrained MobileNetV2 backbone as a feature extractor, then progressively fine-tuned upper convolutional blocks with a low learning rate. Rather than accepting the default 0.50 sigmoid threshold, I swept thresholds from 0.10 to 0.90 and selected the optimal threshold (0.15) based on Damage F1 Score — prioritizing recall to minimize missed damage cases in insurance workflows.',
    results: [
      'Threshold optimization improved Damage F1 from 0.80 → 0.93 (+16% improvement)',
      'Reduced missed damage cases by 70%+ (recall: 68% → 93%) through business-driven threshold calibration',
      'Grad-CAM visualizations confirmed model focuses on actual damage regions, not background noise',
      'MobileNetV2 transfer learning achieved production-quality performance with only 2,300 training images',
      'Main failure modes identified: very subtle damage, reflective surfaces, and strong lighting artifacts',
    ],
    impact: 'By automatically detecting 93% of vehicle damage with high precision, this system enables insurance companies and fleet operators to dramatically accelerate damage triage. The Grad-CAM explainability layer provides adjusters with visual evidence of why the model flagged specific areas, building the trust required for real-world deployment.',
    visuals: [
      { src: 'images/confusion-matrix.png', alt: 'Baseline Confusion Matrix', caption: 'Baseline at default 0.50 threshold — 68% damage recall.' },
      { src: 'images/optimized-confusion-matrix.png', alt: 'Optimized Confusion Matrix', caption: 'After threshold optimization (0.15) — recall improved to 93.1%.' },
      { src: 'images/gradcam-examples.png', alt: 'Grad-CAM Explainability', caption: 'Grad-CAM heatmaps showing model focus on damage regions.' },
      { src: 'images/precision-recall.png', alt: 'Precision-Recall Curve', caption: 'PR curve with AUC = 0.979, demonstrating strong model discrimination.' },
    ],
    githubLink: 'https://github.com/YounesSoul/vehicle-damage-detection',
  },
};

function ProjectDetailPage({ projectId, onNavigate }) {
  const project = projectData[projectId];
  const [lightboxSrc, setLightboxSrc] = React.useState(null);
  React.useEffect(() => { window.scrollTo(0, 0); }, [projectId]);

  if (!project) return <div style={{ padding: 80, textAlign: 'center' }}>Project not found.</div>;

  const categoryColors = {
    'Business Intelligence': '#f97316',
    'Machine Learning': '#8b5cf6',
    'Computer Vision': '#0891b2',
  };
  const accent = categoryColors[project.category] || 'var(--accent)';

  return (
    <div className="page" style={{ paddingTop: 64 }}>
      {lightboxSrc && <Lightbox src={lightboxSrc} alt="Project visual" onClose={() => setLightboxSrc(null)} />}

      {/* Hero */}
      <div style={{ background: 'var(--hero-bg)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: 0, right: '10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)` }} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button onClick={() => onNavigate('projects')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            padding: '7px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
            <Icon.ArrowLeft size={14} /> Back to Projects
          </button>

          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 99, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: accent, color: '#fff', marginBottom: 20 }}>
            {project.category}
          </span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f0f4ff', marginBottom: 16, lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(240,244,255,0.45)', maxWidth: 640, lineHeight: 1.7, marginBottom: 28 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginRight: 4 }}>Tools</span>
            {project.tools.map(t => (
              <span key={t} style={{ padding: '4px 12px', borderRadius: 6, fontSize: 11.5, fontWeight: 600, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
            ))}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
                marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 16px', borderRadius: 8, fontSize: 12.5, fontWeight: 600,
                background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>
                <Icon.Github size={13} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* KPI Strip */}
      <div style={{ background: '#fff', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${project.kpis.length}, 1fr)`, gap: 1 }}>
          {project.kpis.map((kpi, i) => (
            <AnimateIn key={kpi.label} delay={i * 0.08}>
              <div style={{ textAlign: 'center', padding: '24px 16px', borderRight: i < project.kpis.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, letterSpacing: '-0.03em', color: kpi.color, lineHeight: 1, marginBottom: 8 }}>{kpi.value}</div>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{kpi.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Main image */}
      <div style={{ background: 'var(--section-alt)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', cursor: 'zoom-in' }}
          onClick={() => setLightboxSrc(project.image)}>
          <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
        </div>
      </div>

      {/* Content sections */}
      <DetailSection icon={Icon.Target} title="Business Problem" accentColor="#ef4444" bg="#fff">
        <p style={{ fontSize: 15.5, color: 'var(--muted)', lineHeight: 1.8 }}>{project.businessProblem}</p>
      </DetailSection>

      <DetailSection icon={Icon.BookOpen} title="Project Overview" accentColor="#3b82f6" bg="var(--section-alt)">
        <p style={{ fontSize: 15.5, color: 'var(--muted)', lineHeight: 1.8 }}>{project.overview}</p>
      </DetailSection>

      {project.methodology && (
        <DetailSection icon={Icon.GitBranch} title="Methodology & Approach" accentColor="#8b5cf6" bg="#fff">
          <p style={{ fontSize: 15.5, color: 'var(--muted)', lineHeight: 1.8 }}>{project.methodology}</p>
        </DetailSection>
      )}

      <DetailSection icon={Icon.TrendingUp} title="Results & Business Impact" accentColor="#059669" bg={project.methodology ? 'var(--section-alt)' : '#fff'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          {project.results.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 18px', borderRadius: 10, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <Icon.Check size={12} style={{ color: '#059669' }} />
              </div>
              <span style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.6 }}>{r}</span>
            </div>
          ))}
        </div>
        {/* Impact box */}
        <div style={{ padding: '24px', borderRadius: 14, background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)', border: '1px solid #c7d2fe' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <Icon.Sparkles size={16} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Business Value</span>
          </div>
          <p style={{ fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.75 }}>{project.impact}</p>
        </div>
      </DetailSection>

      {/* Visuals gallery */}
      {project.visuals && (
        <section style={{ background: '#fff', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <AnimateIn>
              <SectionHeading label="Visuals" title="Key Charts & Analysis" />
            </AnimateIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {project.visuals.map((v, i) => (
                <AnimateIn key={i} delay={i * 0.08}>
                  <div style={{
                    borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-sm)', cursor: 'zoom-in',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none'; }}
                    onClick={() => setLightboxSrc(v.src)}>
                    <img src={v.src} alt={v.alt} style={{ width: '100%', display: 'block', objectFit: 'cover', height: 240 }} />
                    <div style={{ padding: '14px 18px', borderTop: '1px solid var(--border)', background: 'var(--section-alt)' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)', marginBottom: 3 }}>{v.alt}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{v.caption}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back CTA */}
      <section style={{ background: 'var(--section-alt)', padding: '72px 24px', textAlign: 'center' }}>
        <AnimateIn>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>Explore More Projects</h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 400, margin: '0 auto 32px', lineHeight: 1.7 }}>
            See how I solve different business problems using data analytics, dashboarding, and machine learning.
          </p>
          <button onClick={() => onNavigate('projects')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            height: 46, padding: '0 28px', borderRadius: 10, border: 'none',
            background: 'var(--accent)', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer',
            boxShadow: 'var(--shadow-accent)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
            View All Projects <Icon.ArrowRight size={14} />
          </button>
        </AnimateIn>
      </section>
    </div>
  );
}

function DetailSection({ icon: Ic, title, accentColor, bg, children }) {
  return (
    <section style={{ background: bg, padding: '64px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <AnimateIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: accentColor + '18', color: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Ic size={19} />
            </div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800, letterSpacing: '-0.02em' }}>{title}</h2>
          </div>
          {children}
        </AnimateIn>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// ABOUT PAGE
// ══════════════════════════════════════════════════════════════

function AboutPage({ onNavigate }) {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const journeySteps = [
    { icon: Icon.GraduationCap, title: 'Business Foundation', desc: 'Understanding how organizations make decisions and where data creates the most value.', done: true },
    { icon: Icon.BarChart, title: 'Data Analytics & Dashboards', desc: 'Building end-to-end analytics pipelines — from SQL queries to Power BI dashboards tracking $1.57M in retail revenue.', done: true },
    { icon: Icon.Brain, title: 'Machine Learning & AI', desc: 'Classification models, threshold optimization, and deep learning for computer vision with Grad-CAM explainability.', done: true },
    { icon: Icon.Sparkles, title: 'Applied AI for Business', desc: 'Current focus: building explainable, production-ready AI solutions that bridge model performance and business impact.', done: false, current: true },
  ];

  const skillGroups = [
    { icon: Icon.BarChart, label: 'Data Analysis', skills: ['SQL', 'Power BI', 'Excel'], color: '#f97316', desc: 'Querying, reporting & visualization' },
    { icon: Icon.Code, label: 'Programming', skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'], color: '#3b82f6', desc: 'Pipelines, automation & ML workflows' },
    { icon: Icon.Brain, label: 'AI / ML', skills: ['Scikit-Learn', 'TensorFlow', 'Keras', 'Grad-CAM'], color: '#8b5cf6', desc: 'Classical models to deep learning' },
    { icon: Icon.Layers, label: 'Tools & Infra', skills: ['Git', 'Jupyter', 'SQLite', 'VS Code'], color: '#059669', desc: 'Version control, frameworks & dev tools' },
  ];

  return (
    <div className="page" style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div style={{ background: 'var(--hero-bg)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 99, border: '1px solid rgba(129,140,248,0.2)', background: 'rgba(99,102,241,0.08)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: 20 }}>
            About
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f0f4ff', marginBottom: 16, lineHeight: 1.1 }}>
            About <span className="grad-text">Me</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(240,244,255,0.45)', maxWidth: 520, lineHeight: 1.7, marginBottom: 28 }}>
            I turn complex data into clear business decisions — using modern analytics, machine learning, and a relentless focus on impact.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['AI & Data Analytics', 'SQL · Python · Power BI', 'Open to opportunities'].map(chip => (
              <span key={chip} style={{ padding: '6px 16px', borderRadius: 99, border: '1px solid rgba(129,140,248,0.2)', background: 'rgba(99,102,241,0.06)', fontSize: 12.5, fontWeight: 500, color: '#a5b4fc' }}>{chip}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Who I Am */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 72, alignItems: 'start' }}>
          <AnimateIn>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#eef0fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon.Sparkles size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Who I Am</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontSize: 15.5, color: 'var(--muted)', lineHeight: 1.8 }}>
                  I'm <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Younes Soulaiman</strong> — a data analyst and AI practitioner who transforms complex datasets into <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>actionable business decisions</strong>. My work sits at the intersection of business intelligence, machine learning, and data storytelling.
                </p>
                <p style={{ fontSize: 15.5, color: 'var(--muted)', lineHeight: 1.8 }}>
                  I specialize in building <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>end-to-end analytics pipelines</strong> and ML solutions — from retail revenue analysis to deep learning for computer vision — always with a focus on outcomes that matter.
                </p>
              </div>
              {/* Meta info */}
              <div style={{ marginTop: 28, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {[
                  { icon: Icon.MapPin, label: 'Based in Morocco' },
                  { icon: Icon.Briefcase, label: 'Open to opportunities' },
                ].map(({ icon: Ic, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--muted)', fontWeight: 500 }}>
                    <Ic size={14} style={{ color: 'var(--accent)' }} /> {label}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: Icon.Lightbulb, title: 'Problem Solver', desc: 'Every dataset is a business question waiting to be answered.', color: '#d97706' },
                { icon: Icon.TrendingUp, title: 'Impact Driven', desc: 'Focused on outcomes that move real business metrics.', color: '#059669' },
                { icon: Icon.Sparkles, title: 'Applied AI', desc: 'Building explainable, production-ready AI solutions.', color: '#7c3aed' },
              ].map(item => {
                const Ic = item.icon;
                return (
                  <div key={item.title} style={{
                    display: 'flex', gap: 14, padding: '16px 18px', borderRadius: 12,
                    border: '1px solid var(--border)', background: 'var(--section-alt)',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + '44'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: item.color + '15', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Ic size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--fg)', marginBottom: 3 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Journey */}
      <section style={{ background: 'var(--section-alt)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Target size={17} style={{ color: '#7c3aed' }} />
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>My Journey</h2>
            </div>
          </AnimateIn>
          <div style={{ position: 'relative' }}>
            {journeySteps.map((step, i) => {
              const Ic = step.icon;
              return (
                <AnimateIn key={step.title} delay={i * 0.1}>
                  <div style={{ display: 'flex', gap: 20, marginBottom: i < journeySteps.length - 1 ? 0 : 0 }}>
                    {/* Timeline */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: step.current ? 'var(--accent)' : step.done ? '#e0e7ff' : 'var(--section-alt)',
                        color: step.current ? '#fff' : step.done ? 'var(--accent)' : 'var(--muted)',
                        border: step.current ? 'none' : '2px solid ' + (step.done ? '#c7d2fe' : 'var(--border)'),
                        boxShadow: step.current ? '0 4px 16px rgba(67,56,202,0.3)' : 'none',
                        flexShrink: 0,
                      }}>
                        <Ic size={16} />
                      </div>
                      {i < journeySteps.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: 'linear-gradient(to bottom, #c7d2fe, #e0e7ff)', minHeight: 32, marginTop: 4 }} />
                      )}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: 32, paddingTop: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg)' }}>{step.title}</h3>
                        {step.current && <span style={{ padding: '2px 10px', borderRadius: 99, background: 'var(--accent)', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.06em' }}>CURRENT</span>}
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Toolkit */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#eef0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <Icon.Layers size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Technical Toolkit</h2>
              <p style={{ fontSize: 14.5, color: 'var(--muted)' }}>Technologies I use to deliver results</p>
            </div>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {skillGroups.map((g, i) => (
              <AnimateIn key={g.label} delay={i * 0.08}>
                <SkillCard group={g} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Looking for */}
      <section style={{ background: 'var(--section-alt)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <AnimateIn>
            <div style={{
              borderRadius: 20, background: 'linear-gradient(135deg, #eef0fe 0%, #f5f3ff 100%)',
              border: '1px solid #c7d2fe', padding: '40px 40px', boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Icon.Briefcase size={18} style={{ color: 'var(--accent)' }} />
                <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>What I'm Looking For</h2>
              </div>
              <p style={{ fontSize: 15, color: '#4338ca', lineHeight: 1.8, opacity: 0.85 }}>
                I'm actively seeking roles in <strong style={{ color: '#312e81' }}>data analytics</strong>, <strong style={{ color: '#312e81' }}>business intelligence</strong>, and <strong style={{ color: '#312e81' }}>AI/ML engineering</strong> where I can contribute to data-driven decision-making and grow alongside a team that values analytical rigor and business impact.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="mailto:topmind.youness@gmail.com" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '10px 22px', borderRadius: 9, border: 'none',
                  background: 'var(--accent)', color: '#fff', fontSize: 13.5, fontWeight: 600,
                  cursor: 'pointer', textDecoration: 'none',
                  boxShadow: 'var(--shadow-accent)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
                  <Icon.Mail size={13} /> Get in Touch
                </a>
                <a href="https://www.linkedin.com/in/younes-soulaiman-201b9a241/" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  padding: '10px 22px', borderRadius: 9, border: '1.5px solid #c7d2fe',
                  background: '#fff', color: 'var(--accent)', fontSize: 13.5, fontWeight: 600,
                  cursor: 'pointer', textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#c7d2fe'; }}>
                  <Icon.LinkedIn size={13} /> LinkedIn
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <ContactCTASection onNavigate={onNavigate} />
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
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const inputStyle = (field) => ({
    width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 14.5,
    border: `1.5px solid ${focused === field ? 'var(--accent)' : 'var(--border)'}`,
    background: focused === field ? '#fefeff' : '#fff',
    color: 'var(--fg)', outline: 'none',
    boxShadow: focused === field ? '0 0 0 3px rgba(67,56,202,0.08)' : 'none',
    transition: 'all 0.2s ease', fontFamily: 'inherit',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page" style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div style={{ background: 'var(--hero-bg)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 99, border: '1px solid rgba(129,140,248,0.2)', background: 'rgba(99,102,241,0.08)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: 20 }}>
            Contact
          </div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,60px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f0f4ff', marginBottom: 16, lineHeight: 1.1 }}>
            Let's <span className="grad-text">Connect</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(240,244,255,0.45)', maxWidth: 480, lineHeight: 1.7 }}>
            Whether you're a recruiter, hiring manager, or collaborator — I'd love to connect and explore how data can create impact together.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 64, alignItems: 'start' }}>
          {/* Left: info */}
          <AnimateIn>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>Get in Touch</h2>
              <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 36 }}>
                I'm actively seeking roles in data analytics, business intelligence, and AI/ML. Open to full-time positions, freelance projects, and collaborations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: Icon.Mail, label: 'Email', value: 'topmind.youness@gmail.com', href: 'mailto:topmind.youness@gmail.com' },
                  { icon: Icon.LinkedIn, label: 'LinkedIn', value: 'Younes Soulaiman', href: 'https://www.linkedin.com/in/younes-soulaiman-201b9a241/' },
                  { icon: Icon.Github, label: 'GitHub', value: 'YounesSoul', href: 'https://github.com/YounesSoul' },
                ].map(item => {
                  const Ic = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '16px 18px', borderRadius: 12, border: '1px solid var(--border)',
                      background: 'var(--section-alt)', textDecoration: 'none', color: 'var(--fg)',
                      transition: 'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-bg)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--section-alt)'; e.currentTarget.style.transform = 'none'; }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                        <Ic size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 13.5, fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Status */}
              <div style={{ marginTop: 32, padding: '16px 20px', borderRadius: 12, background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ position: 'relative', width: 10, height: 10 }}>
                    <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', animation: 'ping 1.5s infinite' }} />
                    <span style={{ position: 'relative', display: 'block', width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#15803d' }}>Available for new opportunities</span>
                </div>
                <p style={{ fontSize: 12.5, color: '#166534', marginTop: 4 }}>Typically responds within 24 hours.</p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={0.15}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '64px 40px', borderRadius: 20, border: '1px solid var(--border)', background: 'var(--section-alt)' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon.Check size={24} style={{ color: '#059669' }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontSize: 14.5, color: 'var(--muted)' }}>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--fg-2)', letterSpacing: '0.04em', marginBottom: 8 }}>Name *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={inputStyle('name')} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--fg-2)', letterSpacing: '0.04em', marginBottom: 8 }}>Email *</label>
                    <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={inputStyle('email')} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--fg-2)', letterSpacing: '0.04em', marginBottom: 8 }}>Subject</label>
                  <input type="text" placeholder="What's this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                    style={inputStyle('subject')} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--fg-2)', letterSpacing: '0.04em', marginBottom: 8 }}>Message *</label>
                  <textarea required rows={6} placeholder="Tell me about your project, role, or just say hello..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 140 }} />
                </div>
                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  height: 48, borderRadius: 10, border: 'none',
                  background: 'var(--accent)', color: '#fff', fontSize: 14.5, fontWeight: 600,
                  cursor: 'pointer', boxShadow: 'var(--shadow-accent)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(67,56,202,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-accent)'; }}>
                  <Icon.Send size={15} /> Send Message
                </button>
              </form>
            )}
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}

// Expose all pages
Object.assign(window, {
  HomePage, ProjectsPage, ProjectDetailPage, AboutPage, ContactPage,
  ContactCTASection, SkillCard,
});

// ── Main App ─────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#10b981",
  "accentSecondary": "#f59e0b",
  "cardRadius": 20,
  "fontScale": 1
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = React.useState('home');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = tweaks || TWEAK_DEFAULTS;

  React.useEffect(() => {
    document.documentElement.style.setProperty('--em', t.accentColor);
    document.documentElement.style.setProperty('--am', t.accentSecondary);
    document.documentElement.style.setProperty('--grad', `linear-gradient(135deg, ${t.accentColor}, ${t.accentSecondary})`);
    document.documentElement.style.setProperty('--grad-text', `linear-gradient(135deg, ${t.accentColor} 0%, ${t.accentSecondary} 100%)`);
    document.documentElement.style.setProperty('--radius', t.cardRadius + 'px');
    document.documentElement.style.fontSize = (t.fontScale * 100) + '%';
  }, [tweaks]);

  const navigate = React.useCallback((target) => {
    setPage(target);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    if (page === 'home') return <HomePage onNavigate={navigate} />;
    if (page === 'projects') return <ProjectsPage onNavigate={navigate} />;
    if (page === 'about') return <AboutPage onNavigate={navigate} />;
    if (page === 'contact') return <ContactPage />;
    if (page.startsWith('project-')) return <ProjectDetailPage projectId={page.replace('project-', '')} onNavigate={navigate} />;
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <React.Fragment>
      <Navbar currentPage={page.startsWith('project-') ? 'projects' : page} onNavigate={navigate} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer onNavigate={navigate} />

      <TweaksPanel>
        <TweakSection label="Accent Colors">
          <TweakColor label="Primary (Emerald)" value={t.accentColor} onChange={v => setTweak('accentColor', v)} />
          <TweakColor label="Secondary (Amber)" value={t.accentSecondary} onChange={v => setTweak('accentSecondary', v)} />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakSlider label="Card Radius" value={t.cardRadius} min={4} max={32} step={2} unit="px" onChange={v => setTweak('cardRadius', v)} />
          <TweakSlider label="Font Scale" value={t.fontScale} min={0.85} max={1.2} step={0.05} onChange={v => setTweak('fontScale', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

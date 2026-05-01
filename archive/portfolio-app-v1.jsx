// ── Main App + Router + Tweaks ──────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#4338ca",
  "cardRadius": 18,
  "fontScale": 1,
  "showStats": true,
  "projectLayout": "grid"
}/*EDITMODE-END*/;

function shiftHue(hex, degrees) {
  try {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
      else if (max === g) h = ((b - r) / d + 2) / 6;
      else h = ((r - g) / d + 4) / 6;
    }
    h = ((h * 360 + degrees) % 360) / 360;
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p2 = 2 * l - q2;
    const ro = Math.round(hue2rgb(p2, q2, h + 1/3) * 255);
    const go = Math.round(hue2rgb(p2, q2, h) * 255);
    const bo = Math.round(hue2rgb(p2, q2, h - 1/3) * 255);
    return '#' + [ro, go, bo].map(x => x.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    return hex;
  }
}

function App() {
  const [page, setPage] = React.useState('home');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks as CSS custom properties
  React.useEffect(() => {
    const t = tweaks || TWEAK_DEFAULTS;
    document.documentElement.style.setProperty('--accent', t.accentColor);
    document.documentElement.style.setProperty('--accent-2', shiftHue(t.accentColor, 25));
    document.documentElement.style.setProperty('--accent-bg', t.accentColor + '14');
    document.documentElement.style.setProperty('--accent-light', shiftHue(t.accentColor, -15) + 'cc');
    document.documentElement.style.setProperty('--shadow-accent', `0 8px 32px ${t.accentColor}30`);
    document.documentElement.style.setProperty('--radius', t.cardRadius + 'px');
    document.documentElement.style.fontSize = (t.fontScale * 100) + '%';
  }, [tweaks]);

  const navigate = React.useCallback((target) => {
    setPage(target);
    window.scrollTo(0, 0);
  }, []);

  const t = tweaks || TWEAK_DEFAULTS;

  const renderPage = () => {
    if (page === 'home') return <HomePage onNavigate={navigate} tweaks={t} />;
    if (page === 'projects') return <ProjectsPage onNavigate={navigate} tweaks={t} />;
    if (page === 'about') return <AboutPage onNavigate={navigate} tweaks={t} />;
    if (page === 'contact') return <ContactPage tweaks={t} />;
    if (page.startsWith('project-')) {
      const slug = page.replace('project-', '');
      return <ProjectDetailPage projectId={slug} onNavigate={navigate} tweaks={t} />;
    }
    return <HomePage onNavigate={navigate} tweaks={t} />;
  };

  return (
    <React.Fragment>
      <Navbar currentPage={page.startsWith('project-') ? 'projects' : page} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />

      <TweaksPanel>
        <TweakSection label="Colors">
          <TweakColor label="Primary Accent" value={t.accentColor} onChange={v => setTweak('accentColor', v)} />
        </TweakSection>

        <TweakSection label="Layout">
          <TweakSlider label="Card Radius" value={t.cardRadius} min={4} max={28} step={2} unit="px" onChange={v => setTweak('cardRadius', v)} />
          <TweakSlider label="Font Scale" value={t.fontScale} min={0.85} max={1.2} step={0.05} onChange={v => setTweak('fontScale', v)} />
          <TweakToggle label="Show Stats Strip" value={t.showStats} onChange={v => setTweak('showStats', v)} />
        </TweakSection>

        <TweakSection label="Projects">
          <TweakRadio
            label="Card Layout"
            value={t.projectLayout}
            options={[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]}
            onChange={v => setTweak('projectLayout', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

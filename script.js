/* ============================================================
   e& CX Solutions — Premium Light Presentation Stylesheet
   Corporate Brand Identity Shift: White Theme & e& Red Accent
   ============================================================ */

/* ── THEME COLORS SYSTEM (CSS VARIABLES) ── */
:root {
  /* Corporate Brand Identity Palette */
  --primary-red:      #E60028;  /* Primary brand red */
  --primary-red-dark: #B00020;  /* Deep crimson shadow */
  --primary-red-hover:#C40024;  /* Vibrant hover red */
  
  /* Core Clean Background Overhaul */
  --c-bg:             #FFFFFF;  /* Modern crisp pure white background */
  --c-bg-alt:         #F8F9FB;  /* Soft enterprise light gray background */
  --c-surface:        #FFFFFF;  /* Pure white dashboard cards */
  --c-surface-2:      #F3F4F6;  /* High-contrast list/secondary items */
  --c-border:         #E5E7EB;  /* Soft, thin structural separation borders */
  
  /* Premium Balanced Typography */
  --c-text:           #1F2937;  /* Deep Slate/Charcoal for high contrast readability */
  --c-text-muted:     #6B7280;  /* Subtle ash gray for helper text/labels */
  --c-text-dark:      #FFFFFF;  /* Swapped light text indicator for dark buttons */

  /* Data-centric Accents */
  --c-accent:         #E60028;  /* Dominant accent mapped to e& Red */
  --c-accent-2:       #2563EB;  /* Professional info sky blue */
  --c-warn:           #F59E0B;  /* Balanced warning amber */
  --c-alert:          #DC2626;  /* Actionable error/violation red */

  /* Normalized Structural Typography */
  --font-display:     'Inter', system-ui, -apple-system, sans-serif;
  --font-body:        'Inter', system-ui, -apple-system, sans-serif;

  /* Polished Card Elements */
  --radius-sm:        8px;
  --radius-md:        14px;
  --radius-lg:        18px;

  /* Elegant Dashboard Shadows */
  --shadow-card:      0 8px 30px rgba(0,0,0,0.04);
  --shadow-lg:        0 12px 40px rgba(0,0,0,0.06);

  --nav-h:            70px;
  --transition:       0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── RESET & STRUCTURE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--c-bg);
  color: var(--c-text);
  line-height: 1.65;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
ul[role="list"] { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
canvas { max-width: 100%; }

/* ── REDESIGNED TOP NAV ── */
.topnav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border);
  height: var(--nav-h);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  gap: 1.5rem;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.nav-brand img {
  height: 32px;
  width: auto;
  object-fit: contain;
}
.brand-text {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--c-text);
  letter-spacing: -0.01em;
}
.nav-links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
}
.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-text-muted);
  transition: var(--transition);
}
.nav-link:hover {
  color: var(--primary-red);
  background: rgba(230, 0, 40, 0.05);
}
.nav-link.active {
  background: var(--primary-red);
  color: #FFFFFF;
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--c-text);
  border-radius: 2px;
  transition: var(--transition);
}
.progress-bar {
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  background: var(--primary-red);
  width: 0%;
  transition: width 0.1s linear;
}

/* Mobile drawer */
.mobile-drawer {
  position: fixed;
  top: var(--nav-h); right: -280px;
  width: 280px; height: calc(100vh - var(--nav-h));
  background: var(--c-bg);
  z-index: 999;
  padding: 1.5rem;
  transition: right 0.3s ease;
  border-left: 1px solid var(--c-border);
}
.mobile-drawer.open { right: 0; }
.mobile-drawer ul { list-style: none; }
.drawer-link {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid var(--c-border);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--c-text-muted);
  transition: color 0.2s;
}
.drawer-link:hover { color: var(--primary-red); }
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.15);
  z-index: 998;
  display: none;
}
.drawer-overlay.active { display: block; }

/* ── SECTIONS ── */
.section {
  padding: 8rem 1.5rem 6rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section-dark {
  background: var(--c-bg-alt);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Section tags & headers */
.section-header { margin-bottom: 4rem; }
.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-red);
  margin-bottom: 1rem;
  padding: 0.35rem 0.9rem;
  border: 1px solid rgba(230,0,40,0.15);
  border-radius: 999px;
  background: rgba(230,0,40,0.04);
}
.section-tag-light { color: var(--primary-red); }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--c-text);
}
.section-title.light { color: var(--c-text); }

/* ── HERO REDESIGN ── */
.hero-section {
  position: relative;
  padding-top: calc(var(--nav-h) + 4rem);
  min-height: 100vh;
  background: var(--c-bg);
  overflow: hidden;
  display: flex;
  align-items: center;
}
.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(230,0,40,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(230,0,40,0.015) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}
.hero-bg-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(230,0,40,0.03) 0%, transparent 80%);
}
.hero-content {
  max-width: 800px;
  padding: 0 1.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.hero-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--primary-red);
  margin-bottom: 1.5rem;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: var(--c-text);
}
.hero-title em {
  font-style: normal;
  color: var(--primary-red);
}
.hero-subtitle {
  font-size: 1.15rem;
  color: var(--c-text-muted);
  max-width: 640px;
  margin-bottom: 3.5rem;
  line-height: 1.75;
}
.hero-subtitle strong { color: var(--c-text); }
.hero-kpi-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 3.5rem;
}
.hero-kpi {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}
.hero-kpi:hover { transform: translateY(-4px); border-color: var(--primary-red); box-shadow: var(--shadow-lg); }
.hero-kpi.kpi-warn  { border-top: 3px solid var(--c-warn); }
.hero-kpi.kpi-alert { border-top: 3px solid var(--c-alert); }
.hero-kpi.kpi-critical { border-top: 3px solid var(--primary-red); }
.kpi-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--c-text);
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}
.kpi-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-text-muted);
}

/* Redesigned Button Mechanics */
.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-red);
  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(230,0,40,0.25);
  transition: var(--transition);
}
.hero-cta:hover {
  background: var(--primary-red-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(230,0,40,0.35);
}
.hero-badge {
  position: absolute;
  right: 6vw; top: 50%;
  transform: translateY(-50%);
  width: min(200px, 20vw);
  opacity: 0.15;
  pointer-events: none;
}
.hero-badge svg { width: 100%; height: auto; }

/* ── EXECUTIVE NARRATIVE & CARDS ── */
.summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.lead-text {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75;
  color: var(--c-text);
  margin-bottom: 1.5rem;
}
.summary-narrative p {
  color: var(--c-text-muted);
  margin-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.8;
}
.summary-narrative strong { color: var(--c-text); }
.summary-narrative em { color: var(--primary-red); font-style: normal; font-weight: 600; }
.summary-callouts { display: flex; flex-direction: column; gap: 1.25rem; }
.callout {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}
.callout:hover { transform: translateX(6px); box-shadow: var(--shadow-lg); }
.callout-problem { border-left: 4px solid var(--c-alert); }
.callout-data    { border-left: 4px solid var(--c-warn); }
.callout-geo     { border-left: 4px solid var(--primary-red); }
.callout-icon { font-size: 1.5rem; flex-shrink: 0; }
.callout strong { display: block; font-size: 1rem; margin-bottom: 0.35rem; color: var(--c-text); }
.callout p { font-size: 0.88rem; color: var(--c-text-muted); margin: 0; line-height: 1.6; }

/* ── CHARTS & VISUALIZATIONS ── */
.chart-insights-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;
}
.chart-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-card);
}
.chart-card-light {
  background: var(--c-surface);
  border-color: var(--c-border);
}
.chart-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-bottom: 1.75rem;
}
.chart-wrap { position: relative; height: 300px; }
.chart-wrap-sm { height: 240px; }
.insights-column { display: flex; flex-direction: column; gap: 1rem; }
.insight-card {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-sm);
  background: var(--c-bg-alt);
  border: 1px solid var(--c-border);
  border-left: 4px solid transparent;
}
.insight-best { border-left-color: #10B981; }
.insight-warn { border-left-color: var(--c-warn); }
.insight-alert { border-left-color: var(--c-alert); }
.insight-badge {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  margin-bottom: 0.35rem;
}
.insight-card strong { display: block; font-size: 0.95rem; color: var(--c-text); margin-bottom: 0.25rem; }
.insight-card p { font-size: 0.85rem; color: var(--c-text-muted); margin: 0; line-height: 1.5; }
.stat-accent { color: #10B981; font-weight: 700; }
.stat-warn { color: var(--c-warn); font-weight: 700; }
.stat-alert { color: var(--c-alert); font-weight: 700; }

/* Monthly Summary Redesign */
.monthly-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
.month-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-card);
}
.month-name { font-size: 1.1rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--c-text); border-bottom: 2px solid var(--c-bg-alt); padding-bottom: 0.5rem; }
.month-stats { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
.month-stats > div { display: flex; justify-content: space-between; align-items: center; }
.m-lbl { font-size: 0.82rem; color: var(--c-text-muted); }
.m-val { font-size: 0.95rem; font-weight: 700; color: var(--c-text); }
.month-progress { height: 6px; background: var(--c-surface-2); border-radius: 999px; overflow: hidden; position: relative; }
.month-bar { height: 100%; background: var(--primary-red); border-radius: 999px; transition: width 1s ease; }

/* ── TAGGING & HISTOGRAM SECTIONS ── */
.tagging-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3.5rem; align-items: start; }
.cat-list { display: flex; flex-direction: column; gap: 1.1rem; }
.cat-item { display: flex; flex-direction: column; gap: 0.4rem; }
.cat-meta { display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 600; }
.cat-name { color: var(--c-text); }
.cat-count { color: var(--c-text-muted); }
.cat-track { height: 8px; background: var(--c-surface-2); border-radius: 999px; overflow: hidden; }
.cat-bar { height: 100%; background: var(--primary-red); border-radius: 999px; transition: width 1s ease; }

/* ── HOTSPOT REGIONS ── */
.hotspot-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3.5rem; align-items: center; }
.region-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
.region-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  transition: var(--transition);
}
.region-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--primary-red); }
.region-card.reg-critical { border-top: 4px solid var(--c-alert); }
.reg-name { font-size: 0.95rem; font-weight: 700; color: var(--c-text-muted); margin-bottom: 0.5rem; }
.reg-num { font-size: 1.8rem; font-weight: 800; color: var(--c-text); line-height: 1.1; margin-bottom: 0.25rem; letter-spacing: -0.02em; }
.reg-lbl { font-size: 0.78rem; color: var(--c-text-muted); }

/* ── STRATEGIC ACTION CARDS ── */
.actions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem; }
.action-card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}
.action-card::before {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--c-surface-2);
}
.action-card.act-red::before { background: var(--primary-red); }
.action-card.act-blue::before { background: var(--c-accent-2); }
.action-card.act-amber::before { background: var(--c-warn); }

.act-step { font-size: 0.75rem; font-weight: 800; color: var(--primary-red); letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 1rem; display: block; }
.act-title { font-size: 1.2rem; font-weight: 800; color: var(--c-text); margin-bottom: 1rem; line-height: 1.3; }
.act-desc { font-size: 0.92rem; color: var(--c-text-muted); line-height: 1.6; margin-bottom: 1.75rem; }
.act-impact { background: var(--c-bg-alt); padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--c-border); }
.act-imp-lbl { font-size: 0.68rem; font-weight: 700; color: var(--c-text-muted); text-transform: uppercase; display: block; margin-bottom: 0.25rem; }
.act-imp-val { font-size: 0.88rem; font-weight: 700; color: var(--c-text); }

/* Conclusion Panel */
.conclusion-box { background: var(--c-bg-alt); border: 1px solid var(--c-border); border-radius: var(--radius-lg); padding: 3rem; margin-top: 4rem; }
.conclusion-inner { display: grid; grid-template-columns: 1fr 1.5fr; gap: 3rem; align-items: center; }
.conclusion-left h3 { font-size: 1.6rem; font-weight: 800; color: var(--c-text); line-height: 1.25; }
.conclusion-right { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.cm-item { text-align: center; background: var(--c-surface); padding: 1.5rem 1rem; border-radius: var(--radius-md); box-shadow: var(--shadow-card); border: 1px solid var(--c-border); }
.cm-num { display: block; font-size: 2rem; font-weight: 900; color: var(--primary-red); margin-bottom: 0.25rem; letter-spacing: -0.02em; }
.cm-lbl { font-size: 0.78rem; font-weight: 600; color: var(--c-text-muted); line-height: 1.4; }

/* ── GLOBAL FOOTER ── */
.site-footer { background: var(--c-bg-alt); border-top: 1px solid var(--c-border); padding: 3rem 1.5rem; text-align: center; }
.footer-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; align-items: center; }
.footer-brand { display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: var(--c-text); }
.footer-meta { font-size: 0.82rem; color: var(--c-text-muted); }
.footer-copy { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-red); font-weight: 700; }

/* Back to Top Utilities */
.back-to-top { position: fixed; bottom: 2rem; right: 2rem; width: 44px; height: 44px; border-radius: 50%; background: var(--primary-red); color: #FFFFFF; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(230,0,40,0.3); opacity: 0; visibility: hidden; transition: var(--transition); z-index: 99; }
.back-to-top.visible { opacity: 1; visibility: visible; }
.back-to-top:hover { background: var(--primary-red-hover); transform: translateY(-2px); }

/* Navigation UI Buttons */
.slide-nav { position: fixed; bottom: 2rem; left: 2rem; background: var(--c-surface); border: 1px solid var(--c-border); padding: 0.5rem 1rem; border-radius: 999px; display: flex; align-items: center; gap: 1rem; box-shadow: var(--shadow-card); z-index: 99; }
.slide-btn { width: 30px; height: 30px; border-radius: 50%; background: var(--c-bg-alt); color: var(--c-text); font-weight: 700; display: flex; align-items: center; justify-content: center; transition: var(--transition); border: 1px solid var(--c-border); }
.slide-btn:hover { background: var(--primary-red); color: #FFFFFF; border-color: var(--primary-red); }
.slide-indicator { font-size: 0.8rem; font-weight: 700; color: var(--c-text-muted); font-variant-numeric: tabular-nums; }

/* ── ANIMATION MECHANICS ── */
.reveal, .reveal-right, .reveal-up { opacity: 0; transition: all 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.reveal { transform: translateY(20px); }
.reveal-right { transform: translateX(30px); }
.reveal-up { transform: translateY(30px); }

.reveal.in, .reveal-right.in, .reveal-up.in { opacity: 1; transform: translate(0); }
.reveal-up.in { transition-delay: var(--delay, 0s); }

/* ── MEDIA RESPONSIVE QUERY BREAKPOINTS ── */
@media (max-width: 1024px) {
  .summary-grid, .chart-insights-grid, .tagging-grid, .hotspot-grid, .conclusion-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .actions-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero-badge { display: none; }
  .actions-grid, .region-cards { grid-template-columns: 1fr; }
  .hero-kpi-row { grid-template-columns: repeat(2, 1fr); }
  .section { padding: 6rem 1rem 4rem; }
}

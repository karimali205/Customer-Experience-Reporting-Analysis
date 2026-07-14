/* ============================================================
   cx Solution e& — Premium Presentation Light Script Refinement
   ============================================================ */

'use strict';

/* ── SECTIONS CONFIGURATION ── */
const SECTIONS = ['hero', 'summary', 'sla', 'tagging', 'hotspot', 'actions'];
let currentSection = 0;

/* ── NAV BAR PROGRESS TRACKING ── */
const progressBar = document.getElementById('progressBar');
const topnav      = document.getElementById('topnav');

function updateProgress() {
  const scrollTop   = window.scrollY;
  const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
  const pct         = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(pct));
}

/* ── STICKY SYNC LINK UTILITIES ── */
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const offset = 140;
  let active = 0;
  SECTIONS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= offset) active = i;
  });
  currentSection = active;
  navLinks.forEach((l, i) => l.classList.toggle('active', i === active));
  document.getElementById('slideIndicator').textContent = `${active + 1} / ${SECTIONS.length}`;
}

/* ── SCROLL OBSERVER REVEAL LOGIC ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-right, .reveal-up');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      animateBarsIn(e.target);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

function animateBarsIn(container) {
  const bars = container.querySelectorAll ? container.querySelectorAll('.cat-bar, .month-bar') : [];
  bars.forEach(b => {
    const target = b.style.getPropertyValue('--w') || b.style.width;
    b.style.width = target;
  });
}

document.querySelectorAll('.cat-bar, .month-bar').forEach(b => {
  const target = b.style.getPropertyValue('--w') || b.style.width;
  if (!target) return;
  b.style.width = '0%';

  const barObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      b.style.width = target;
      barObserver.disconnect();
    }
  }, { threshold: 0.1 });
  barObserver.observe(b);
});

/* ── KPI NATIVE COUNT ANIMATION ── */
function countUp(el) {
  const target = parseFloat(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || '';
  const isDecimal = target % 1 !== 0;
  const duration = 1200;
  const steps    = 50;
  const increment = target / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isDecimal
      ? current.toFixed(1) + suffix
      : Math.round(current).toLocaleString() + suffix;
  }, duration / steps);
}

const kpiNums = document.querySelectorAll('.kpi-num[data-count]');
const kpiObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target);
      kpiObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
kpiNums.forEach(n => kpiObserver.observe(n));

/* ── INTERACTIVE CONTROLS ── */
const btt = document.getElementById('backToTop');
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentSection > 0) scrollToSection(currentSection - 1);
});
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentSection < SECTIONS.length - 1) scrollToSection(currentSection + 1);
});

function scrollToSection(idx) {
  const el = document.getElementById(SECTIONS[idx]);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    if (currentSection < SECTIONS.length - 1) scrollToSection(currentSection + 1);
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
    e.preventDefault();
    if (currentSection > 0) scrollToSection(currentSection - 1);
  }
});

/* ── RESPONSIVE MOBILE DRAWER ── */
const hamburger    = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function toggleDrawer() {
  const open = mobileDrawer.classList.toggle('open');
  drawerOverlay.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', open);
}
function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', toggleDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

/* ── CHART.JS PALETTE REDESIGN FOR LIGHT BRANDED CONTEXT ── */
const BRAND_COLORS = {
  red: '#E60028',
  redHover: '#C40024',
  slateText: '#1F2937',
  mutedText: '#6B7280',
  gridBorder: '#E5E7EB',
  blue: '#2563EB',
  amber: '#F59E0B',
  green: '#10B981'
};

// Global default typography initialization override
if (window.Chart) {
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = BRAND_COLORS.slateText;
}

window.addEventListener('DOMContentLoaded', () => {
  // Chart 1: Weekly Ticket Volume vs SLA Breach Rate
  const ctxWeekly = document.getElementById('weeklyChart');
  if (ctxWeekly) {
    const labels = ['Wk 35', 'Wk 36', 'Wk 37', 'Wk 38', 'Wk 39', 'Wk 40', 'Wk 41', 'Wk 42', 'Wk 43', 'Wk 44', 'Wk 45', 'Wk 46', 'Wk 47'];
    const volume = [580, 620, 810, 750, 690, 520, 480, 510, 530, 550, 490, 500, 515];
    const breachRate = [19.3, 11.2, 9.8, 14.1, 8.5, 4.2, 5.1, 3.8, 4.0, 4.5, 18.3, 6.2, 5.9];

    new Chart(ctxWeekly, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Tickets Volume',
            data: volume,
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            borderColor: BRAND_COLORS.blue,
            borderWidth: 1,
            yAxisID: 'y'
          },
          {
            label: 'SLA Breach %',
            data: breachRate,
            type: 'line',
            borderColor: BRAND_COLORS.red,
            backgroundColor: BRAND_COLORS.red,
            borderWidth: 2,
            pointBackgroundColor: BRAND_COLORS.red,
            tension: 0.1,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: BRAND_COLORS.slateText } }
        },
        scales: {
          x: { grid: { color: BRAND_COLORS.gridBorder }, ticks: { color: BRAND_COLORS.mutedText } },
          y: { position: 'left', grid: { color: BRAND_COLORS.gridBorder }, ticks: { color: BRAND_COLORS.mutedText } },
          y1: { position: 'right', grid: { display: false }, ticks: { color: BRAND_COLORS.mutedText }, min: 0, max: 25 }
        }
      }
    });
  }

  // Chart 2: Customer Satisfaction (CSAT) vs Order Categories
  const ctxCategory = document.getElementById('categoryChart');
  if (ctxCategory) {
    new Chart(ctxCategory, {
      type: 'bubble',
      data: {
        datasets: [
          { label: 'Missing Item', data: [{ x: 30, y: 55, r: 20 }], backgroundColor: 'rgba(230, 0, 40, 0.6)' },
          { label: 'Wrong Item', data: [{ x: 13, y: 62, r: 14 }], backgroundColor: 'rgba(37, 99, 235, 0.6)' },
          { label: 'Quality Issues', data: [{ x: 12, y: 60, r: 12 }], backgroundColor: 'rgba(245, 158, 11, 0.6)' },
          { label: 'Returns', data: [{ x: 7, y: 78, r: 10 }], backgroundColor: 'rgba(16, 185, 129, 0.6)' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: BRAND_COLORS.slateText } }
        },
        scales: {
          x: { title: { display: true, text: 'Volume Share (%)', color: BRAND_COLORS.slateText }, grid: { color: BRAND_COLORS.gridBorder }, ticks: { color: BRAND_COLORS.mutedText } },
          y: { title: { display: true, text: 'CSAT (%)', color: BRAND_COLORS.slateText }, grid: { color: BRAND_COLORS.gridBorder }, ticks: { color: BRAND_COLORS.mutedText }, min: 40, max: 90 }
        }
      }
    });
  }

  // Chart 3: Regional SLA Breach Comparisons
  const ctxRegion = document.getElementById('regionChart');
  if (ctxRegion) {
    new Chart(ctxRegion, {
      type: 'doughnut',
      data: {
        labels: ['California', 'Texas', 'Florida', 'New York'],
        datasets: [{
          data: [27.98, 7.12, 6.45, 5.80],
          backgroundColor: [BRAND_COLORS.red, BRAND_COLORS.blue, BRAND_COLORS.amber, BRAND_COLORS.green]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: BRAND_COLORS.slateText } }
        }
      }
    });
  }
});

/* ── SCROLL DEBOUNCE REFRESH ── */
window.addEventListener('scroll', () => {
  updateProgress();
  updateActiveNav();
  btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

updateProgress();
updateActiveNav();
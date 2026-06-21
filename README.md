# Customer-Experience-Reporting-Analysis
Interactive scrollable web report for CX Solutions e&amp; — SLA performance, ticket tagging, hotspot analysis, and action plan, with live charts and mobile-responsive navigation.

## Overview
This report walks through ticket volume trends, SLA breach rates, issue tagging/categorization, regional hotspot analysis, and a recommended action plan — all in a scrollable, presentation-style web page.

## Features
- 📊 Live charts (Chart.js) — weekly ticket volume vs. SLA breach %, CSAT by issue category, regional breach comparison
- 📱 Fully responsive — works on desktop and mobile
- 🧭 Sticky navigation with scroll progress bar and section indicator
- ⌨️ Keyboard navigation (arrow keys) between sections
- ✨ Scroll-reveal animations and animated KPI counters

## Tech Stack
- HTML5 / CSS3
- Vanilla JavaScript (no frameworks)
- [Chart.js](https://www.chartjs.org/) via CDN

## Live Demo
🔗 [View the report](#) <!-- replace with your GitHub Pages link -->

## Running Locally
Clone the repo and open `index.html` in any browser — no build step needed:
\`\`\`bash
git clone https://github.com/yourname/your-repo.git
cd your-repo
open index.html
\`\`\`

## File Structure
\`\`\`
.
├── index.html      # Main presentation
├── style.css       # Styling
├── script.js       # Interactivity, charts, navigation
\`\`\`

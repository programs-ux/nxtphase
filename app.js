/* ============================================================
   NXT Phase Learning — app logic
   Single-page app. State persists to localStorage ('nxtphase_v1').
   ZIP codes are used in-memory only and never persisted.
   ============================================================ */

const STORAGE_KEY = 'nxtphase_v1';

let state = loadState();

function defaultState() {
  return {
    user: null,               // { name, focus: [pillarIds] }
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark',
    view: 'dashboard',
    currentCourse: null,
    currentLesson: 0,
    progress: {}              // courseId -> { done: [lessonIdx], quiz: {score,total,passed} }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage full/blocked */ }
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ---------------- icon system (inline SVG, stroke style) ---------------- */

const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  book: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  heart: '<path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4z"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 13.5"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'arrow-right': '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="1.5" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22.5"/><line x1="3.5" y1="3.5" x2="5.3" y2="5.3"/><line x1="18.7" y1="18.7" x2="20.5" y2="20.5"/><line x1="1.5" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22.5" y2="12"/><line x1="3.5" y1="20.5" x2="5.3" y2="18.7"/><line x1="18.7" y1="5.3" x2="20.5" y2="3.5"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2.1z"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 21l2-5.1a8.4 8.4 0 1 1 16-4.4z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/>',
  alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16.01"/>',
  library: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
};

function icon(name, size, cls) {
  size = size || 18;
  return `<svg class="icn${cls ? ' ' + cls : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;
}

/* Geometric owl mark — the NXT Phase logo */
function owlMark(size) {
  size = size || 34;
  return `<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <path d="M10 13 7.5 5.5 15 9" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M38 13 40.5 5.5 33 9" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M24 5C14.5 5 9 12 9 21.5 9 33 15.5 41 24 43c8.5-2 15-10 15-21.5C39 12 33.5 5 24 5z" stroke="currentColor" stroke-width="2.4"/>
    <circle cx="17.2" cy="20.5" r="4.6" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="30.8" cy="20.5" r="4.6" stroke="currentColor" stroke-width="2.2"/>
    <circle cx="17.2" cy="20.5" r="1.7" fill="currentColor"/>
    <circle cx="30.8" cy="20.5" r="1.7" fill="currentColor"/>
    <path d="M24 27 21 30.5h6L24 27z" fill="currentColor"/>
  </svg>`;
}

/* ---------------- progress helpers ---------------- */

function courseProgress(courseId) {
  return state.progress[courseId] || { done: [], quiz: null };
}

function lessonDone(courseId, idx) {
  return courseProgress(courseId).done.includes(idx);
}

function markLessonDone(courseId, idx) {
  if (!state.progress[courseId]) state.progress[courseId] = { done: [], quiz: null };
  if (!state.progress[courseId].done.includes(idx)) state.progress[courseId].done.push(idx);
  saveState();
}

function coursePct(course) {
  const p = courseProgress(course.id);
  return Math.round((p.done.length / course.lessons.length) * 100);
}

function courseComplete(course) {
  return courseProgress(course.id).done.length >= course.lessons.length;
}

function totals() {
  let lessons = 0, minutes = 0, courses = 0, started = 0;
  COURSES.forEach(c => {
    const p = courseProgress(c.id);
    if (p.done.length > 0) started++;
    p.done.forEach(i => { lessons++; minutes += (c.lessons[i] && c.lessons[i].minutes) || 0; });
    if (courseComplete(c)) courses++;
  });
  return { lessons, minutes, courses, started };
}

/* ---------------- navigation ---------------- */

function navigate(view, extra, opts) {
  state.view = view;
  if (extra && extra.courseId !== undefined) state.currentCourse = extra.courseId;
  if (extra && extra.lesson !== undefined) state.currentLesson = extra.lesson;
  saveState();
  if (!opts || !opts.fromHistory) {
    try {
      history.pushState(
        { view: state.view, courseId: state.currentCourse, lesson: state.currentLesson },
        '', '#' + view
      );
    } catch (e) { /* sandboxed contexts */ }
  }
  renderApp();
  window.scrollTo(0, 0);
  const main = document.getElementById('main-content');
  if (main) main.focus({ preventScroll: true });
}

window.addEventListener('popstate', (e) => {
  if (!state.user) return;
  _quiz = null; // an in-progress quiz doesn't survive history jumps
  const s = e.state || { view: 'dashboard' };
  const view = s.view && ['dashboard', 'courses', 'detail', 'lesson', 'wellness', 'settings'].includes(s.view)
    ? s.view : 'dashboard';
  navigate(view, { courseId: s.courseId, lesson: s.lesson }, { fromHistory: true });
});

/* ---------------- shell ---------------- */

function applyTheme() {
  document.body.dataset.theme = state.theme;
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
  renderApp();
}

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', ico: 'home' },
  { id: 'courses',   label: 'Courses', ico: 'book' },
  { id: 'wellness',  label: 'Wellness', ico: 'heart' },
  { id: 'settings',  label: 'Settings', ico: 'sliders' }
];

function navCurrent() {
  if (['detail', 'lesson'].includes(state.view)) return 'courses';
  return state.view;
}

function renderHeader() {
  const el = document.getElementById('app-header');
  if (!state.user) { el.innerHTML = ''; return; }
  el.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <button class="brand" onclick="navigate('dashboard')" aria-label="NXT Phase Learning home">
        <span class="owl">${owlMark(30)}</span>
        <span><span class="brand-nxt">NXT</span> Phase Learning</span>
      </button>
      <div class="header-spacer"></div>
      <nav class="desktop-nav" aria-label="Main">
        ${NAV_ITEMS.map(n => `
          <button onclick="navigate('${n.id}')" ${navCurrent() === n.id ? 'aria-current="page"' : ''}>${n.label}</button>
        `).join('')}
      </nav>
      <button class="theme-toggle" onclick="toggleTheme()"
        aria-label="Switch to ${state.theme === 'dark' ? 'light' : 'dark'} mode"
        title="Switch to ${state.theme === 'dark' ? 'light' : 'dark'} mode">
        ${state.theme === 'dark' ? icon('sun', 18) : icon('moon', 18)}
      </button>
    </div>
  </header>`;
}

function renderNav() {
  const el = document.getElementById('app-nav');
  if (!state.user) { el.innerHTML = ''; return; }
  el.innerHTML = `
  <nav class="bottom-nav" aria-label="Main">
    ${NAV_ITEMS.map(n => `
      <button onclick="navigate('${n.id}')" ${navCurrent() === n.id ? 'aria-current="page"' : ''}>
        <span class="ico">${icon(n.ico, 20)}</span>${n.label}
      </button>
    `).join('')}
  </nav>`;
}

function renderApp() {
  applyTheme();
  renderHeader();
  renderNav();
  const main = document.getElementById('main-content');
  if (!state.user) { main.innerHTML = renderOnboarding(); return; }
  switch (state.view) {
    case 'courses':  main.innerHTML = renderCourses(); break;
    case 'detail':   main.innerHTML = renderCourseDetail(); break;
    case 'lesson':   main.innerHTML = renderLesson(); break;
    case 'wellness': main.innerHTML = renderWellness(); break;
    case 'settings': main.innerHTML = renderSettings(); break;
    default:         main.innerHTML = renderDashboard();
  }
}

/* ============================================================
   ONBOARDING
   ============================================================ */

function renderOnboarding() {
  return `
  <div class="onboard-wrap">
    <div class="card onboard-card">
      <span class="onboard-owl">${owlMark(64)}</span>
      <h1><span style="color:var(--gold)">NXT</span> Phase Learning</h1>
      <p class="sub">Professional, self-paced courses in the skills employers rank highest — free, private, and on any device.</p>

      <div class="field">
        <label for="ob-name">What should we call you?</label>
        <input type="text" id="ob-name" maxlength="30" autocomplete="off" placeholder="First name or nickname">
        <p class="hint">Optional — it just makes your dashboard friendlier.</p>
      </div>

      <div class="field">
        <label id="focus-label">Select your focus areas <span style="font-weight:400">(choose any)</span></label>
        <div class="choice-grid" role="group" aria-labelledby="focus-label">
          ${PILLARS.map(p => `
            <label class="choice" data-pillar="${p.id}">
              <input type="checkbox" value="${p.id}" onchange="this.closest('.choice').classList.toggle('selected', this.checked)">
              <span><span class="cl">${icon(p.icon, 15)} ${p.label}</span><br><span class="cd">${p.desc}</span></span>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="field">
        <button class="btn btn-gold btn-block" onclick="completeOnboarding()">Start learning</button>
      </div>

      <p class="privacy-note"><strong>Your privacy:</strong> everything you enter stays on this device — nothing is sent to a server, and there is no account to create. You can export or erase your data at any time in Settings.</p>
    </div>
  </div>`;
}

function completeOnboarding() {
  const name = (document.getElementById('ob-name').value || '').trim().slice(0, 30);
  const focus = Array.from(document.querySelectorAll('.choice input:checked')).map(i => i.value);
  state.user = { name, focus: focus.length ? focus : PILLARS.map(p => p.id) };
  saveState();
  navigate('dashboard');
}

/* ============================================================
   DASHBOARD
   ============================================================ */

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function continueTarget() {
  // Most recently touched incomplete course, else first incomplete started course
  const started = COURSES.filter(c => courseProgress(c.id).done.length > 0 && !courseComplete(c));
  return started[0] || null;
}

function recommendedCourses(max) {
  const focus = (state.user && state.user.focus) || [];
  const notDone = COURSES.filter(c => !courseComplete(c));
  const inFocus = notDone.filter(c => focus.includes(c.pillar));
  const rest = notDone.filter(c => !focus.includes(c.pillar));
  return inFocus.concat(rest).slice(0, max);
}

function renderDashboard() {
  const t = totals();
  const q = getDailyQuote();
  const cont = continueTarget();
  const name = state.user.name ? escapeHtml(state.user.name) : 'learner';
  const recs = recommendedCourses(3);

  return `
  <div class="container">
    <section class="hero">
      <p class="eyebrow">${greeting()}</p>
      <h1>${state.user.name ? `${name}, build skills the market pays for` : 'Build skills the market pays for'}</h1>
      <p>Courses built around the competencies employers rank highest worldwide — so your value holds in any economic environment, as an employee or as a business of your own.</p>
      <div class="hero-cta-row">
        ${cont
          ? `<button class="btn btn-gold" onclick="navigate('detail',{courseId:'${cont.id}'})">Continue: ${escapeHtml(cont.title)}</button>`
          : `<button class="btn btn-gold" onclick="navigate('courses')">Start a course</button>`}
        <button class="btn btn-outline" onclick="navigate('wellness')">Wellness Hub</button>
      </div>
      <div class="hero-stats" role="group" aria-label="Your progress">
        <div class="stat-chip"><div class="num">${t.lessons}</div><div class="lbl">Lessons completed</div></div>
        <div class="stat-chip"><div class="num">${t.courses}</div><div class="lbl">Courses completed</div></div>
        <div class="stat-chip"><div class="num">${t.minutes}</div><div class="lbl">Minutes of learning</div></div>
      </div>
    </section>

    <section class="section" aria-label="Daily insight">
      <blockquote class="card quote-card">
        “${q.text}”
        <span class="qa">— ${q.author}</span>
      </blockquote>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>Recommended for you</h2>
        <button class="see-all" onclick="navigate('courses')">View all courses ${icon('chevron-right', 14)}</button>
      </div>
      <div class="card-grid">
        ${recs.map(courseCard).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Skill areas</h2></div>
      <div class="card-grid">
        ${PILLARS.map(p => {
          const cs = getCoursesByPillar(p.id);
          const done = cs.filter(courseComplete).length;
          return `
          <div class="card pillar-card">
            <span class="pi" style="color:${p.color}">${icon(p.icon, 26)}</span>
            <span class="pn">${p.label}</span>
            <span class="pd">${p.desc}</span>
            <div style="margin-top:10px">
              <div class="progress-row"><span>${done} of ${cs.length} courses completed</span></div>
              <div class="progress-track"><div class="progress-fill" style="width:${cs.length ? Math.round(done / cs.length * 100) : 0}%"></div></div>
            </div>
            <button class="btn btn-ghost btn-sm" style="align-self:flex-start" onclick="navigate('courses',{})">View ${p.short} courses ${icon('chevron-right', 13)}</button>
          </div>`;
        }).join('')}
      </div>
    </section>

    <section class="section">
      <div class="card resource-card">
        <span class="ri">${icon('heart', 24)}</span>
        <div style="flex:1">
          <div class="rn">Wellness Hub — support near you</div>
          <div class="rd">Sustainable careers are built on wellbeing. Find mental health resources and free library services in your area by ZIP code. Confidential — your ZIP is never saved.</div>
          <button class="btn btn-outline btn-sm" onclick="navigate('wellness')">Open the Wellness Hub</button>
        </div>
      </div>
    </section>
  </div>`;
}

/* ============================================================
   COURSE CATALOG
   ============================================================ */

function courseCard(c) {
  const p = getPillarById(c.pillar);
  const pct = coursePct(c);
  const complete = courseComplete(c);
  return `
  <button class="card course-card" onclick="navigate('detail',{courseId:'${c.id}'})" aria-label="${escapeHtml(c.title)}, ${p.label}, ${pct}% complete">
    <div>
      <span class="pill pill-pillar pill-${c.pillar}">${p.short}</span>
      ${complete ? `<span class="pill pill-done">${icon('check', 12)} Completed</span>` : ''}
    </div>
    <span class="course-title">${c.title}</span>
    <span class="course-desc">${c.desc}</span>
    <div class="course-meta">
      <span class="pill">${icon('clock', 12)} ${c.minutes} min</span>
      <span class="pill">${c.level}</span>
    </div>
    ${pct > 0 && !complete ? `
      <div style="width:100%">
        <div class="progress-row"><span>Progress</span><span>${pct}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>` : ''}
  </button>`;
}

function renderCourses() {
  return `
  <div class="container">
    <h1>Course Library</h1>
    <p style="color:var(--text-dim)">Every course is free, self-paced, and takes under an hour. Curriculum is aligned to the skills employers rank highest in global workforce research.</p>
    ${PILLARS.map(p => `
      <section class="section" aria-label="${p.label}">
        <div class="section-head"><h2><span class="h-ico" style="color:${p.color}">${icon(p.icon, 20)}</span> ${p.label}</h2></div>
        <div class="card-grid">
          ${getCoursesByPillar(p.id).map(courseCard).join('')}
        </div>
      </section>
    `).join('')}
  </div>`;
}

/* ============================================================
   COURSE DETAIL
   ============================================================ */

function firstIncompleteLesson(course) {
  for (let i = 0; i < course.lessons.length; i++) {
    if (!lessonDone(course.id, i)) return i;
  }
  return 0;
}

function renderCourseDetail() {
  const c = getCourseById(state.currentCourse);
  if (!c) return `<div class="container"><div class="empty-state">Course not found.</div></div>`;
  const p = getPillarById(c.pillar);
  const pct = coursePct(c);
  const complete = courseComplete(c);
  const startIdx = firstIncompleteLesson(c);

  return `
  <div class="container">
    <button class="btn btn-ghost back-link" onclick="navigate('courses')">${icon('chevron-left', 14)} All courses</button>
    <div class="card detail-hero">
      <div>
        <span class="pill pill-pillar pill-${c.pillar}">${p.label}</span>
        ${complete ? `<span class="pill pill-done">${icon('check', 12)} Completed</span>` : ''}
      </div>
      <h1>${c.title}</h1>
      <p style="color:var(--text-dim)">${c.desc}</p>
      <div class="course-meta">
        <span class="pill">${icon('clock', 12)} ${c.minutes} min total</span>
        <span class="pill">${c.level}</span>
        <span class="pill">${c.lessons.length - 1} lessons + assessment</span>
      </div>
      ${pct > 0 ? `
        <div>
          <div class="progress-row"><span>Your progress</span><span>${pct}%</span></div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>` : ''}
      <div>
        <button class="btn btn-gold" onclick="navigate('lesson',{courseId:'${c.id}',lesson:${startIdx}})">
          ${pct === 0 ? 'Start course' : complete ? 'Review course' : 'Continue course'}
        </button>
      </div>
    </div>

    <section class="section">
      <h2>What you'll learn</h2>
      <ul class="obj-list" style="margin-top:12px">
        ${c.objectives.map(o => `<li><span class="tick">${icon('check', 15)}</span><span>${o}</span></li>`).join('')}
      </ul>
      <div class="course-meta" style="margin-top:14px">
        ${c.skills.map(s => `<span class="pill">${s}</span>`).join('')}
      </div>
    </section>

    <section class="section">
      <h2>Lessons</h2>
      <div class="lesson-list">
        ${c.lessons.map((l, i) => {
          const done = lessonDone(c.id, i);
          const isQuiz = l.type === 'quiz';
          return `
          <button class="lesson-row ${done ? 'done' : ''}" onclick="navigate('lesson',{courseId:'${c.id}',lesson:${i}})">
            <span class="status" aria-hidden="true">${done ? icon('check', 14) : isQuiz ? icon('award', 14) : i + 1}</span>
            <span class="lt">${l.title}</span>
            <span class="lm">${l.minutes} min${done ? ' · completed' : ''}</span>
          </button>`;
        }).join('')}
      </div>
    </section>
  </div>`;
}

/* ============================================================
   LESSON VIEW (content + quiz)
   ============================================================ */

function renderLesson() {
  const c = getCourseById(state.currentCourse);
  if (!c) return `<div class="container"><div class="empty-state">Course not found.</div></div>`;
  const idx = Math.min(state.currentLesson, c.lessons.length - 1);
  const l = c.lessons[idx];

  if (l.type === 'quiz') return renderQuiz(c, idx);

  const isLastContent = idx === c.lessons.length - 2;
  return `
  <div class="container lesson-shell">
    <div class="lesson-topbar">
      <button class="btn btn-ghost" onclick="navigate('detail',{courseId:'${c.id}'})">${icon('chevron-left', 14)} ${escapeHtml(c.title)}</button>
      <span class="pill">Lesson ${idx + 1} of ${c.lessons.length - 1} · ${l.minutes} min</span>
    </div>
    <article class="card">
      <h2>${l.title}</h2>
      <div class="lesson-body">${l.content}</div>
    </article>
    <div class="lesson-nav-row">
      ${idx > 0
        ? `<button class="btn btn-outline" onclick="navigate('lesson',{courseId:'${c.id}',lesson:${idx - 1}})">${icon('chevron-left', 14)} Previous</button>`
        : `<span></span>`}
      <button class="btn btn-gold" onclick="finishLesson('${c.id}',${idx})">
        ${lessonDone(c.id, idx) ? (isLastContent ? 'Go to assessment' : 'Next lesson') : (isLastContent ? 'Complete & take assessment' : 'Complete & continue')} ${icon('chevron-right', 14)}
      </button>
    </div>
  </div>`;
}

function finishLesson(courseId, idx) {
  markLessonDone(courseId, idx);
  navigate('lesson', { courseId, lesson: idx + 1 });
  showToast('Lesson completed');
}

/* ---------------- quiz ---------------- */

let _quiz = null; // { courseId, i, answers: [] } — session only

function renderQuiz(c, lessonIdx) {
  const questions = getQuiz(c.id);
  if (!questions.length) return `<div class="container"><div class="empty-state">No quiz for this course yet.</div></div>`;

  if (!_quiz || _quiz.courseId !== c.id) _quiz = { courseId: c.id, i: 0, answers: [] };

  if (_quiz.i >= questions.length) return renderQuizResult(c, lessonIdx, questions);

  const q = questions[_quiz.i];
  return `
  <div class="container lesson-shell">
    <div class="lesson-topbar">
      <button class="btn btn-ghost" onclick="_quiz=null;navigate('detail',{courseId:'${c.id}'})">${icon('chevron-left', 14)} Exit assessment</button>
      <span class="pill">Final assessment</span>
    </div>
    <div class="card">
      <p class="quiz-progress">Question ${_quiz.i + 1} of ${questions.length}</p>
      <p class="quiz-q">${q.q}</p>
      <div class="quiz-options" role="group" aria-label="Answer choices">
        ${q.options.map((o, oi) => `
          <label class="choice">
            <input type="radio" name="quiz-opt" value="${oi}" onchange="document.getElementById('quiz-next').disabled=false; document.querySelectorAll('.quiz-options .choice').forEach(ch=>ch.classList.remove('selected')); this.closest('.choice').classList.add('selected')">
            <span>${o}</span>
          </label>
        `).join('')}
      </div>
      <div class="lesson-nav-row">
        <span></span>
        <button id="quiz-next" class="btn btn-gold" disabled onclick="submitQuizAnswer()">
          ${_quiz.i + 1 === questions.length ? 'View results' : 'Next'} ${icon('chevron-right', 14)}
        </button>
      </div>
    </div>
  </div>`;
}

function submitQuizAnswer() {
  const sel = document.querySelector('input[name="quiz-opt"]:checked');
  if (!sel) return;
  _quiz.answers.push(Number(sel.value));
  _quiz.i++;
  renderApp();
  window.scrollTo(0, 0);
}

function renderQuizResult(c, lessonIdx, questions) {
  const score = questions.reduce((n, q, i) => n + (q.answer === _quiz.answers[i] ? 1 : 0), 0);
  const pct = Math.round(score / questions.length * 100);
  const passed = pct >= 70;

  if (passed && !lessonDone(c.id, lessonIdx)) {
    markLessonDone(c.id, lessonIdx);
    if (courseComplete(c)) setTimeout(() => showCourseCompleteModal(c), 450);
  }

  return `
  <div class="container lesson-shell">
    <div class="card" style="text-align:center">
      <div class="result-ring" style="border-color:${passed ? 'var(--ok)' : 'var(--gold)'}">${pct}%</div>
      <h2>${passed ? 'Assessment passed' : 'Below the passing threshold'}</h2>
      <p style="color:var(--text-dim)">You answered ${score} of ${questions.length} correctly.
        ${passed ? 'This course is now marked complete.' : 'A score of 70% is required. Review the explanations below — the retake is one click away.'}</p>
      <div class="modal-actions" style="margin-top:18px">
        ${passed
          ? `<button class="btn btn-gold" onclick="_quiz=null;navigate('courses')">Explore more courses</button>
             <button class="btn btn-outline" onclick="_quiz=null;navigate('detail',{courseId:'${c.id}'})">Back to course</button>`
          : `<button class="btn btn-gold" onclick="_quiz={courseId:'${c.id}',i:0,answers:[]};renderApp();window.scrollTo(0,0)">Retake assessment</button>
             <button class="btn btn-outline" onclick="_quiz=null;navigate('detail',{courseId:'${c.id}'})">Review lessons</button>`}
      </div>
    </div>
    <div class="card section">
      <h3>Answer review</h3>
      ${questions.map((q, i) => {
        const ok = q.answer === _quiz.answers[i];
        return `
        <div class="result-detail">
          <p class="rq">${i + 1}. ${q.q}</p>
          <p class="${ok ? 'rd-ok' : 'rd-no'}">${ok ? 'Correct' : 'Your answer: ' + escapeHtml(q.options[_quiz.answers[i]] ?? '—')}</p>
          ${!ok ? `<p><strong>Correct answer:</strong> ${q.options[q.answer]}</p>` : ''}
          <p class="re">${q.explain}</p>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function showCourseCompleteModal(course) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Course complete');
  overlay.innerHTML = `
    <div class="modal">
      <div class="big" style="color:var(--gold)">${icon('award', 52)}</div>
      <h2>Course completed</h2>
      <p>You have completed <strong>${escapeHtml(course.title)}</strong> and passed its assessment. This skill is now part of your portfolio.</p>
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="this.closest('.modal-overlay').remove()">Continue</button>
      </div>
    </div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  overlay.querySelector('button').focus();
}

/* ============================================================
   WELLNESS HUB
   ============================================================ */

let _wellness = { zip: null, place: null, status: 'idle' }; // session-only, never persisted

function renderWellness() {
  return `
  <div class="container">
    <h1>Wellness Hub</h1>
    <p style="color:var(--text-dim); max-width:64ch">Sustainable performance is built on wellbeing. Find confidential mental health resources and free library services near you.</p>

    <section class="section crisis-banner" aria-label="Crisis support, available now">
      <h3>Need support right now?</h3>
      <p style="font-size:0.92rem">If you're struggling, you don't have to figure it out alone — free, confidential help is available 24/7:</p>
      <div class="crisis-lines">
        ${CRISIS_RESOURCES.map(r => `
          <div class="crisis-line">
            <span class="cn"><a href="${r.href}">${r.action}</a> — ${r.name}</span>
            <span class="cd">${r.detail}</span>
          </div>`).join('')}
      </div>
    </section>

    <section class="section card" aria-label="Find resources near you">
      <h2>Find resources near you</h2>
      <p style="color:var(--text-dim); font-size:0.92rem; margin-top:6px">Enter your ZIP code to get links to mental health services and libraries in your area.
      <strong>Private by design:</strong> your ZIP is used only to build these links and is never saved or sent anywhere except the site you choose to open.</p>
      <form class="zip-form" onsubmit="event.preventDefault(); lookupZip();">
        <label class="visually-hidden" for="zip-input">ZIP code</label>
        <input type="text" id="zip-input" inputmode="numeric" autocomplete="postal-code" maxlength="5" placeholder="e.g. 33101" value="${_wellness.zip || ''}">
        <button class="btn btn-gold" type="submit">Find resources</button>
      </form>
      <div id="zip-feedback" aria-live="polite">${_wellness.status === 'error' ? '<p class="zip-error">Please enter a valid 5-digit U.S. ZIP code.</p>' : ''}</div>
    </section>

    <div id="wellness-results">${_wellness.zip && _wellness.status === 'done' ? wellnessResultsHtml() : ''}</div>

    <p class="disclaimer">These links go to independent organizations; NXT Phase Learning doesn't operate them and this page isn't medical advice. If you're in immediate danger, call 911.</p>
  </div>`;
}

function lookupZip() {
  const input = document.getElementById('zip-input');
  const zip = (input.value || '').trim();
  if (!/^\d{5}$/.test(zip)) {
    _wellness = { zip: null, place: null, status: 'error' };
    document.getElementById('zip-feedback').innerHTML = '<p class="zip-error">Please enter a valid 5-digit U.S. ZIP code.</p>';
    input.focus();
    return;
  }
  _wellness = { zip, place: null, status: 'loading' };
  document.getElementById('zip-feedback').innerHTML = '<p style="color:var(--text-dim);font-weight:700;margin-top:8px">Looking up your area…</p>';

  // Free, keyless ZIP lookup — used only to show a friendly place name.
  fetch(`https://api.zippopotam.us/us/${zip}`)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (data && data.places && data.places[0]) {
        _wellness.place = `${data.places[0]['place name']}, ${data.places[0]['state abbreviation']}`;
      }
      _wellness.status = 'done';
      finishZipLookup();
    })
    .catch(() => {
      // Offline or API down — links still work with the raw ZIP.
      _wellness.status = 'done';
      finishZipLookup();
    });
}

function finishZipLookup() {
  document.getElementById('zip-feedback').innerHTML = _wellness.place
    ? `<p style="font-weight:800;margin-top:8px">${icon('map-pin', 14)} Showing resources for ${escapeHtml(_wellness.place)} (${_wellness.zip})</p>`
    : `<p style="font-weight:800;margin-top:8px">${icon('map-pin', 14)} Showing resources for ZIP ${_wellness.zip}</p>`;
  document.getElementById('wellness-results').innerHTML = wellnessResultsHtml();
}

function resourceCardHtml(r, zip, place) {
  const near = place ? place : `ZIP ${zip}`;
  return `
  <div class="card resource-card">
    <span class="ri">${icon(r.icon, 22)}</span>
    <div style="flex:1">
      <div class="rn">${r.name}</div>
      <div class="rd">${r.detail}</div>
      <a class="btn btn-outline btn-sm" href="${r.url(zip)}" target="_blank" rel="noopener noreferrer">${r.linkText}${r.url.length ? ' ' + escapeHtml(near) : ''} ${icon('external', 13)}</a>
    </div>
  </div>`;
}

function wellnessResultsHtml() {
  const { zip, place } = _wellness;
  return `
  <section class="section" aria-label="Mental health resources near you">
    <div class="section-head"><h2>Mental health support near you</h2></div>
    <div class="card-grid" style="grid-template-columns:1fr; max-width:820px">
      ${LOCAL_RESOURCES.map(r => resourceCardHtml(r, zip, place)).join('')}
    </div>
  </section>
  <section class="section" aria-label="Libraries near you">
    <div class="section-head"><h2>Libraries near you</h2></div>
    <div class="card-grid" style="grid-template-columns:1fr; max-width:820px">
      ${LIBRARY_RESOURCES.map(r => resourceCardHtml(r, zip, place)).join('')}
    </div>
  </section>`;
}

/* ============================================================
   SETTINGS / MORE
   ============================================================ */

function renderSettings() {
  const t = totals();
  return `
  <div class="container" style="max-width:760px">
    <h1>Settings</h1>

    <section class="section card settings-list">
      <h2>Profile</h2>
      <div class="field" style="margin-top:6px">
        <label for="set-name">Display name</label>
        <input type="text" id="set-name" maxlength="30" value="${escapeHtml(state.user.name || '')}" placeholder="First name or nickname">
      </div>
      <div class="field">
        <label id="set-focus-label">Focus areas</label>
        <div class="choice-grid" role="group" aria-labelledby="set-focus-label">
          ${PILLARS.map(p => `
            <label class="choice ${state.user.focus.includes(p.id) ? 'selected' : ''}">
              <input type="checkbox" value="${p.id}" ${state.user.focus.includes(p.id) ? 'checked' : ''}
                onchange="this.closest('.choice').classList.toggle('selected', this.checked)">
              <span class="cl">${icon(p.icon, 15)} ${p.label}</span>
            </label>`).join('')}
        </div>
      </div>
      <button class="btn btn-gold btn-sm" style="justify-self:start" onclick="saveProfile()">Save profile</button>
    </section>

    <section class="section card settings-list">
      <h2>Appearance</h2>
      <div class="setting-row">
        <div><div class="sl">Theme</div><div class="sd">Currently in ${state.theme === 'dark' ? 'dark' : 'light'} mode.</div></div>
        <button class="btn btn-outline btn-sm" onclick="toggleTheme()">${state.theme === 'dark' ? icon('sun', 14) + ' Switch to light' : icon('moon', 14) + ' Switch to dark'}</button>
      </div>
    </section>

    <section class="section card settings-list">
      <h2>Share feedback</h2>
      <p class="sd" style="color:var(--text-dim);font-size:0.9rem">NXT Phase is in its pilot phase — your honest feedback shapes what it becomes.</p>
      <div class="field" style="margin-top:2px">
        <label for="fb-text" class="visually-hidden">Your feedback</label>
        <textarea id="fb-text" rows="4" placeholder="What's working? What's confusing? What's missing?"></textarea>
      </div>
      <button class="btn btn-gold btn-sm" style="justify-self:start" onclick="sendFeedback()">${icon('mail', 14)} Send feedback</button>
    </section>

    <section class="section card settings-list">
      <h2>Your data & privacy</h2>
      <p class="sd" style="color:var(--text-dim);font-size:0.9rem">Everything lives on this device: your name, focus areas, and progress (${t.lessons} lessons across ${t.started} courses). No account, no server, no tracking. ZIP codes entered in the Wellness Hub are never stored.</p>
      <div class="setting-row">
        <div><div class="sl">Export my data</div><div class="sd">Download everything as a JSON file.</div></div>
        <button class="btn btn-outline btn-sm" onclick="exportData()">${icon('download', 14)} Export</button>
      </div>
      <div class="setting-row">
        <div><div class="sl">Erase everything</div><div class="sd">Deletes your profile and all progress from this device. Cannot be undone.</div></div>
        <button class="btn btn-danger btn-sm" onclick="confirmErase()">${icon('trash', 14)} Erase my data</button>
      </div>
    </section>
  </div>`;
}

function saveProfile() {
  const name = (document.getElementById('set-name').value || '').trim().slice(0, 30);
  const focus = Array.from(document.querySelectorAll('.choice input:checked')).map(i => i.value);
  state.user.name = name;
  state.user.focus = focus.length ? focus : PILLARS.map(p => p.id);
  saveState();
  showToast('Profile saved');
}

function sendFeedback() {
  const text = (document.getElementById('fb-text').value || '').trim();
  if (!text) { showToast('Please enter feedback before sending'); return; }
  const subject = encodeURIComponent('NXT Phase Learning — pilot feedback');
  const body = encodeURIComponent(text + '\n\n—\nSent from the NXT Phase Learning pilot');
  window.location.href = `mailto:nxtphaselearning@gmail.com?subject=${subject}&body=${body}`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'nxtphase-my-data.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Data exported');
}

function confirmErase() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="modal">
      <div class="big" style="color:var(--danger)">${icon('trash', 44)}</div>
      <h2>Erase everything?</h2>
      <p>Your profile and all course progress will be permanently deleted from this device.</p>
      <div class="modal-actions">
        <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        <button class="btn btn-danger" onclick="eraseAll()">Yes, erase it all</button>
      </div>
    </div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  overlay.querySelector('.btn-outline').focus();
}

function eraseAll() {
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
  renderApp();
  window.scrollTo(0, 0);
}

/* ============================================================
   Toast + init
   ============================================================ */

let _toastTimer = null;
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.setAttribute('role', 'status');
  t.textContent = msg;
  document.body.appendChild(t);
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.remove(), 2600);
}

document.addEventListener('DOMContentLoaded', () => {
  // Never resume mid-lesson into a broken state
  if (!getCourseById(state.currentCourse)) {
    state.currentCourse = null;
    if (['detail', 'lesson'].includes(state.view)) state.view = 'dashboard';
  }
  // Honor a top-level view hash (e.g. shared link to #wellness)
  const hashView = location.hash.replace('#', '');
  if (state.user && ['dashboard', 'courses', 'wellness', 'settings'].includes(hashView)) {
    state.view = hashView;
  }
  try {
    history.replaceState(
      { view: state.view, courseId: state.currentCourse, lesson: state.currentLesson },
      '', location.pathname + location.search + (state.user ? '#' + state.view : '')
    );
  } catch (e) { /* sandboxed contexts */ }
  renderApp();

  // Offline-capable install (PWA)
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* dev contexts without SW support */ });
  }
});

# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> Public Pages >> projects: renders project cards, tab navigation works
- Location: e2e/app.spec.ts:44:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=View Projects').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=View Projects').first()

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - banner [ref=e6]:
    - generic [ref=e7]:
      - link "K Maluleke Kurhula Software Engineer & AI Architect" [ref=e8] [cursor=pointer]:
        - /url: /
        - generic [ref=e9]: K
        - generic [ref=e10]:
          - generic [ref=e11]: Maluleke Kurhula
          - generic [ref=e12]: Software Engineer & AI Architect
      - navigation "Main navigation" [ref=e13]:
        - link "Home" [ref=e14] [cursor=pointer]:
          - /url: /
          - text: Home
        - link "About" [ref=e15] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Projects" [ref=e16] [cursor=pointer]:
          - /url: /projects
          - text: Projects
        - link "Stack" [ref=e17] [cursor=pointer]:
          - /url: /stack
          - text: Stack
        - link "Philosophy" [ref=e18] [cursor=pointer]:
          - /url: /philosophy
          - text: Philosophy
        - link "Contact" [ref=e19] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e20]:
        - button "Switch to dark mode" [ref=e21] [cursor=pointer]:
          - img [ref=e23]
        - link "Let's Talk" [ref=e25] [cursor=pointer]:
          - /url: /contact
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - heading "Projects & Systems" [level=1] [ref=e31]
        - paragraph [ref=e32]: Organized by GitHub organization. All flagship systems in sequential build phase.
      - generic [ref=e34]:
        - generic [ref=e35]:
          - button "KSDRILL-SA" [ref=e36] [cursor=pointer]
          - button "GrowthCore Solutions" [ref=e37] [cursor=pointer]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]: K
            - generic [ref=e41]:
              - heading "KSDRILL-SA" [level=2] [ref=e42]
              - link "github.com/KSDRILL-SA" [ref=e43] [cursor=pointer]:
                - /url: https://github.com/KSDRILL-SA
          - paragraph [ref=e44]: Technology organization. 4 flagship systems fully designed and entering sequential build phase.
          - generic [ref=e45]:
            - generic [ref=e46]:
              - img [ref=e48]
              - text: "Design: COMPLETE"
            - generic [ref=e51]:
              - img [ref=e53]
              - text: "Architecture: LOCKED"
            - generic [ref=e56]:
              - img [ref=e58]
              - text: "Build: STARTING Q2 2026"
          - generic [ref=e60]:
            - generic [ref=e61]:
              - generic [ref=e62]:
                - generic [ref=e63]:
                  - generic [ref=e64]: K
                  - generic [ref=e65]:
                    - heading "FundsLink Academy" [level=3] [ref=e66]
                    - paragraph [ref=e67]: National Education Funding Platform
                - link "Source" [ref=e68] [cursor=pointer]:
                  - /url: https://github.com/KSDRILL-SA/fundslink-academy
                  - img [ref=e70]
                  - text: Source
              - generic [ref=e73]:
                - text: Problem
                - paragraph [ref=e74]: 342,000+ students excluded yearly due to fragmented bursary applications and unused funding sources across NSFAS, SETA, and private bursaries.
              - generic [ref=e75]:
                - text: Solution
                - paragraph [ref=e76]: A unified application platform that aggregates all funding sources — bursaries, NSFAS, SETA funds, scholarships, and emergency support — into a single intelligent application flow with AI-powered eligibility matching.
              - generic [ref=e77]:
                - generic [ref=e78]: Angular
                - generic [ref=e79]: FastAPI
                - generic [ref=e80]: Python
                - generic [ref=e81]: PostgreSQL
                - generic [ref=e82]: LangChain
                - generic [ref=e83]: ChromaDB
              - generic [ref=e84]:
                - generic [ref=e85]: Architecture
                - generic [ref=e86]:
                  - generic [ref=e87]:
                    - generic [ref=e88]: Frontend
                    - text: Angular · Reactive Forms · Role Guards
                  - generic [ref=e89]:
                    - generic [ref=e90]: Backend
                    - text: FastAPI (Python) · JWT Auth
                  - generic [ref=e91]:
                    - generic [ref=e92]: Data + AI
                    - text: PostgreSQL (Prisma) · LangChain · ChromaDB
              - generic [ref=e93]:
                - generic [ref=e94]: "Design: COMPLETE"
                - generic [ref=e95]: "Build: Q2 2026"
                - generic [ref=e96]: "Target: Q3 2026"
            - generic [ref=e97]:
              - generic [ref=e98]:
                - generic [ref=e99]:
                  - generic [ref=e100]: K
                  - generic [ref=e101]:
                    - heading "Maphophe Community System" [level=3] [ref=e102]
                    - paragraph [ref=e103]: Digital Governance for Villages
                - link "Source" [ref=e104] [cursor=pointer]:
                  - /url: https://github.com/KSDRILL-SA/maphophe-community-system
                  - img [ref=e106]
                  - text: Source
              - generic [ref=e109]:
                - text: Problem
                - paragraph [ref=e110]: Rural villages have no digital infrastructure — community announcements are made verbally, service requests get lost, and governance decisions are undocumented.
              - generic [ref=e111]:
                - text: Solution
                - paragraph [ref=e112]: A village-level governance platform enabling structured announcements, trackable service requests, community voting, and ward-level reporting — bringing accountability to local governance.
              - generic [ref=e113]:
                - generic [ref=e114]: Next.js
                - generic [ref=e115]: NextAuth.js
                - generic [ref=e116]: PostgreSQL
                - generic [ref=e117]: Prisma
              - generic [ref=e118]:
                - generic [ref=e119]: Architecture
                - generic [ref=e120]:
                  - generic [ref=e121]:
                    - generic [ref=e122]: Frontend
                    - text: Next.js · SSR · PWA · Role Guards
                  - generic [ref=e123]:
                    - generic [ref=e124]: API
                    - text: Next.js API Routes · NextAuth.js
                  - generic [ref=e125]:
                    - generic [ref=e126]: Database
                    - text: PostgreSQL (Prisma)
              - generic [ref=e127]:
                - generic [ref=e128]: "Design: COMPLETE"
                - generic [ref=e129]: "Build: Q3 2026"
                - generic [ref=e130]: "Target: Q4 2026"
            - generic [ref=e131]:
              - generic [ref=e132]:
                - generic [ref=e133]:
                  - generic [ref=e134]: K
                  - generic [ref=e135]:
                    - heading "KSDRILL Reserve Bank" [level=3] [ref=e136]
                    - paragraph [ref=e137]: Discipline-Driven Savings Banking
                - link "Source" [ref=e138] [cursor=pointer]:
                  - /url: https://github.com/KSDRILL-SA/ksdrill-reserve-bank
                  - img [ref=e140]
                  - text: Source
              - generic [ref=e143]:
                - text: Problem
                - paragraph [ref=e144]: Most people save inconsistently because the tools are passive. No enforced discipline, no goal visibility, and no consequence for breaking savings habits.
              - generic [ref=e145]:
                - text: Solution
                - paragraph [ref=e146]: A structured digital savings platform with enforced deposit schedules, savings goals with real-time progress, interest tracking, and lock periods — built to build financial discipline.
              - generic [ref=e147]:
                - generic [ref=e148]: Angular
                - generic [ref=e149]: FastAPI
                - generic [ref=e150]: Python
                - generic [ref=e151]: PostgreSQL
                - generic [ref=e152]: Redis
              - generic [ref=e153]:
                - generic [ref=e154]: Architecture
                - generic [ref=e155]:
                  - generic [ref=e156]:
                    - generic [ref=e157]: Frontend
                    - text: Angular · Reactive Forms · Live Balance
                  - generic [ref=e158]:
                    - generic [ref=e159]: Backend
                    - text: FastAPI (Python) · Interest Engine
                  - generic [ref=e160]:
                    - generic [ref=e161]: Jobs + Data
                    - text: PostgreSQL · BullMQ + Redis
              - generic [ref=e162]:
                - generic [ref=e163]: "Design: COMPLETE"
                - generic [ref=e164]: "Build: Q4 2026"
                - generic [ref=e165]: "Target: Q1 2027"
            - generic [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - generic [ref=e169]: K
                  - generic [ref=e170]:
                    - heading "SyncUp" [level=3] [ref=e171]
                    - paragraph [ref=e172]: Creator Collaboration Platform
                - link "Source" [ref=e173] [cursor=pointer]:
                  - /url: https://github.com/KSDRILL-SA/syncup
                  - img [ref=e175]
                  - text: Source
              - generic [ref=e178]:
                - text: Problem
                - paragraph [ref=e179]: Creators waste time in unstructured DM negotiations. No standard process for pitching collaborations, protecting ideas, or formalising agreements.
              - generic [ref=e180]:
                - text: Solution
                - paragraph [ref=e181]: A structured collaboration platform with template-based pitch flows, a 10-message negotiation limit to force decisions, privacy controls, and drop-based subscription management.
              - generic [ref=e182]:
                - generic [ref=e183]: Next.js
                - generic [ref=e184]: NextAuth.js
                - generic [ref=e185]: PostgreSQL
                - generic [ref=e186]: Redis
              - generic [ref=e187]:
                - generic [ref=e188]: Architecture
                - generic [ref=e189]:
                  - generic [ref=e190]:
                    - generic [ref=e191]: Frontend
                    - text: Next.js · SSR · Real-time UI
                  - generic [ref=e192]:
                    - generic [ref=e193]: API
                    - text: Next.js API Routes · NextAuth.js
                  - generic [ref=e194]:
                    - generic [ref=e195]: Scheduling
                    - text: PostgreSQL · BullMQ + Redis
              - generic [ref=e196]:
                - generic [ref=e197]: "Design: COMPLETE"
                - generic [ref=e198]: "Build: Q1 2027"
                - generic [ref=e199]: "Target: Q2 2027"
            - generic [ref=e201]:
              - img [ref=e204]
              - generic [ref=e206]:
                - heading "System Design Template" [level=3] [ref=e207]
                - paragraph [ref=e208]: Every platform is built under a locked constitutional framework — 10 constitutions, 355 rules covering team process, code quality, and production deployment.
                - code [ref=e209]: git clone https://github.com/MALULEKE-KS/system-design-template.git .system-design
                - link "View on GitHub" [ref=e210] [cursor=pointer]:
                  - /url: https://github.com/MALULEKE-KS/system-design-template
                  - text: View on GitHub
                  - img [ref=e212]
      - generic [ref=e217]:
        - heading "Want to build something?" [level=2] [ref=e218]
        - paragraph [ref=e219]: Open to full-time, part-time, contract, and remote engineering opportunities.
        - link "Get in Touch" [ref=e220] [cursor=pointer]:
          - /url: /contact
          - text: Get in Touch
          - img [ref=e222]
  - contentinfo [ref=e224]:
    - generic [ref=e225]:
      - generic [ref=e226]:
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]: K
            - generic [ref=e230]:
              - generic [ref=e231]: Maluleke Kurhula Success
              - generic [ref=e232]: African Roots | Global Impact
          - paragraph [ref=e233]: Software Engineer and AI Systems Architect building practical digital systems that solve real-world challenges.
          - generic [ref=e234]:
            - link "GitHub" [ref=e235] [cursor=pointer]:
              - /url: https://github.com/MALULEKE-KS
            - generic [ref=e236]: ·
            - link "LinkedIn" [ref=e237] [cursor=pointer]:
              - /url: https://za.linkedin.com/in/kurhula-success-maluleke-32153231a
            - generic [ref=e238]: ·
            - link "Email" [ref=e239] [cursor=pointer]:
              - /url: mailto:kurhula04s@gmail.com
        - generic [ref=e240]:
          - heading "Navigation" [level=4] [ref=e241]
          - generic [ref=e242]:
            - link "Home" [ref=e243] [cursor=pointer]:
              - /url: /
            - link "About" [ref=e244] [cursor=pointer]:
              - /url: /about
            - link "Projects" [ref=e245] [cursor=pointer]:
              - /url: /projects
            - link "Stack" [ref=e246] [cursor=pointer]:
              - /url: /stack
            - link "Philosophy" [ref=e247] [cursor=pointer]:
              - /url: /philosophy
            - link "Contact" [ref=e248] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e249]:
          - heading "Connect" [level=4] [ref=e250]
          - generic [ref=e251]:
            - link "Email" [ref=e252] [cursor=pointer]:
              - /url: mailto:kurhula04s@gmail.com
            - link "WhatsApp" [ref=e253] [cursor=pointer]:
              - /url: https://wa.me/27640708649
            - link "LinkedIn" [ref=e254] [cursor=pointer]:
              - /url: https://za.linkedin.com/in/kurhula-success-maluleke-32153231a
            - link "GitHub" [ref=e255] [cursor=pointer]:
              - /url: https://github.com/MALULEKE-KS
      - generic [ref=e256]:
        - paragraph [ref=e257]: © 2026 Maluleke Kurhula Success. All rights reserved.
        - paragraph [ref=e258]: Built with Angular · Tailwind CSS · Custom CSS
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE = 'http://localhost:4200';
  4   | 
  5   | async function waitForAngular(page) {
  6   |   await page.waitForFunction(
  7   |     () => {
  8   |       const root = document.querySelector('app-root');
  9   |       return root && root.textContent.trim().length > 100;
  10  |     },
  11  |     { timeout: 20000 }
  12  |   );
  13  | }
  14  | 
  15  | test.describe('Public Pages', () => {
  16  | 
  17  |   test('home: page loads, hero visible, no console errors', async ({ page }) => {
  18  |     const errors: string[] = [];
  19  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  20  |     page.on('pageerror', (err) => errors.push(err.message));
  21  | 
  22  |     await page.goto(BASE, { waitUntil: 'networkidle' });
  23  |     await waitForAngular(page);
  24  | 
  25  |     await expect(page.locator('h1')).toContainText('Software Engineer', { timeout: 10000 });
  26  |     await expect(page.locator('text=View Projects')).toBeVisible();
  27  |     await expect(page.locator('text=Contact Me')).toBeVisible();
  28  |     expect(errors).toHaveLength(0);
  29  |   });
  30  | 
  31  |   test('about: page loads, bio visible, no console errors', async ({ page }) => {
  32  |     const errors: string[] = [];
  33  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  34  |     page.on('pageerror', (err) => errors.push(err.message));
  35  | 
  36  |     await page.goto(`${BASE}/about`, { waitUntil: 'networkidle' });
  37  |     await waitForAngular(page);
  38  | 
  39  |     await expect(page.locator('h1')).toContainText('Kurhula', { timeout: 10000 });
  40  |     await expect(page.locator('text=About Me').first()).toBeVisible();
  41  |     expect(errors).toHaveLength(0);
  42  |   });
  43  | 
  44  |   test('projects: renders project cards, tab navigation works', async ({ page }) => {
  45  |     const errors: string[] = [];
  46  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  47  |     page.on('pageerror', (err) => errors.push(err.message));
  48  | 
  49  |     await page.goto(`${BASE}/projects`, { waitUntil: 'networkidle' });
  50  |     await waitForAngular(page);
  51  | 
  52  |     await expect(page.locator('h1')).toContainText('Projects', { timeout: 10000 });
> 53  |     await expect(page.locator('text=View Projects').first()).toBeVisible();
      |                                                              ^ Error: expect(locator).toBeVisible() failed
  54  |     expect(errors).toHaveLength(0);
  55  |   });
  56  | 
  57  |   test('contact: form renders, validation works', async ({ page }) => {
  58  |     const errors: string[] = [];
  59  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  60  |     page.on('pageerror', (err) => errors.push(err.message));
  61  | 
  62  |     await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' });
  63  |     await waitForAngular(page);
  64  | 
  65  |     await expect(page.locator('h1')).toContainText('Work Together', { timeout: 10000 });
  66  |     const nameInput = page.locator('input[id="name"]');
  67  |     const emailInput = page.locator('input[id="email"]');
  68  |     const submitBtn = page.locator('button[type="submit"]');
  69  | 
  70  |     await expect(nameInput).toBeVisible();
  71  |     await expect(emailInput).toBeVisible();
  72  |     await expect(submitBtn).toBeVisible();
  73  |     await expect(page.locator('text=Name is required').first()).toBeVisible();
  74  |     expect(errors).toHaveLength(0);
  75  |   });
  76  | 
  77  |   test('login: renders login form with email and password fields', async ({ page }) => {
  78  |     const errors: string[] = [];
  79  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  80  |     page.on('pageerror', (err) => errors.push(err.message));
  81  | 
  82  |     await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  83  |     await waitForAngular(page);
  84  | 
  85  |     await expect(page.locator('h1')).toContainText('Welcome Back', { timeout: 10000 });
  86  |     await expect(page.locator('input[type="email"]')).toBeVisible();
  87  |     await expect(page.locator('input[type="password"]')).toBeVisible();
  88  |     await expect(page.locator('button[type="submit"]')).toBeVisible();
  89  |     expect(errors).toHaveLength(0);
  90  |   });
  91  | 
  92  |   test('stack: renders technical stack page', async ({ page }) => {
  93  |     const errors: string[] = [];
  94  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  95  |     page.on('pageerror', (err) => errors.push(err.message));
  96  | 
  97  |     await page.goto(`${BASE}/stack`, { waitUntil: 'networkidle' });
  98  |     await waitForAngular(page);
  99  | 
  100 |     await expect(page.locator('h1')).toContainText('Technical Stack', { timeout: 10000 });
  101 |     expect(errors).toHaveLength(0);
  102 |   });
  103 | 
  104 |   test('philosophy: renders design philosophy page', async ({ page }) => {
  105 |     const errors: string[] = [];
  106 |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  107 |     page.on('pageerror', (err) => errors.push(err.message));
  108 | 
  109 |     await page.goto(`${BASE}/philosophy`, { waitUntil: 'networkidle' });
  110 |     await waitForAngular(page);
  111 | 
  112 |     await expect(page.locator('h1')).toContainText('System Design Philosophy', { timeout: 10000 });
  113 |     expect(errors).toHaveLength(0);
  114 |   });
  115 | });
  116 | 
  117 | test.describe('Navigation', () => {
  118 |   test('header nav links navigate to correct pages', async ({ page }) => {
  119 |     const errors: string[] = [];
  120 |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  121 |     page.on('pageerror', (err) => errors.push(err.message));
  122 | 
  123 |     const navChecks = [
  124 |       { path: '/about', h1: 'Kurhula' },
  125 |       { path: '/projects', h1: 'Projects' },
  126 |       { path: '/stack', h1: 'Technical Stack' },
  127 |       { path: '/philosophy', h1: 'System Design Philosophy' },
  128 |       { path: '/contact', h1: 'Work Together' },
  129 |     ];
  130 | 
  131 |     for (const check of navChecks) {
  132 |       await page.goto(`${BASE}${check.path}`, { waitUntil: 'networkidle' });
  133 |       await waitForAngular(page);
  134 |       await expect(page.locator('h1')).toContainText(check.h1, { timeout: 10000 });
  135 |     }
  136 |     expect(errors).toHaveLength(0);
  137 |   });
  138 | 
  139 |   test('footer links visible', async ({ page }) => {
  140 |     await page.goto(BASE, { waitUntil: 'networkidle' });
  141 |     await waitForAngular(page);
  142 |     await expect(page.locator('footer')).toBeVisible();
  143 |     await expect(page.locator('footer').locator('a').first()).toBeVisible();
  144 |   });
  145 | });
```
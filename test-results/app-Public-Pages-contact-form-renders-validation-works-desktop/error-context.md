# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> Public Pages >> contact: form renders, validation works
- Location: e2e/app.spec.ts:57:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Name is required').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Name is required').first()

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
    - generic [ref=e29]:
      - generic [ref=e30]:
        - heading "Let's Work Together" [level=1] [ref=e31]
        - paragraph [ref=e32]: Have a project in mind? Let's build something that actually ships.
      - generic [ref=e33]:
        - generic [ref=e34]:
          - heading "Send a message" [level=2] [ref=e35]
          - generic [ref=e36]:
            - generic [ref=e37]:
              - generic [ref=e38]: Name
              - textbox "Name" [ref=e39]:
                - /placeholder: Your name
            - generic [ref=e40]:
              - generic [ref=e41]: Email
              - textbox "Email" [ref=e42]:
                - /placeholder: you@example.com
            - generic [ref=e43]:
              - generic [ref=e44]: Message
              - textbox "Message" [ref=e45]:
                - /placeholder: Tell me about your project...
              - generic [ref=e47]: 0 / 2000
            - button "Send Message" [ref=e48] [cursor=pointer]:
              - img [ref=e50]
              - generic [ref=e53]: Send Message
        - generic [ref=e54]:
          - generic [ref=e55]:
            - heading "Direct contact" [level=2] [ref=e56]
            - generic [ref=e57]:
              - link "kurhula04s@gmail.com" [ref=e58] [cursor=pointer]:
                - /url: mailto:kurhula04s@gmail.com
                - img [ref=e60]
                - generic [ref=e63]: kurhula04s@gmail.com
              - link "github.com/MALULEKE-KS" [ref=e64] [cursor=pointer]:
                - /url: https://github.com/MALULEKE-KS
                - img [ref=e66]
                - generic [ref=e69]: github.com/MALULEKE-KS
              - link "linkedin.com/in/kurhula-success-maluleke" [ref=e70] [cursor=pointer]:
                - /url: https://linkedin.com/in/kurhula-success-maluleke-32153231a
                - img [ref=e72]
                - generic [ref=e76]: linkedin.com/in/kurhula-success-maluleke
          - generic [ref=e77]:
            - heading "What happens next" [level=2] [ref=e78]
            - generic [ref=e79]:
              - generic [ref=e80]:
                - generic [ref=e81]: "1"
                - paragraph [ref=e82]: I review your message and project details.
              - generic [ref=e83]:
                - generic [ref=e84]: "2"
                - paragraph [ref=e85]: We schedule a 30-minute call to discuss scope and feasibility.
              - generic [ref=e86]:
                - generic [ref=e87]: "3"
                - paragraph [ref=e88]: I send a detailed proposal with timeline and pricing.
          - generic [ref=e89]:
            - paragraph [ref=e90]: Not sure if I am the right fit? Check out my work and decide for yourself.
            - generic [ref=e91]:
              - text: View my projects
              - img [ref=e93]
  - contentinfo [ref=e95]:
    - generic [ref=e96]:
      - generic [ref=e97]:
        - generic [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e100]: K
            - generic [ref=e101]:
              - generic [ref=e102]: Maluleke Kurhula Success
              - generic [ref=e103]: African Roots | Global Impact
          - paragraph [ref=e104]: Software Engineer and AI Systems Architect building practical digital systems that solve real-world challenges.
          - generic [ref=e105]:
            - link "GitHub" [ref=e106] [cursor=pointer]:
              - /url: https://github.com/MALULEKE-KS
            - generic [ref=e107]: ·
            - link "LinkedIn" [ref=e108] [cursor=pointer]:
              - /url: https://za.linkedin.com/in/kurhula-success-maluleke-32153231a
            - generic [ref=e109]: ·
            - link "Email" [ref=e110] [cursor=pointer]:
              - /url: mailto:kurhula04s@gmail.com
        - generic [ref=e111]:
          - heading "Navigation" [level=4] [ref=e112]
          - generic [ref=e113]:
            - link "Home" [ref=e114] [cursor=pointer]:
              - /url: /
            - link "About" [ref=e115] [cursor=pointer]:
              - /url: /about
            - link "Projects" [ref=e116] [cursor=pointer]:
              - /url: /projects
            - link "Stack" [ref=e117] [cursor=pointer]:
              - /url: /stack
            - link "Philosophy" [ref=e118] [cursor=pointer]:
              - /url: /philosophy
            - link "Contact" [ref=e119] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e120]:
          - heading "Connect" [level=4] [ref=e121]
          - generic [ref=e122]:
            - link "Email" [ref=e123] [cursor=pointer]:
              - /url: mailto:kurhula04s@gmail.com
            - link "WhatsApp" [ref=e124] [cursor=pointer]:
              - /url: https://wa.me/27640708649
            - link "LinkedIn" [ref=e125] [cursor=pointer]:
              - /url: https://za.linkedin.com/in/kurhula-success-maluleke-32153231a
            - link "GitHub" [ref=e126] [cursor=pointer]:
              - /url: https://github.com/MALULEKE-KS
      - generic [ref=e127]:
        - paragraph [ref=e128]: © 2026 Maluleke Kurhula Success. All rights reserved.
        - paragraph [ref=e129]: Built with Angular · Tailwind CSS · Custom CSS
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
  53  |     await expect(page.locator('text=View Projects').first()).toBeVisible();
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
> 73  |     await expect(page.locator('text=Name is required').first()).toBeVisible();
      |                                                                 ^ Error: expect(locator).toBeVisible() failed
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
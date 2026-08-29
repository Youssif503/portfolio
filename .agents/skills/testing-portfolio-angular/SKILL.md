---
name: testing-portfolio-angular
description: How to run and visually test the Angular portfolio app (portfolio-app/) against the original static portfolio.html.
---

# Testing the Angular portfolio app

## Running
- Angular 20 requires Node >= 20.19. The system node may be older — use nvm:
  `source ~/.nvm/nvm.sh && nvm use 22`
- Dev server: `cd portfolio-app && npm start` → http://localhost:4200
- Serve the original page for A/B comparison:
  `python3 -m http.server 8124 --directory <repo root>` → http://localhost:8124/portfolio.html
- Styling depends on the Tailwind CDN script and Google Fonts in `src/index.html`, so network access is required; a `cdn.tailwindcss.com should not be used in production` console warning is expected and benign.

## Proving visual parity objectively
Screenshots alone are weak. Run the same snippet in the console on both URLs and diff the JSON:

```js
(() => { const sel=['nav','h1','h2','h3','footer']; const out={scrollH:document.documentElement.scrollHeight,w:innerWidth};
sel.forEach(s=>{out[s]=[...document.querySelectorAll(s)].map(e=>{const r=e.getBoundingClientRect(),cs=getComputedStyle(e);
return [Math.round(r.x),Math.round(r.width),Math.round(r.height),cs.fontSize,cs.fontFamily.split(',')[0]].join('|')})});
return JSON.stringify(out); })()
```
Identical output (e.g. scrollHeight 2987 at 1600px, 3096 at 500px) is strong parity evidence.

## Mobile width
Chrome's minimum window width is ~532px physical (~500px CSS), so a true 390px viewport is not reachable by resizing the window; 500px still exercises the sub-`md` mobile layout (hero font drops to 64px, cards stack, nav links hide). Note the page has a small pre-existing horizontal overflow (scrollWidth 543 vs clientWidth 485) at that width in BOTH the original and the Angular app — not a regression.

## Known harness caveat
The browser automation harness strips `target="_blank"` from anchors, so external links open in the same tab and `a.getAttribute('target')` returns null even on the untouched original page. Do not report this as a bug; verify the binding in source (`[attr.target]` in `site-footer.html`) instead.

## Scroll stagger
`ScrollStaggerDirective` adds `.is-visible` via IntersectionObserver (threshold 0.1). To capture the fade, scroll in small increments and screenshot immediately — a card just entering the viewport appears dimmed/offset relative to already-visible ones.

## Devin Secrets Needed
None.

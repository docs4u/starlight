import{g as i}from"./color-lib.BEm3y1oj.js";import{s as o}from"./store.BlYhg_et.js";class l extends HTMLElement{#e=new CSSStyleSheet;constructor(){super(),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this.#e];const t=()=>this.#s();o.accent.subscribe(t),o.gray.subscribe(t)}#s(){const t=i({accent:o.accent.get(),gray:o.gray.get()});this.#r(t),this.#o(t),this.#a(t)}#r({dark:t,light:e}){this.querySelectorAll("[data-accent-preview] > *").forEach(s=>{const a="dark"in s.dataset?t:e;Object.entries(a).forEach(([c,n])=>{s.style.setProperty(`--sl-color-${c}`,n)})})}#t(t){return Object.entries(t).map(([e,r])=>`--sl-color-${e}: ${r};`).join(`
	`)}#o({dark:t,light:e}){const r=`/* Dark mode colors. */
:root {
	${this.#t(t)}
}
/* Light mode colors. */
:root[data-theme='light'] {
	${this.#t(e)}
}`;this.#e.replaceSync(r);const s=this.querySelector("[data-theme-css]");s&&(s.innerHTML=r)}#a({dark:t,light:e}){const r=`import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '${t["accent-high"]}', 600: '${e.accent}', 900: '${e["accent-high"]}', 950: '${t["accent-low"]}' };
const gray = { 100: '${e["gray-7"]}', 200: '${e["gray-6"]}', 300: '${e["gray-5"]}', 400: '${e["gray-4"]}', 500: '${e["gray-3"]}', 700: '${e["gray-2"]}', 800: '${e["gray-1"]}', 900: '${e.white}' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};`,s=this.querySelector("[data-theme-tailwind]");s&&(s.innerHTML=r)}}customElements.define("theme-designer",l);

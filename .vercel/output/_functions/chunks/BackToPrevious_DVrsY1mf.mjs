import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_CHXx7Kpb.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://bartoszlenar.github.io");
const $$BackToPrevious = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackToPrevious;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="not-prose group relative flex w-fit flex-nowrap rounded border border-black/15 py-1.5 pl-7 pr-3 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-4 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-2 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="text-sm"> ${renderSlot($$result, $$slots["default"])} </div> </a>`;
}, "/Users/jonathan/Documents/GitHub/astro-milidev/src/components/BackToPrevious.astro", void 0);

export { $$BackToPrevious as $ };

import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { i as instagramlink, a as instagram, e as email, b as emailicon, l as logo, g as grue } from "../../chunks/footer-grue.js";
const app = "";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-1g95cg.svelte-1g95cg{min-height:24px;transition:transform 0.3s ease-in-out}button.svelte-1g95cg.svelte-1g95cg{z-index:20}.line.svelte-1g95cg.svelte-1g95cg{fill:none;stroke:currentColor;stroke-width:6;transition:stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)}.line1.svelte-1g95cg.svelte-1g95cg{stroke-dasharray:60 207;stroke-width:6}.line2.svelte-1g95cg.svelte-1g95cg{stroke-dasharray:60 60;stroke-width:6}.line3.svelte-1g95cg.svelte-1g95cg{stroke-dasharray:60 207;stroke-width:6}.open.svelte-1g95cg .line1.svelte-1g95cg{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}.open.svelte-1g95cg .line2.svelte-1g95cg{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}.open.svelte-1g95cg .line3.svelte-1g95cg{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  return `<button class="${[
    "fixed right-4 top-4 z-20 cursor-pointer rounded-full border-none bg-white p-3 text-primary shadow hover:text-gray-700 focus:outline-none svelte-1g95cg",
    open ? "open" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1ygimvq"><svg width="100" height="100" viewBox="0 0 100 100" class="h-8 w-8 text-primary svelte-1g95cg"><path class="line line1 svelte-1g95cg" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path><path class="line line2 svelte-1g95cg" d="M 20,50 H 80"></path><path class="line line3 svelte-1g95cg" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path></svg> </button>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: "aside.svelte-lq59k7{pointer-events:none;opacity:0;transition:opacity 0.2s ease-in-out}.menulink.svelte-lq59k7{transition:color 0.3s ease-in-out}.active.svelte-lq59k7,.menulink.svelte-lq59k7:hover{color:theme('colors.secondary')}.open.svelte-lq59k7{pointer-events:auto;opacity:1}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { open = false } = $$props;
  function isActive(path) {
    return $page.url.pathname === path;
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<aside class="${[
    "fixed z-10 flex h-screen w-screen flex-col justify-between bg-primary p-10 text-white shadow-lg svelte-lq59k7",
    open ? "open" : ""
  ].join(" ").trim()}"><div></div> <nav class="align-center flex flex-col items-center gap-4 font-serif text-4xl lg:gap-0 lg:text-6xl"><a href="/" class="${["menulink no-underline svelte-lq59k7", isActive("/") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1yjlw8x">Accueil</a> <a href="/comite" class="${["menulink no-underline svelte-lq59k7", isActive("/comite") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1qps9ot">Le comité</a> <div class="mt-8 grid w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3 lg:hidden" data-svelte-h="svelte-1bdmizj"><a${add_attribute("href", instagramlink, 0)} target="_blank" class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"><img${add_attribute("src", instagram, 0)} alt="instagram" class="inline-block"></a> <a${add_attribute("href", `mailto:${email}`, 0)} class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"><img${add_attribute("src", emailicon, 0)} alt="email" class="inline-block"></a></div></nav> <div class="flex flex-col items-center gap-6" data-svelte-h="svelte-12r516u"><div class="flex items-center gap-4"><img${add_attribute("src", logo, 0)} alt="Logo Gruyère Padel Club" class="w-16 lg:w-24"> <h3 class="my-0 lg:text-xl">Gruyère Padel Club</h3></div> <div class="hidden w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3 lg:grid"><a${add_attribute("href", instagramlink, 0)} target="_blank" class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"><img${add_attribute("src", instagram, 0)} alt="instagram" class="inline-block"></a> <a${add_attribute("href", `mailto:${email}`, 0)} class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"><img${add_attribute("src", emailicon, 0)} alt="email" class="inline-block"></a></div></div> <img${add_attribute("src", grue, 0)} alt="La gruyère" class="absolute -right-0 bottom-0 scale-125 opacity-25 lg:origin-bottom-right lg:scale-150"> </aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="wrapper">${slots.default ? slots.default({}) : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};

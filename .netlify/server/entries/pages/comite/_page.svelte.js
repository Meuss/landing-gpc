import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Hero, F as Footer } from "../../../chunks/footer.js";
const members = [
  { name: "Grégory Cueto", role: "Président", image: "team/greg.jpg" },
  { name: "Patrik Fuhrer", role: "Vice-président", image: "team/patrik.jpg" },
  { name: "Vincent Berset", role: "Formation", image: "team/vincent.jpg" },
  { name: "Diego Cueto", role: "Finances", image: "team/diego.jpg" },
  { name: "Romain de Flaugergues", role: "Animation", image: "team/romain.jpg" },
  { name: "Maxime Schweizer", role: "Communication", image: "team/maxime.jpg" },
  { name: "Boris Zueblin", role: "Administration", image: "team/boris.jpg" }
];
const pdficon = "/_app/immutable/assets/pdf.c8a3137a.svg";
const Comite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h2 class="lg:mt-0" data-svelte-h="svelte-1m5ggwt">Le comité du Gruyère Padel Club</h2> <div class="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">${each(members, (member, i) => {
    return `<div class="flex max-w-[300px] flex-col items-center gap-4 rounded-md border border-secondary px-4 py-3 md:max-w-full xl:px-8 xl:py-6"><div class="mb-4 aspect-square overflow-hidden" data-svelte-h="svelte-gvo0c9"><img${add_attribute("src", member.image, 0)}${add_attribute("alt", member.name, 0)} class="h-full w-full object-cover object-center"></div> <p class="text-center font-bold">${escape(member.name)}<br> <span class="text-sm font-normal">${escape(member.role)}</span></p> </div>`;
  })}</div> <div class="mt-10" data-svelte-h="svelte-wot52i"><a class="btn" href="statuts.pdf" target="_blank"><span>Statuts du club</span> <img${add_attribute("src", pdficon, 0)} alt="statuts pdf"></a></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rhdf6c_START -->${$$result.title = `<title>Le comité | Gruyère Padel Club</title>`, ""}<meta property="og:title" content="Le comité | Gruyère Padel Club"><meta name="description" content="La liste des membres du comité du Gruyère Padel Club à Bulle"><meta property="og:description" content="La liste des membres du comité du Gruyère Padel Club à Bulle"><!-- HEAD_svelte-rhdf6c_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {
    default: () => {
      return `Le comité`;
    }
  })} <main class="bg-white py-10 lg:py-16"><div class="container">${validate_component(Comite, "Comite").$$render($$result, {}, {}, {})}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { H as Hero, F as Footer } from "../../chunks/footer.js";
import { i as instagramlink, e as email } from "../../chunks/footer-grue.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother.js";
const users = "/_app/immutable/assets/users.4ea3de3f.svg";
const Club = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section data-svelte-h="svelte-8ce9bb"><div><h2 class="lg:mt-0">Le Gruyère Padel Club</h2> <p>Le Gruyère Padel Club est heureux de vous annoncer l’ouverture de <strong>deux terrains intérieurs de Padel à Bulle</strong> à la fin du mois de décembre!</p> <p>Le club a été formé en 2023 et souhaite promouvoir le Padel pour tous en Gruyère, soutenir la
			formation et favoriser la compétition. Plus d&#39;infos sur le comité <a href="/comite">ici</a>.</p> <p>En rejoignant notre club, vous bénéficierez d&#39;une multitude d&#39;avantages exclusifs. Restez à
			l&#39;écoute pour plus de détails à venir. De plus, notre groupe WhatsApp dédié permet aux membres
			d&#39;organiser des matchs, favorisant ainsi une communauté active et engagée.</p> <a class="btn" href="mailto:info@gruyerepadel.ch?subject=Adhésion au Gruyère Padel Club&body=Bonjour, je souhaite devenir membre du club ou avoir plus d'informations à son sujet.%0D%0A%0D%0ANom:%0D%0APrénom:%0D%0ANuméro de natel:%0D%0AEmail:%0D%0AAdresse:%0D%0ARemarques éventuelles:"><img${add_attribute("src", users, 0)} alt="users"> <span>Devenir membre</span></a></div></section>`;
});
const rackets = "/_app/immutable/assets/rackets.e8dbec6b.webp";
const racketsSmall = "/_app/immutable/assets/rackets-small.8d7ab316.webp";
const instagram = "/_app/immutable/assets/instagram.b15a4f8c.svg";
const Terrains = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section data-svelte-h="svelte-19j7b77"><div class="grid grid-cols-1 gap-10 lg:grid-cols-2"><div class="image_cont"><img srcset="${escape(racketsSmall, true) + " 1000w, " + escape(rackets, true) + " 2000w"}" sizes="(max-width: 1000px) 1000px, 2000px"${add_attribute("src", rackets, 0)} alt="Terrain de padel Bulle"></div> <div class="lg:flex lg:flex-col lg:items-start lg:justify-center"><h2>Nouveaux terrains de Padel</h2> <p>La société du Centre de tennis de Bulle, s&#39;engageant activement dans la promotion de
				nouveaux sports, a réalisé un investissement significatif pour développer le padel, une
				discipline en plein essor et encore méconnue dans la région.</p> <p>Suivez-nous sur instagram pour être informé/e de l’avancement des travaux et de l’ouverture
				officielle!</p> <a class="btn"${add_attribute("href", instagramlink, 0)} target="_blank"><img${add_attribute("src", instagram, 0)} alt="instagram"> <span>Suivre sur instagram</span></a></div></div></section>`;
});
const Outro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><p data-svelte-h="svelte-jj0w9g">Plus d&#39;informations à venir, ce site va évoluera en 2024.</p> <p>En attendant, pour plus d’informations contactez-nous via email à <a${add_attribute("href", `mailto:${email}`, 0)} target="_blank">${escape(email)}</a></p> <h2 class="lg:mt-20 lg:text-center" data-svelte-h="svelte-16xibpb">À bientôt sur les courts!</h2></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {
    default: () => {
      return `Sortez vos raquettes,<br>le Padel débarque à Bulle!`;
    }
  })} <main class="bg-white py-10 lg:py-16"><div class="container">${validate_component(Club, "Club").$$render($$result, {}, {}, {})} ${validate_component(Terrains, "Terrains").$$render($$result, {}, {}, {})} ${validate_component(Outro, "Outro").$$render($$result, {}, {}, {})}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

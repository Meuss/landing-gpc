

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comite/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0b35fad0.js","_app/immutable/chunks/scheduler.c45afc05.js","_app/immutable/chunks/index.1334f603.js","_app/immutable/chunks/footer.5b908129.js","_app/immutable/chunks/footer-grue.873b4680.js"];
export const stylesheets = [];
export const fonts = [];

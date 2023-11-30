

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.44e325bf.js","_app/immutable/chunks/scheduler.c45afc05.js","_app/immutable/chunks/index.1334f603.js","_app/immutable/chunks/stores.87c86bab.js","_app/immutable/chunks/singletons.2e7512cb.js","_app/immutable/chunks/footer-grue.873b4680.js"];
export const stylesheets = ["_app/immutable/assets/0.00a45ae0.css"];
export const fonts = [];

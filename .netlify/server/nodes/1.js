

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a6b7c992.js","_app/immutable/chunks/scheduler.c45afc05.js","_app/immutable/chunks/index.1334f603.js","_app/immutable/chunks/stores.87c86bab.js","_app/immutable/chunks/singletons.2e7512cb.js"];
export const stylesheets = [];
export const fonts = [];

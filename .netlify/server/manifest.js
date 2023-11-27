export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","mstile-144x144.png","mstile-150x150.png","mstile-310x150.png","mstile-310x310.png","mstile-70x70.png","og-image.jpg","safari-pinned-tab.svg","site.webmanifest","statuts.pdf","team/.DS_Store","team/boris.jpg","team/diego.jpg","team/greg.jpg","team/maxime.jpg","team/patrik.jpg","team/romain.jpg","team/unoptimized/boris.jpg","team/unoptimized/diego.jpg","team/unoptimized/greg.jpg","team/unoptimized/maxime.jpg","team/unoptimized/patrik.jpg","team/unoptimized/romain.jpg","team/unoptimized/vincent.jpg","team/vincent.jpg"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".jpg":"image/jpeg",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.10cadc15.js","app":"_app/immutable/entry/app.2df13d66.js","imports":["_app/immutable/entry/start.10cadc15.js","_app/immutable/chunks/scheduler.c45afc05.js","_app/immutable/chunks/singletons.2e7512cb.js","_app/immutable/entry/app.2df13d66.js","_app/immutable/chunks/scheduler.c45afc05.js","_app/immutable/chunks/index.1334f603.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/comite",
				pattern: /^\/comite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

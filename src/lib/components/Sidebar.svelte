<script lang="ts">
	import { page } from '$app/stores';
	import { instagramlink, email } from '$lib/variables';
	import logo from '$lib/assets/footer-logo.svg';
	import instagram from '$lib/assets/footer-instagram.svg';
	import emailicon from '$lib/assets/footer-email.svg';
	import grue from '$lib/assets/footer-grue.svg';

	export let open = false;
	function isActive(path: string) {
		return $page.url.pathname === path;
	}
</script>

<aside
	class="fixed z-10 flex h-screen w-screen flex-col justify-between bg-primary p-10 text-white shadow-lg"
	class:open
>
	<div></div>
	<nav
		class="align-center flex flex-col items-center gap-4 font-serif text-4xl lg:gap-0 lg:text-6xl"
	>
		<a
			href="/"
			class:active={isActive('/')}
			class="menulink no-underline"
			on:click={() => (open = !open)}>Accueil</a
		>
		<a
			href="/comite"
			class:active={isActive('/comite')}
			class="menulink no-underline"
			on:click={() => (open = !open)}>Le comité</a
		>
		<div class="mt-8 grid w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3 lg:hidden">
			<a
				href={instagramlink}
				target="_blank"
				class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"
			>
				<img src={instagram} alt="instagram" class="inline-block" />
			</a>
			<a
				href={`mailto:${email}`}
				class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"
			>
				<img src={emailicon} alt="email" class="inline-block" />
			</a>
		</div>
	</nav>
	<div class="flex flex-col items-center gap-6">
		<div class="flex items-center gap-4">
			<img src={logo} alt="Logo Gruyère Padel Club" class="w-16 lg:w-24" />
			<h3 class="my-0 lg:text-xl">Gruyère Padel Club</h3>
		</div>
		<div class="hidden w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3 lg:grid">
			<a
				href={instagramlink}
				target="_blank"
				class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"
			>
				<img src={instagram} alt="instagram" class="inline-block" />
			</a>
			<a
				href={`mailto:${email}`}
				class="mx-auto flex flex-col justify-center rounded-full border p-4 transition-all duration-200 hover:scale-105"
			>
				<img src={emailicon} alt="email" class="inline-block" />
			</a>
		</div>
	</div>
	<img
		src={grue}
		alt="La gruyère"
		class="absolute -right-0 bottom-0 scale-125 opacity-25 lg:origin-bottom-right lg:scale-150"
	/>
</aside>

<style>
	aside {
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	.menulink {
		transition: color 0.3s ease-in-out;
	}
	.active,
	.menulink:hover {
		color: theme('colors.secondary');
	}
	.open {
		pointer-events: auto;
		opacity: 1;
	}
</style>

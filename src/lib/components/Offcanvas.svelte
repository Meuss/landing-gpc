<script lang="ts">
	import { page } from '$app/stores';
	import { instagramlink, email } from '$lib/variables';
	import logo from '$lib/assets/footer-logo.svg';
	import instagram from '$lib/assets/footer-instagram.svg';
	import emailicon from '$lib/assets/footer-email.svg';
	import grue from '$lib/assets/footer-grue.svg';

	export let open = false;
	$: isActiveHome = $page.url.pathname === '/';
	$: isActiveComite = $page.url.pathname === '/comite';
</script>

<aside
	class="pointer-events-none fixed z-10 flex h-[100svh] w-screen flex-col justify-between bg-primary p-10 text-white opacity-0 shadow-lg transition-opacity duration-200"
	class:open
>
	<div></div>
	<nav class="align-center flex flex-col items-center gap-8 font-serif text-4xl lg:text-6xl">
		<a
			href="/"
			class:active={isActiveHome}
			class="menulink border-b-2 border-transparent leading-none no-underline transition-colors duration-200 lg:border-b-4"
			on:click={() => (open = !open)}>Accueil</a
		>
		<a
			href="/comite"
			class:active={isActiveComite}
			class="menulink border-b-2 border-transparent leading-none no-underline transition-colors duration-200 lg:border-b-4"
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
	.active,
	.menulink:hover {
		color: theme('colors.secondary');
		border-color: theme('colors.secondary');
	}
	.open {
		pointer-events: auto;
		opacity: 1;
	}
</style>

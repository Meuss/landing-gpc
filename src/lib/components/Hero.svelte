<script>
	import court from '$lib/assets/court.webp';
	import courtMedium from '$lib/assets/court-medium.webp';
	import courtSmall from '$lib/assets/court-small.webp';
	import Logo from './Logo.svelte';
</script>

<header class="relative flex flex-col justify-between pb-10 text-white lg:pb-20">
	<div class="container pt-8">
		<Logo c="w-44 h-auto md:hidden" />
	</div>
	<div class="container">
		<div>
			<h1><slot /></h1>
		</div>
	</div>
	<div class="absolute inset-0 -z-10">
		<img
			srcset="{courtSmall} 500w, {courtMedium} 1000w, {court} 2000w"
			sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 2000px"
			src={court}
			alt="Terrain de padel Bulle"
			class="h-full w-full object-cover object-center"
		/>
	</div>
	<Logo c="hidden md:block absolute right-20 md:-bottom-16 md:w-56 lg:-bottom-32 lg:w-72 h-auto" />
</header>

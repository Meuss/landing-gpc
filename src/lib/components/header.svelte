<script>
	import court from '$lib/assets/court.webp';
	import courtMedium from '$lib/assets/court-medium.webp';
	import courtSmall from '$lib/assets/court-small.webp';
</script>

<header class="relative flex flex-col justify-end pb-10 text-white">
	<div class="container">
		<h1>Sortez vos raquettes,<br />le Padel débarque à Bulle!</h1>
	</div>
	<div class="absolute inset-0 -z-10">
		<img
			srcset="{courtSmall} 500w, {courtMedium} 1000w, {court} 2000w"
			sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 2000px"
			src={court}
			alt="Terrain de padel Bulle"
			class="w-full h-full object-cover object-center"
		/>
	</div>
</header>

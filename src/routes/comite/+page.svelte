<script>
	import Hero from '$lib/components/Hero.svelte';
	import Comite from '$lib/components/Comite.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Le comité | Gruyère Padel Club</title>
	<meta property="og:title" content="Le comité | Gruyère Padel Club" />
	<meta name="description" content="La liste des membres du comité du Gruyère Padel Club à Bulle" />
	<meta
		property="og:description"
		content="La liste des membres du comité du Gruyère Padel Club à Bulle"
	/>
	<meta property="og:url" content="https://gruyerepadel.ch/comite" />
</svelte:head>

<Hero>Le comité</Hero>
<main class="bg-white py-10 lg:py-16">
	<div class="container">
		<Comite />
	</div>
</main>

<Footer />

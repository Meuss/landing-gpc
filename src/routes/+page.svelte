<script>
	import Hero from '$lib/components/Hero.svelte';
	import Club from '$lib/components/Club.svelte';
	import Terrains from '$lib/components/Terrains.svelte';
	import Outro from '$lib/components/Outro.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	onMount(() => {
		const smoother = ScrollSmoother.create({
			content: '.wrapper',
			smooth: 0.2,
			effects: false
		});

		smoother.effects('.image_cont img', { speed: 'auto' });
	});
</script>

<svelte:head>
	<title>Gruyère Padel Club</title>
	<meta property="og:title" content="Gruyère Padel Club" />
	<meta
		name="description"
		content="Le site officiel du Gruyère Padel Club à Bulle, qui a pour but de promouvoir le Padel pour tous en Gruyère. Venez découvrir ce magnifique sport!"
	/>
	<meta
		property="og:description"
		content="Le site officiel du Gruyère Padel Club à Bulle, qui a pour but de promouvoir le Padel pour tous en Gruyère. Venez découvrir ce magnifique sport!"
	/>
	<meta property="og:url" content="https://gruyerepadel.ch" />
</svelte:head>

<Hero>
	Sortez vos raquettes,<br />le Padel débarque à Bulle!
</Hero>
<main class="bg-white py-10 lg:py-16">
	<div class="container">
		<Club />
		<Terrains />
		<Outro />
	</div>
</main>

<Footer />

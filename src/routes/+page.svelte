<script>
	import Header from '$lib/components/header.svelte';
	import Intro from '$lib/components/intro.svelte';
	import Club from '$lib/components/club.svelte';
	import Outro from '$lib/components/outro.svelte';
	import Footer from '$lib/components/footer.svelte';
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

<Header />
<main class="bg-white py-10 lg:py-16">
	<div class="container">
		<Intro />
		<Club />
		<Outro />
	</div>
</main>

<Footer />

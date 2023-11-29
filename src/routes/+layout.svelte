<script>
	import '../app.css';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Offcanvas from '$lib/components/Offcanvas.svelte';

	let open = false;
</script>

<Hamburger bind:open />
<Offcanvas bind:open />
<div class="wrapper">
	<slot />
</div>

<script>
	import '../app.css';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let open = false;
</script>

<Hamburger bind:open />
<Sidebar bind:open />
<div class="wrapper">
	<slot />
</div>

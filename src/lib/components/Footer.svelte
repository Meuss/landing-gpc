<script>
	let currentYear = new Date().getFullYear();
	import instagram from '$lib/assets/footer-instagram.svg';
	import emailicon from '$lib/assets/footer-email.svg';
	import grue from '$lib/assets/footer-grue.svg';
	import logo from '$lib/assets/footer-logo.svg';
	import { instagramlink, email } from '$lib/variables';
</script>

<footer class="relative bg-primary text-white">
	<div class="container py-8 lg:flex lg:items-center lg:justify-between lg:py-16">
		<div class="hidden lg:block lg:flex-1">
			<img src={logo} alt="Logo Gruyère Padel Club" class="scale-150" />
		</div>
		<div class="flex flex-col lg:flex-1 lg:items-center">
			<div class="flex items-center gap-2">
				<img src={logo} alt="Logo Gruyère Padel Club" class="relative -left-2 w-16 lg:hidden" />
				<h3 class="my-0 lg:text-4xl">Gruyère Padel Club</h3>
			</div>
			<div class="mb-8 mt-4 w-72 border-b border-solid border-b-white"></div>
			<div class="mb-8 grid w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3">
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
			<p class="mb-0 text-xs">
				<span>© {currentYear} Gruyère Padel Club</span>
			</p>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<img src={grue} alt="La gruyère" />
		</div>
	</div>
</footer>

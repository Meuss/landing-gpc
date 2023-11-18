<script>
	let currentYear = new Date().getFullYear();
	import instagram from '$lib/assets/footer-instagram.svg';
	import whatsapp from '$lib/assets/footer-whatsapp.svg';
	import email from '$lib/assets/footer-email.svg';
	import grue from '$lib/assets/footer-grue.svg';
	import logo from '$lib/assets/footer-logo.svg';
</script>

<footer class="bg-primary text-white">
	<div class="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-24 lg:py-32">
		<div class="flex flex-col">
			<div class="flex items-center gap-2">
				<img src={logo} alt="Logo Gruyère Padel Club" class="w-20 relative -left-2 top-2" />
				<h3 class="my-0">Gruyère Padel Club</h3>
			</div>
			<div class="mb-8 mt-4 w-72 border-b border-solid border-b-white"></div>
			<div class="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-3 gap-3">
				<a href="#" class="border p-4 rounded-full mx-auto flex flex-col">
					<img src={instagram} alt="instagram" class="inline-block" />
				</a>
				<a href="#" class="border p-4 rounded-full mx-auto flex flex-col">
					<img src={whatsapp} alt="whatsapp" class="inline-block" />
				</a>
				<a href="#" class="border p-4 rounded-full mx-auto flex flex-col">
					<img src={email} alt="email" class="inline-block" />
				</a>
			</div>
			<p class="max-[479px]:text-sm">
				© {currentYear} Gruyère Padel Club
			</p>
		</div>
	</div>
	<img src={grue} alt="La gruyère" class="hidden md:block" />
</footer>

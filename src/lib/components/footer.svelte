<script>
	let currentYear = new Date().getFullYear();
	import instagram from '$lib/assets/footer-instagram.svg';
	import whatsapp from '$lib/assets/footer-whatsapp.svg';
	import emailicon from '$lib/assets/footer-email.svg';
	import grue from '$lib/assets/footer-grue.svg';
	import logo from '$lib/assets/footer-logo.svg';
	import { whatsapplink, instagramlink, email } from '$lib/variables';
</script>

<footer class="bg-primary text-white relative">
	<div class="container py-8 lg:py-16 lg:flex lg:justify-between lg:items-center">
		<div class="hidden lg:block lg:flex-1">
			<img src={logo} alt="Logo Gruyère Padel Club" class="scale-150" />
		</div>
		<div class="flex flex-col lg:items-center lg:flex-1">
			<div class="flex items-center gap-2">
				<img src={logo} alt="Logo Gruyère Padel Club" class="w-16 relative -left-2 lg:hidden" />
				<h3 class="my-0 lg:text-4xl">Gruyère Padel Club</h3>
			</div>
			<div class="mb-8 mt-4 w-72 border-b border-solid border-b-white"></div>
			<div class="mb-8 grid w-full max-w-[150px] grid-flow-col grid-cols-2 gap-3">
				<a
					href={instagramlink}
					target="_blank"
					class="border p-4 rounded-full mx-auto flex flex-col justify-center transition-all duration-200 hover:scale-105"
				>
					<img src={instagram} alt="instagram" class="inline-block" />
				</a>
				<!-- <a
					href={whatsapplink}
					class="border p-4 rounded-full mx-auto flex flex-col justify-center transition-all duration-200 hover:scale-105"
				>
					<img src={whatsapp} alt="whatsapp" class="inline-block" />
				</a> -->
				<a
					href={`mailto:${email}`}
					class="border p-4 rounded-full mx-auto flex flex-col justify-center transition-all duration-200 hover:scale-105"
				>
					<img src={emailicon} alt="email" class="inline-block" />
				</a>
			</div>
			<p class="mb-0 text-xs">
				© {currentYear} Gruyère Padel Club
			</p>
		</div>
		<div class="hidden lg:flex-1 lg:flex lg:justify-end">
			<img src={grue} alt="La gruyère" />
		</div>
	</div>
</footer>

<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import rackets from '$lib/assets/rackets.webp';
	import racketsSmall from '$lib/assets/rackets-small.webp';
	import instagram from '$lib/assets/instagram.svg';
	import whatsapp from '$lib/assets/whatsapp.svg';
</script>

<Header />
<main class="bg-white py-10">
	<div class="container">
		<section class="mb-10">
			<h2>Nouveaux terrains de Padel</h2>
			<p>
				Le Gruyère Padel Club est heureux de vous annoncer l’ouverture de <strong
					>deux terrains intérieurs de Padel à Bulle</strong
				> à la fin du mois de décembre!
			</p>
			<p>
				La société du Centre de tennis de Bulle, s'engageant activement dans la promotion de
				nouveaux sports, a réalisé un investissement significatif pour développer le padel, une
				discipline en plein essor et encore méconnue dans la région.
			</p>
			<p>
				Suivez-nous sur instagram pour être informé/e de l’avancement des travaux et de l’ouverture
				officielle!
			</p>
			<a class="btn" href="https://www.instagram.com/gruyerepadelclub">
				<img src={instagram} alt="instagram" />
				<span>Suivre sur instagram</span>
			</a>
		</section>

		<section class="mb-10">
			<div class="grid grid-cols-1">
				<img
					srcset="{racketsSmall} 1000w, {rackets} 2000w"
					sizes="(max-width: 1000px) 1000px, 2000px"
					src={rackets}
					alt="Terrain de padel Bulle"
				/>
				<div>
					<h2>Gruyère Padel Club</h2>
					<p>
						Le Gruyère Padel Club a été formé en 2023 et souhaite promouvoir le Padel pour tous en
						Gruyère, soutenir la formation et favoriser la compétition.
					</p>
					<p>
						Dans ce cadre-là, un groupe WhatsApp a été lancé pour permettre à nos membres de se
						retrouver sur les terrains et échanger entre eux.
					</p>
					<a class="btn" href="#">
						<img src={whatsapp} alt="whatsapp" />
						<span>Rejoindre le groupe</span>
					</a>
				</div>
			</div>
		</section>

		<section>
			<p>
				Ce site va évoluera en 2024. En attendant, pour plus d’informations contactez-nous via email
				à <a href="mailto:gruyerepadelclub@gmail.com">gruyerepadelclub@gmail.com</a>
			</p>
			<h2>À bientôt sur les courts!</h2>
		</section>
	</div>
</main>

<Footer />

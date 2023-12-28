<script>
	import rackets from '$lib/assets/rackets.webp';
	import racketsSmall from '$lib/assets/rackets-small.webp';
	import instagram from '$lib/assets/instagram.svg';
	import { instagramlink } from '$lib/variables';
</script>

<section>
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
		<div class="image_cont">
			<img
				srcset="{racketsSmall} 1000w, {rackets} 2000w"
				sizes="(max-width: 1000px) 1000px, 2000px"
				src={rackets}
				alt="Terrain de padel Bulle"
			/>
		</div>
		<div class="lg:flex lg:flex-col lg:items-start lg:justify-center">
			<h2>Nouveaux terrains de Padel</h2>
			<p>
				La société du Centre de tennis de Bulle, s'engageant activement dans la promotion de
				nouveaux sports, a réalisé un investissement significatif pour développer le padel, une
				discipline en plein essor et encore méconnue dans la région.
			</p>
			<p>Suivez-nous sur instagram pour être informé/e des dernières nouvelles et des événements</p>
			<a class="btn" href={instagramlink} target="_blank">
				<img src={instagram} alt="instagram" />
				<span>Suivre sur instagram</span>
			</a>
		</div>
	</div>
</section>

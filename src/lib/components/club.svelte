<script>
	import rackets from '$lib/assets/rackets.webp';
	import racketsSmall from '$lib/assets/rackets-small.webp';
	import users from '$lib/assets/users.svg';
</script>

<section>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
		<div class="image_cont">
			<img
				srcset="{racketsSmall} 1000w, {rackets} 2000w"
				sizes="(max-width: 1000px) 1000px, 2000px"
				src={rackets}
				alt="Terrain de padel Bulle"
			/>
		</div>
		<div class="lg:flex lg:flex-col lg:justify-center lg:items-start">
			<h2 class="lg:mt-0">Le Gruyère Padel Club</h2>
			<p>
				Le club a été formé en 2023 et souhaite promouvoir le Padel pour tous en Gruyère, soutenir
				la formation et favoriser la compétition.
			</p>
			<p>
				En rejoignant notre club, vous bénéficierez d'une multitude d'avantages exclusifs. Restez à
				l'écoute pour plus de détails à venir. De plus, notre groupe WhatsApp dédié permet aux
				membres d'organiser des matchs, favorisant ainsi une communauté active et engagée.
			</p>
			<a
				class="btn"
				href="mailto:gruyerepadelclub@gmail.com?subject=Adhésion au Gruyère Padel Club&body=Bonjour, je souhaite devenir membre du club ou avoir plus d'informations à son sujet.%0D%0A%0D%0ANom:%0D%0APrénom:%0D%0ANuméro de natel:%0D%0AEmail:%0D%0AAdresse:%0D%0ARemarques éventuelles:"
			>
				<img src={users} alt="users" />
				<span>Devenir membre</span>
			</a>
		</div>
	</div>
</section>

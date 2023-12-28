<script>
	import calendar from '$lib/assets/calendar.svg';
	import users from '$lib/assets/users.svg';
</script>

<section>
	<div>
		<h2 class="lg:mt-0">Sortez vos raquettes, les terrains sont prêts! 🔥</h2>
		<p>
			N’oubliez pas de vous inscrire sur le site de réservation du Centre de tennis pour bénéficier
			du rabais club. Merci également de votre indulgence quant au fonctionnement du site de
			réservation qui est une nouveauté pour le centre. Tout retour constructif peut être transmis
			au club à <a href="mailto:info@gruyerepadel.ch">info@gruyerepadel.ch</a>
		</p>
		<a class="btn" href="https://ctbulle.plugin.ch" target="_blank">
			<img src={calendar} alt="calendar" />
			<span>Réservations</span>
		</a>
		<h2 class="mt-10">Le Gruyère Padel Club</h2>
		<p>
			Le club a été formé en 2023 et souhaite promouvoir le Padel pour tous en Gruyère, soutenir la
			formation et favoriser la compétition. Plus d'infos sur le comité <a href="/comite">ici</a>.
		</p>
		<p>
			En rejoignant notre club, vous bénéficierez d'une multitude d'avantages exclusifs. Restez à
			l'écoute pour plus de détails à venir. De plus, notre groupe WhatsApp dédié permet aux membres
			d'organiser des matchs, favorisant ainsi une communauté active et engagée.
		</p>
		<a
			class="btn"
			href="mailto:info@gruyerepadel.ch?subject=Adhésion au Gruyère Padel Club&body=Bonjour, je souhaite devenir membre du club ou avoir plus d'informations à son sujet.%0D%0A%0D%0ANom:%0D%0APrénom:%0D%0ANuméro de natel:%0D%0AEmail:%0D%0AAdresse:%0D%0ARemarques éventuelles:"
		>
			<img src={users} alt="users" />
			<span>Devenir membre</span>
		</a>
	</div>
</section>

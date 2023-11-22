<script>
	import { email } from '$lib/variables';
	import pc_gruyere from '$lib/assets/pc_gruyere.svg';
	import pc_gruyere_2 from '$lib/assets/pc_gruyere_2.svg';
</script>

<section>
	<p>Plus d'informations à venir, ce site va évoluera en 2024.</p>
	<p>
		En attendant, pour plus d’informations contactez-nous via email à <a
			href={`mailto:${email}`}
			target="_blank">{email}</a
		>
	</p>
	<h2 class="lg:text-center lg:mt-20">À bientôt sur les courts!</h2>

	<div class="border-2 border-secondary rounded bg-slate-50 p-4 text-center max-w-2xl mx-auto">
		<h3>--- sera enlevé ---</h3>
		<p class="text-sm">
			@Maxime et comité, un ami (vrai designer, pas comme moi) s'est amusé à faire des logos hier,
			vous en pensez quoi?
		</p>
		<div class="flex flex-col justify-around items-center gap-5 sm:max-h-72 sm:flex-row">
			<img src={pc_gruyere} class="w-40 sm:w-50" alt="" />
			<img src={pc_gruyere_2} class="w-40 sm:w-50" alt="" />
		</div>
	</div>
</section>

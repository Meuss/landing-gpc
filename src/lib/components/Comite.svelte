<script>
	import { members } from '$lib/members';
	import pdficon from '$lib/assets/pdf.svg';
</script>

<section>
	<h2 class="lg:mt-0">Le comité du Gruyère Padel Club</h2>
	<div
		class="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch"
	>
		{#each members as member, i}
			<div
				class="flex max-w-[300px] flex-col items-center gap-4 rounded-md border border-secondary px-4 py-3 md:max-w-full xl:px-8 xl:py-6"
			>
				<div class="mb-4 aspect-square overflow-hidden">
					<img
						src={member.image}
						alt={member.name}
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<p class="text-center font-bold">
					{member.name}<br />
					<span class="text-sm font-normal">{member.role}</span>
				</p>
			</div>
		{/each}
	</div>
	<div class="mt-10">
		<a class="btn" href="statuts.pdf" target="_blank">
			<span>Statuts du club</span>
			<img src={pdficon} alt="statuts pdf" />
		</a>
	</div>
</section>

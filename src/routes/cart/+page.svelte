<script lang="ts">
	let items = [
		{
			brand: 'Acura',
			models: [
				'2.2CL',
				'2.3CL',
				'3.0CL',
				'3.2CL',
				'ILX',
				'Integra',
				'Legend',
				'MDX',
				'NSX',
				'RDX',
				'3.5 RL',
				'RL',
				'RSX',
				'SLX',
				'2.5TL',
				'3.2TL',
				'TL',
				'TSX',
				'Vigor',
				'ZDX'
			]
		},
		{
			brand: 'Alfa Romeo',
			models: ['164', '8C Competizione', 'GTV-6', 'Milano', 'Spider']
		}
	];
	function brands() {
		return items.map((car) => car.brand);
	}
	let selected = 'Бренд';

	function models(cars) {
		items.find(({ brand, models }) => {
			if (brand === cars) {
				model = models;
			}
			return;
		});
	}
	let model = [];
</script>

<h1>Hello {selected}</h1>
<select bind:value={selected} on:change={() => models(selected)}>
	<option selected>Бренд</option>

	{#each brands() as question}
		<option value={question}>
			{question}
		</option>
	{/each}
</select>
<select>
	<option selected>Модель</option>

	{#each model as m}
		<option value={m}>
			{m}
		</option>
	{/each}
</select>

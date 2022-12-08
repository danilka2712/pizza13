<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { onMount } from 'svelte';

	$: min = 2;
	$: sec = 59;
	$: total = 180;

	onMount(() => {
		const interval = setInterval(() => {
			sec -= 1;
			total -= 1;
			if (sec <= 0) {
				min -= 1;
				sec = 59;
			}
			if (min === 0 && sec === 1) {
				alert('Выполенено');
			}
		}, 1000);
	});
</script>

<div class="px-5">
	<div>
		<h1 class="my-12 text-lg font-semibold">Заявка принята</h1>
		<p class="my-4">Ищем свободные машины</p>
	</div>
	<h1 class=" mb-4 font-sans text-6xl">
		0{min} : {#if sec <= 9}
			0
		{/if}
		{sec}
	</h1>
	<progress value={total / 180} />
</div>

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { onMount } from 'svelte';

	$: sec = 59;
	$: min = 2;
	let timer = true;
	onMount(() => {
		const intervalsec = setInterval(() => {
			sec -= 1;
			if (sec == 0) {
				sec = 59;
			}
		}, 1000);
		const intervalmin = setInterval(() => {
			min -= 1;
		}, 60000);
		const intervaltimer = setInterval(() => {
			timer = false;
		}, 10000);
	});
</script>

<div class="px-5">
	<div class="mb-12">
		<h1 class="my-2 mt-4 text-2xl font-medium">
			Заявка №<span class=" font-sans">331</span> принята
		</h1>
		<p class="my-2 text-[#8e8e8e]">Ищем свободные машины, в среднем это <br /> занимает 3 минуты</p>
	</div>
	{#if timer}
		<h1 class=" text-6xl font-semibold font-sans">{min}:{sec}</h1>
	{:else}
		<h1 class="my-2">Эвакуатор найден!</h1>
		<h1 class="my-2">Имя водителя: Дмитрий</h1>
		<a class="my-2" href="">Связаться с водителем</a>
		
	{/if}
</div>

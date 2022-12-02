<script>
	import { page } from '$app/stores';

	const productsSushi = [
		{ id: 1, name: 'Суши' },
		{ id: 2, name: 'Пицца' },
		{ id: 3, name: 'Шаурма' },
		{ id: 4, name: 'Фастфуд' },
		{ id: 4, name: 'Фастфуд' },
		{ id: 4, name: 'Фастфуд' },
		{ id: 4, name: 'Фастфуд' }
	];
	const productsPizza = [
		{ id: 1, name: 'Суши' },
		{ id: 2, name: 'Пицца' },
		{ id: 3, name: 'Шаурма' },
		{ id: 4, name: 'Фастфуд' },
		{ id: 4, name: 'Фастфуд' }
	];
</script>

<div id="sushi" class="mb-24 container px-4 sm:px-0 mx-auto mt-24">
	<h1 class="my-14 text-4xl">Суши</h1>
	<div class=" grid grid-cols-1 lg:grid-cols-5 sm:gap-7 gap-4 ">
		{#each productsSushi as product}
			<div
				class=" relative z-0 bg-[#232323] border-[#333333] border flex  sm:flex-col justify-between  rounded-xl "
			>
				<div class="w-32 h-full rounded-xl">
					<img class="object-cover rounded-xl h-full w-full p-2" src="sushi.webp" alt="" />
				</div>
				<div class="p-2 ">
					<a class="" href="/">Суши набор</a>
					<p class="text-xs text-gray-400 pr-24">Описание товара, суши роллы</p>
					<div class="flex items-center justify-between">
						<p class=" text-white mt-4">1990 P</p>
						<button class=" text-sm bg-red-700 px-4 py-2 rounded-xl">Добавить</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

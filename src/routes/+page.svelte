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

<div id="sushi" class="container px-4 sm:px-0 mx-auto mt-24">
	<h1 class="my-14 text-4xl">Суши</h1>
	<div class=" grid grid-cols-1 lg:grid-cols-4 sm:gap-7 gap-4 ">
		{#each productsSushi as product}
			<div class=" bg-[#232323] border-[#333333] border flex flex-col justify-between  rounded-xl ">
				<div>
					<img class=" h-auto rounded-t-xl w-full" src="sushi.webp" alt="" />
					<div class="mt-2 p-5">
						<span class="text-lg font-semibold py-5">Сет Мини New</span>
						<p class="pt-3 text-sm text-[#a0a1b6] overscroll-contain break-words">
							Филадельфия Лайт с огурцом, Япония, Банзай, Фиш
						</p>
					</div>
				</div>

				<div class="flex  p-5 items-center  justify-between">
					<span class="text-lg">290 ₽</span>
					<button
						class=" bg-[#F24E1E] transition duration-700 ease-in-out hover:bg-[#e04a1c] text-white p-3 px-6 rounded-xl"
						>Добавить</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>

<div id="sushi" class="container px-4 sm:px-0 mx-auto mt-24">
	<h1 class="my-14 text-4xl">Суши</h1>
	<div class=" grid grid-cols-1 lg:grid-cols-4 sm:gap-7 gap-4 ">
		{#each productsPizza as product}
			<div class=" bg-[#232323] border-[#333333] border flex flex-col justify-between  rounded-xl ">
				<div>
					<img  loading="lazy" class="h-auto  rounded-t-xl w-full" src="desert.webp" alt="" />

					<div class="mt-2 p-5">
						<span class="text-lg font-semibold py-5">Сет Мини New</span>
						<p class="pt-3 text-sm text-[#a0a1b6] overscroll-contain break-words">
							Филадельфия Лайт с огурцом, Япония, Банзай, Фиш
						</p>
					</div>
				</div>

				<div class="flex  p-5 items-center  justify-between">
					<span class="text-lg">290 ₽</span>
					<button class=" bg-[#F24E1E] text-white p-3 px-6 rounded-xl">Добавить</button>
				</div>
			</div>
		{/each}
	</div>
</div>

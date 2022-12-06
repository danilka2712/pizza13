<script>
	const items = [
		{ name: 'Эвакуатор', description: 'Доставим ваш автомобиль в любой точку России' },
		{ name: 'Грузоперевозка', description: 'Доставим ваш автомобиль в любой точку России' },
		{ name: 'Отогрев авто', description: 'Доставим ваш автомобиль в любой точку России' },
		{ name: 'Автоподбор', description: 'Доставим ваш автомобиль в любой точку России' }
	];
</script>

<div class="px-5">
	<div class=" bg-[#5BC43A] p-6 h-44 border-[#e8e8e8]/75 border rounded-xl">
		<h1 class=" text-2xl mt-8  font-medium text-white">Оказываем качественные услуги в вашем районе</h1>

	</div>
	<div class=" flex flex-col gap-7 mb-32 mt-6">
		{#each items as item}
			<div class="p-6 relative bg-[#F7F7F8] border-[#e8e8e8]/75 border flex rounded-2xl ">
				<div>
					<p class=" text-lg font-semibold mb-2">{item.name}</p>
					<p class="text-sm text-[#8e8e8e]">Доставим ваш автомобиль <br /> в любой точку России</p>
				</div>
				<div>
					<img class="w-32 absolute -right-0 top-4" src="car1.svg" alt="" />
				</div>
			</div>
		{/each}
	</div>
</div>

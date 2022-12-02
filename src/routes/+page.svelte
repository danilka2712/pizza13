<script>
	import { cart } from '../cart.js';

	const productsSushi = [
		{ id: 1, name: 'ЛОСОСЬ КИНГ', quantity: 1 },
		{ id: 2, name: 'СЕТ ЯПОНАМАТРЕНА', quantity: 1 },
		{ id: 3, name: 'СЕТ ПОСИДЕЛКИН', quantity: 1 },
		{ id: 4, name: 'СЕТ МАНИФИК', quantity: 1 },
		{ id: 5, name: 'СЕТ ПАНОРАМА', quantity: 1 },
		{ id: 6, name: 'ЧЕЛЕНТАНО', quantity: 1 },
		{ id: 7, name: 'СЕТ ЛЕГЕНДА', quantity: 1 }
	];
	const items = [
		{ id: 1, name: 'Суши', href: 'sushi', img: 'sushi caviar 1.svg' },
		{ id: 2, name: 'Пицца', href: 'pizzas', img: 'pizza 1.svg' },
		{ id: 3, name: 'Шаурма', href: 'shawarma', img: 'buritto 1.svg' },
		{ id: 4, name: 'Фастфуд', href: 'fastfood', img: 'fries 1.svg' },
		{ id: 7, name: 'Сэндвичи', href: 'sandwiches', img: 'taco 1.svg' }
	];

	const addToCart = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};
</script>

<div id="sushi" class="mb-24 container px-4 sm:px-0 mx-auto mt-24">
	<h1 class="my-2 mb-3">Популярное</h1>
	<div class="flex justify-between mb-6">
		{#each items as item}
			<div class="flex  flex-col justify-center items-center">
				<div
					class="  bg-[#232323] flex flex-col items-center justify-center w-14 h-14  rounded-full"
				>
					<img width="32" src={item.img} alt="" />
				</div>
				<span class="text-xs mt-1">{item.name}</span>
			</div>
		{/each}
	</div>
	<div class="mb-5">
		<img class=" rounded-lg" src="C2D29751-6AA6-11ED-94D5-55972109B354-web.webp" alt="" />
	</div>
	<div class=" grid grid-cols-1 lg:grid-cols-5 sm:gap-7 gap-4 ">
		{#each productsSushi as product}
			<div
				class=" relative z-0 bg-[#232323] border-[#333333] border flex  sm:flex-col justify-between  rounded-xl "
			>
				<div class="w-44 h-full rounded-lg">
					<img class="object-cover rounded-xl h-full w-full p-2" src="sushi.webp" alt="" />
				</div>
				<div class="p-2 ">
					<a class=" font-medium" href="/">{product.name}</a>
					<p class="text-xs text-gray-400 pr-14">Описание товара, суши роллы</p>
					<div class="flex items-center justify-between">
						<p class=" text-white text-lg">1990 ₽</p>
						<button
							on:click={() => addToCart(product)}
							class=" text-sm bg-[#e5383b] px-4 py-2 rounded-lg">Добавить</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

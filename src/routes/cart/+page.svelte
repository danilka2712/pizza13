<script>
	import { cart } from '../../cart.js';
</script>

<div class="my-24 mb-44 container px-4">
	<p>Корзина</p>
	<div class=" grid grid-cols-1 lg:grid-cols-5 sm:gap-7 gap-4 mt-5">
		{#each $cart as product}
			<div
				class=" relative z-0 bg-[#232323] border-[#333333] border flex  sm:flex-col justify-between  rounded-xl "
			>
				<div class="w-44 h-full rounded-lg">
					<img class="object-cover rounded-xl h-full w-full p-2" src={product.img} alt="" />
				</div>
				<div class="p-2 ">
					<a class=" font-medium" href="/">{product.name}</a>
					<p class="text-xs text-gray-400 pr-14">Описание товара, суши роллы</p>
					<div class="flex items-center mt-5 justify-between">
						<p class=" text-white text-lg">1990 ₽</p>
						<button class="flex gap-4 items-center"
							><span class="bg-[#333333] p-1.5 px-3 rounded-full">-</span>{product.quantity}<span
								class="bg-[#333333] p-1.5 px-3 rounded-full">+</span
							></button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class=" fixed bottom-24 w-full right-0 px-4">
		<button class="text-sm bg-[#e5383b] w-full py-4 rounded-lg">Оформить заказ</button>
	</div>
</div>

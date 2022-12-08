<script>
	import { onMount } from 'svelte';
	import carModel from './carModel.json';

	function filterItems(arr, query) {
		return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
	}
	function car() {
		return carModel.map((car) => car.brand);
	}
	let text = '';
	$: item = filterItems(car(), text);
</script>

{text}
<div class="px-5">
	<div>
		<h1 class=" font-bold text-xl my-4 mb-7">Заказать Эвакуатор</h1>
	</div>

	<div class="flex mb-6  flex-col">
		<span class="text-[#8e8e8e] mb-3 text-sm">Контактные данные</span>
		<input
			placeholder="Ваше имя"
			class="p-4 mb-3 border-[#e8e8e8]/75 border py-4 rounded-2xl"
			type="text"
			name=""
			id=""
		/>
		<input
			placeholder="Номер телефона"
			class="p-4 border-[#e8e8e8]/75 border py-4 rounded-2xl"
			type="text"
			name=""
			id=""
		/>
	</div>
	<div class="grid grid-cols-2 gap-3 mb-6">
		<div class="flex flex-col">
			<span class="text-[#8e8e8e] mb-3 text-sm">Откуда</span>
			<input
				placeholder="Омск, ул.Мира"
				class=" border-[#e8e8e8]/75 w-[100%] border p-4 rounded-2xl"
				type="text"
				name=""
				id=""
			/>
		</div>
		<div class="flex flex-col">
			<span class="text-[#8e8e8e] mb-3  text-sm">Куда</span>
			<input
				placeholder="Омск, ул.Лукашевича"
				class=" border-[#e8e8e8]/75 w-[100%] p-4  border rounded-2xl"
				type="text"
				name=""
				id=""
			/>
		</div>
	</div>
	<div class="flex mb-10 flex-col">
		<span class="text-[#8e8e8e] mb-3  text-sm">Марка авто</span>
		<select class="p-4 border-[#e8e8e8]/75 border py-4 rounded-2xl" name="" id="">
			{#each item as i}
				<option value="">{i}</option>
			{/each}
		</select>
	</div>
	<div class="px-5 ">
		<button
			class=" bg-[#5BC43A] p-3 rounded-2xl w-[90%] py-4 fixed bottom-28 mx-5 left-0 right-0 font-semibold text-white"
			>Оставить заявку</button
		>
	</div>
</div>

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
			class="p-4 mb-3 border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none border py-4 rounded-2xl"
			type="text"
			name=""
			id=""
		/>
		<input
			placeholder="Номер телефона"
			class="p-4 border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none border py-4 rounded-2xl"
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
				class=" border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none w-[100%] border p-4 rounded-2xl"
				type="text"
				name=""
				id=""
			/>
		</div>
		<div class="flex flex-col">
			<span class="text-[#8e8e8e] mb-3  text-sm">Куда</span>
			<input
				placeholder="Омск, ул.Лукашевича"
				class=" border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none w-[100%] p-4  border rounded-2xl"
				type="text"
				name=""
				id=""
			/>
		</div>
	</div>
	<div class="flex flex-col justify-center">
		<span class="text-[#8e8e8e] mb-3  text-sm">Марка автомобиля</span>

		<div class="mb-3 w-full">
			<select
				class="form-select appearance-none
            block
            w-full
            px-4
            py-4
            text-base
            font-normal
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-[#e8e8e8]/75
            transition
            ease-in-out rounded-2xl
            m-0
            focus:text-gray-700 focus:bg-white focus:border-[#5BC43A] focus:outline-none"
				aria-label="Default select example"
			>
				<option class="" selected>Acura</option>
				{#each item as i}
					<option name="" id="">{i}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="px-5 ">
		<button
			class=" bg-[#5BC43A] p-3 rounded-2xl w-[90%] sm:w-[97%] py-4 fixed bottom-24 mx-5 left-0 right-0 font-semibold text-white"
			>Оставить заявку</button
		>
	</div>
</div>

<script lang="ts">
	import carModel from './carModel.json';

	function brands() {
		return carModel.map((car) => car.brand);
	}
	let selected = 'Бренд';

	function models(cars) {
		carModel.find(({ brand, models }) => {
			if (brand === cars) {
				model = models;
			}
			return;
		});
	}
	let model = [];
</script>

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
	<div class="flex flex-col">
		<span class="text-[#8e8e8e] mb-3  text-sm">Марка и модель автомобиля</span>

		<div class=" flex gap-3 ">
			<select
				bind:value={selected}
				on:change={() => models(selected)}
				class="form-select appearance-none
            block
            w-1/2
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
				<option selected>Бренд</option>

				{#each brands() as question}
					<option value={question}>
						{question}
					</option>
				{/each}
			</select>
			<select
				class="form-select  appearance-none
            block
            w-1/2
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
				<option selected>Модель</option>

				{#each model as m}
					<option value={m}>
						{m}
					</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="mt-3 border-t-2 border-dotted">
		<div class="flex items-center justify-between">
			<span class="my-4 text-[#8e8e8e] text">Стоимость:</span>
			<p class=" text-xl font-semibold font-sans">1990₽</p>
		</div>
		<a href="/order/hello-world">
			<button class=" bg-[#5BC43A] p-3 mt-2 rounded-2xl w-full box  py-4   font-semibold text-white"
				>Оставить заявку</button
			>
		</a>
	</div>
</div>

<style>
	@media all and (display-mode: standalone) {
		.box {
			position: fixed;
			left: 20px;
			bottom: 100px;
			margin: 0;
			width: 90%;
		}
	}
</style>

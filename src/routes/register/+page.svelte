<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="px-5 justify-center h-[32rem] flex flex-col">
	<div>
		<h1 class=" font-bold text-xl my-4 mb-7">Регистрация</h1>
	</div>

	<form action="?/register" method="POST">
		<div class="flex mb-6  flex-col">
			<span class="text-[#8e8e8e] mb-3 text-sm">Ваше имя</span>
			<input
				placeholder="Введите имя"
				class="p-4 mb-3 border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none border py-4 rounded-2xl"
				type="text"
				name="username"
				id="username"
			/>
			<span class="text-[#8e8e8e] mb-3 text-sm">Пароль</span>

			<input
				placeholder="Придумайте пароль"
				class="p-4 border-[#e8e8e8]/75 focus:border-[#5BC43A]  focus:outline-none border py-4 rounded-2xl"
				type="text"
				name="password"
				id="password"
			/>
		</div>

		{#if form?.user}
			<p class="error">Username is taken.</p>
		{/if}

		<button
			class=" bg-[#5BC43A] p-3 rounded-2xl w-full  py-4  font-semibold text-white"
			>Регистрация</button
		>
	</form>
</div>

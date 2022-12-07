<script>
	import { page } from '$app/stores';
	import '../app.css';
	let add = 'Главная'
</script>

<nav class=" px-5 py-4 flex justify-between items-center">
	<h1 class=" font-bold text-xl">Мой район</h1>
	<img class="w-4 rounded-full" src="gps.svg" alt="" />
</nav>

<nav class="box  fixed z-10  w-full bg-[#F3F3F4] border border-b  px-10 py-5 pb-7 bottom-0">
	<a on:click={() => add = 'Главная'}
		class:active={add === "Главная"}
		class=" text-xs text-[#0B0B0B] opacity-30 font-medium  gap-1 flex flex-col justify-center items-center"
		href="/"><img width="22" src="home.svg" alt="" />Главная</a
	>
	<a on:click={() => add = 'Заказы'}
		class:active={add === "Заказы"}
		class=" text-xs text-[#0B0B0B] opacity-30 font-medium  gap-1 flex flex-col justify-center items-center"
		href="/cart"><img width="18" src="zakaz.svg" alt="" />Заказы</a
	>
	<a on:click={() => add = 'Инфо'}
		class:active={add === "Инфо"}
		class=" text-xs text-[#0B0B0B] opacity-30 font-medium  gap-1 flex flex-col justify-center items-center"
		href="/"><img width="22" src="info.svg" alt="" />Инфо</a
	>
	<a on:click={() => add = 'Кабинет'}
		class:active={add === "Кабинет"}
		class=" text-xs text-[#0B0B0B] opacity-30 font-medium gap-1 flex flex-col justify-center items-center"
		href="/dashboard"
		><img width="22" src="user.svg" alt="" />

		Кабинет
	</a>
</nav>

<slot />

<style>
	.box {
		display: none;
	}
	.active {
		opacity: 100%;
	}
	@media all and (display-mode: standalone) {
		.box {
			display: flex;
			justify-content: space-between;

			margin: 0;
			color: rgb(197, 41, 41);
		}
	}
</style>

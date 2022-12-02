<script>
	import { onMount } from 'svelte';
	import '../app.css';
</script>

<div class="fixed w-full top-0 z-10  pb-5 ">
	<div class="border-b  bg-[#1b1b1b] px-3 border-[#333333]">
		<section class="">
			<!-- navbar -->
			<nav class="flex justify-between">
				<div class="container mx-auto py-5 flex  justify-between items-center">
					<div>
						<a class="text-2xl font-heading" href="#">SuperFood</a>
					</div>

					<div class="hidden xl:flex space-x-12 items-center">
						<a class="" href="/login">Войти</a>
						<a class="flex items-center bg-white/10 p-3 rounded-xl hover:text-gray-200" href="#">
							<img src="shopping bag.svg" alt="" />
						</a>
						<!-- Sign In / Register      -->
					</div>
				</div>
				<!-- Responsive navbar -->
				
				<a class="navbar-burger self-center xl:hidden" href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 hover:text-gray-200"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</a>
			</nav>
		</section>
	</div>
</div>
<nav class="box  fixed z-10  w-full bg-[#1b1b1b]  px-10 py-5 pb-7 bottom-0">
	<a class=" text-xs text-[#f9f9f9] gap-1 flex flex-col justify-center items-center" href="/"
		><img width="22" src="home-2.svg" alt="" />Главная</a
	>
	<a class=" text-xs text-[#f9f9f9] gap-1 flex flex-col justify-center items-center" href="/cart"
		><img width="22" src="shopping-bag.svg" alt="" />Корзина</a
	>
	<a class=" text-xs text-[#f9f9f9] gap-1 flex flex-col justify-center items-center" href="/"
		><img width="22" src="gps.svg" alt="" />Заказы</a
	>
	<a class=" text-xs text-[#f9f9f9] gap-1 flex flex-col justify-center items-center" href="/"
		><img width="16" src="frame.svg" alt="" />Кабинет</a
	>
</nav>

<slot />

<style>
	.box {
		display: none;
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

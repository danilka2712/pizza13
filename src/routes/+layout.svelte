<script>
	import { page } from '$app/stores';
	import '../app.css';
	let add = 'Главная';
</script>

<nav class=" px-5 py-6 flex justify-between items-center">
	<img class=" w-32" src="logo.svg" alt="" />
	<img class="w-4 rounded-full" src="user.png" alt="" />
</nav>

<a class="fixed box bottom-5 left-5 bg-[#F3F3F4] border rounded-xl p-3 w-12 h-12 z-10" href="/"> <img class="" src="home.svg" alt="" /></a>

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

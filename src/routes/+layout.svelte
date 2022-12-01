<script>
    import "../app.css";
  </script>
  
<div class="fixed w-full top-0  pb-5 ">
	<div class="border-b  bg-[#1b1b1b] px-3 border-[#333333]">
		<section class="">
			<!-- navbar -->
			<nav class="flex justify-between">
				<div class="container mx-auto py-3 flex  justify-between items-center">
					<div>
						<a class="text-3xl font-semibold font-heading" href="#">
							ЕДАДИЛ
						</a>
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
				<a class="xl:hidden flex mr-6 items-center" href="#">
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
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
					<span class="flex absolute -mt-5 ml-4">
						<span
							class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"
						/>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
					</span>
				</a>
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
<div class="h-14 sm:hidden container mx-auto px-4 flex justify-between px-12  rounded-t-xl fixed w-full bottom-0 bg-[#1b1b1b]">
    <a class="flex mt-3" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444l-7 5.444V19h14z"/></svg></a>
    <a class="flex mt-3" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444l-7 5.444V19h14z"/></svg></a>
    <a class="flex mt-3" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444l-7 5.444V19h14z"/></svg></a>

</div>

  <slot />
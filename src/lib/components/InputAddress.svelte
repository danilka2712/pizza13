<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	onMount(() => {
		mapboxsearch.autofill({
			accessToken:
				'pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA',
			options: { country: 'RU', language: 'ru' }
		});
	});
</script>

<svelte:head>
	<script
		id="search-js"
		defer=""
		src="https://api.mapbox.com/search-js/v1.0.0-beta.14/web.js"
	></script>
</svelte:head>
<div class="grid grid-cols-1 gap-3 mb-6">
	<div class="flex flex-col">
		<span class="text-[#8e8e8e] mb-3 text-sm">Укажите маршрут</span>
		<div class=" relative">
			<span class="  font-medium absolute  p-4 rounded-l-xl   h-full ">Откуда</span>
			<input
				autocomplete="street-address"
				placeholder="Омск, ул.Мира"
				class=" border-[#e8e8e8]/75 font-sans focus:border-[#5BC43A] pl-24 focus:outline-none w-[100%] border p-4 rounded-2xl"
				type="text"
				name=""
				id=""
			/>
		</div>
	</div>
	<div class="flex flex-col">
		<div class=" relative">
			<span class=" font-medium  absolute  p-4 rounded-l-xl   h-full  ">Куда</span>
			<form>
				<mapbox-address-autofill
					access-token="pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA"
				>
					<input
						autocomplete="street-address1"
						placeholder="Омск, ул.Лукашевича"
						class=" border-[#e8e8e8]/75 font-sans focus:border-[#5BC43A] pl-24 focus:outline-none w-[100%] border p-4 rounded-2xl"
						type="text"
						name=""
						id=""
					/>
				</mapbox-address-autofill>
			</form>
		</div>
	</div>
</div>

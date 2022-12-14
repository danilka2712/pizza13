<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	mapboxgl.accessToken =
		'pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA';
	function updateSet() {
		ofButton += 1;
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: [73.28537735766437, 55.00392640477281],
			minZoom: 8,
			zoom: 12
		});
		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				// When active the map will receive updates to the device's location as it changes.
				trackUserLocation: true,
				// Draw an arrow next to the location dot to indicate which direction the device is heading.
				showUserHeading: true
			})
		);

		let marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
		map.on('move', function (e) {
			let coord = marker.setLngLat(map.getCenter());
			coordinat = coord.getLngLat();
			console.log();
		});
	}
	let coordinat;
	let coordinat1;

	function addCoordinat() {
		ofButton += 1;
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: coordinat,
			minZoom: 8,
			zoom: 12
		});
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinat.toArray()}.json?types=address%2Cpoi%2Cdistrict%2Cneighborhood&limit=1&access_token=pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA`
		)
			.then((data) => data.json())
			.then((coordin) => console.log(coordin.features[0]));

		new mapboxgl.Marker().setLngLat(coordinat).addTo(map);
		let marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
		map.on('move', function (e) {
			let coord = marker.setLngLat(map.getCenter());
			coordinat1 = coord.getLngLat();
		});
	}
	function addCoordinat2() {
		ofButton = 1;
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: coordinat,
			minZoom: 8,
			zoom: 12
		});

		fetch(
			`https://api.mapbox.com/directions/v5/mapbox/driving/${coordinat.toArray()};${coordinat1.toArray()}?access_token=pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA`
		)
			.then((data) => data.json())
			.then((coss) => (distance = coss.routes[0].distance));

		new mapboxgl.Marker({
			draggable: true
		})
			.setLngLat(coordinat)
			.addTo(map);

		const marker = new mapboxgl.Marker({
			draggable: true
		})
			.setLngLat(coordinat1)
			.addTo(map);

		const coordinates = document.getElementById('coordinates');
		function onDragEnd() {
			const lngLat = marker.getLngLat();
		}

		marker.on('dragend', onDragEnd);
	}
	let ofButton = 1;
	let distance;
</script>

<svelte:head>
	<script
		src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"
	></script>
	<link
		rel="stylesheet"
		href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"
		type="text/css"
	/>
</svelte:head>
<div id="map" class=" relative h-screen top-0 z-0 ">
	<div class="z-10 absolute">
		<h1 class=" text-2xl">
			{(distance / 1000).toFixed(2)}.км
		</h1>
		<h1 class=" text-2xl">{Number((distance / 1000).toFixed(2)) > 10 ? '3200' : '2200'} рублей</h1>

		{#if ofButton === 1}
			<button class=" absolute z-10" on:click={() => updateSet()}>Карта</button>
		{:else if ofButton === 2}
			<button
				on:click={() => addCoordinat()}
				class=" bg-[#5BC43A] fixed bottom-10 z-10 p-3 rounded-2xl w-[95%] right-3  py-4   font-semibold text-white"
				>Первая точка</button
			>
		{:else if ofButton === 3}
			<button
				on:click={() => addCoordinat2()}
				class=" bg-[#5BC43A] fixed bottom-10 z-10 p-3 rounded-2xl w-[95%] right-3  py-4   font-semibold text-white"
				>Вторая точка</button
			>
		{/if}
	</div>
</div>

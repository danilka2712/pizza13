<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	mapboxgl.accessToken =
		'pk.eyJ1IjoiZGFuaWxrYTI3MTIiLCJhIjoiY2xiamFndWc2MDJoazNwcXZnaXZoNm9hYSJ9.lAMLaj7C67amMgE1yWU_WA';
	function updateSet() {
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: [73.28537735766437, 55.00392640477281],
			minZoom: 8,
			zoom: 12
		});
		let marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
		map.on('move', function (e) {
			let coord = marker.setLngLat(map.getCenter());
			coordinat = coord.getLngLat();
		});
	}
	let coordinat;
	let coordinat1;

	function addCoordinat() {
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: coordinat,
			minZoom: 8,
			zoom: 12
		});
		new mapboxgl.Marker().setLngLat(coordinat).addTo(map);
		let marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);
		map.on('move', function (e) {
			let coord = marker.setLngLat(map.getCenter());
			coordinat1 = coord.getLngLat();
		});
	}
	function addCoordinat2() {
		const map = new mapboxgl.Map({
			container: 'map',
			// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7',
			center: coordinat,
			minZoom: 8,
			zoom: 12
		});
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
</script>

<pre id="coordinates" class="coordinates" />
<button on:click={() => addCoordinat2()}>Вторая точка</button>
<button on:click={() => addCoordinat()}>Первая точка</button>
<button on:click={() => updateSet()}>Карта</button>

<div id="map" class=" w-full h-screen" />

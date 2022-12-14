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
<h1>
	{distance / 1000}.км
</h1>
<pre id="coordinates" class="coordinates" />
<button on:click={() => addCoordinat2()}>Вторая точка</button>
<button on:click={() => addCoordinat()}>Первая точка</button>
<button on:click={() => updateSet()}>Карта</button>

<div id="map" class=" w-full h-screen" />

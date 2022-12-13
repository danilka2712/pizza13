<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
	let mapRef: HTMLElement | undefined = undefined;
	let map: maplibregl.Map | undefined = undefined;
	let directions: MapLibreGlDirections | undefined = undefined;
	let interactive = true;
	let refreshOnMove = false;
	function changeRefreshOnMove() {
		if (directions) directions.destroy();
		directions = new MapLibreGlDirections(map, {
			requestOptions: {
				alternatives: 'true'
			},
			refreshOnMove: !refreshOnMove
		});
	}
	onMount(() => {
		const map = new maplibregl.Map({
			container: 'map', // container id
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7', // style URL
			center: [73.37081369020865, 54.99035944909227], // starting position [lng, lat]
			zoom: 12 // starting zoom
		});

		map.on('load', () => {
			directions = new MapLibreGlDirections(map, {
				requestOptions: {
					alternatives: 'true'
				}
			});
		});
	});
	$: if (directions) {
		directions.interactive = interactive;
	}
</script>




<div bind:this={mapRef} class="basis-full lg:basis-2/3 shadow-xl" />

<div id="map" class="w-full h-screen" />

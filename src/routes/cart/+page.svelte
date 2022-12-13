<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import DistanceMeasurementMapLibreGlDirections, {
		config
	} from '$lib/map/distance-measurement-directions';
	let directions: DistanceMeasurementMapLibreGlDirections | undefined = undefined;
	let totalDistance = 0;
	onMount(() => {
		const map = new maplibregl.Map({
			container: 'map', // container id
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7', // style URL
			center: [73.37081369020865, 54.99035944909227], // starting position [lng, lat]
			zoom: 12 // starting zoom
		});
		map.on('load', () => {
			directions = new DistanceMeasurementMapLibreGlDirections(map, config);
			directions.on('fetchroutesend', (ev) => {
				totalDistance = ev.data?.routes[0].distance as number;
			});
			directions.on('removewaypoint', () => {
				if (directions.waypoints.length < 2) {
					totalDistance = 0;
				}
			});
			directions.interactive = true;
		});
	});
</script>

<div id="map" class="w-full h-screen" />

<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';

	onMount(() => {
		const map = new maplibregl.Map({
			container: 'map', // container id
			style: 'https://api.maptiler.com/maps/voyager-v2/style.json?key=EfH47Bb8jzv9Pl57bst7', // style URL
			center: [73.37081369020865, 54.99035944909227], // starting position [lng, lat]
			zoom: 12 // starting zoom
		});
	});
</script>

<div id="map" class="w-full h-screen" />

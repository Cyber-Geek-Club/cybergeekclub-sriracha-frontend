<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="grid min-h-screen grid-rows-[100px_1fr_100px]">
	<Navbar />
	{@render children()}
	<!-- <div class="bg-green-500"></div> -->
</div>

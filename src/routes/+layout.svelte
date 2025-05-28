<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="grid min-h-screen grid-rows-[140px_1fr_1fr] ">
	<Navbar />
	{@render children()}
	<footer class="flex items-center justify-center bg-primary text-white ">
		<p>&copy; 2023 CyberGeekClub. All rights reserved.</p>
	</footer>
	

</div>

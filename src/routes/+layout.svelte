<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import dayjs from 'dayjs';
	/**
	 * current year for copyright
	 */
	const year = 2025;

	let { children } = $props();
</script>

<div
	class="grid max-h-screen min-h-screen snap-y snap-mandatory grid-rows-[140px_1fr] overflow-y-scroll"
>
	<Navbar />
	{@render children()}
	<footer class="bg-primary flex items-center justify-center p-15 text-white">
		<p>
			&copy; {year !== dayjs().year() ? `${year}-${dayjs().year()}` : year} CyberGeekClub. All rights
			reserved.
		</p>
	</footer>
</div>

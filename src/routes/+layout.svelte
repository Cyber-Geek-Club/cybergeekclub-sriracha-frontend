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
	class="max-h-screen min-h-screen snap-y snap-mandatory overflow-y-scroll md:grid md:grid-rows-[140px_1fr]"
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

<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.nav-item', {
			duration: 1,
			opacity: 0,
			y: -100,
			stagger: 0.2
		});
		gsap.from('.nav-item1', {
			duration: 1,
			opacity: 0,
			y: -100,
			stagger: 0.2
		});
	});
</script>

<nav class="mx-5 flex items-center justify-between text-2xl">
	<h1 class="nav-item">CyberGeekClub</h1>
	<ul class="flex space-x-4">
		<li class="nav-item1"><a href="/">Home</a></li>
		<li class="nav-item1"><a href="/about">About</a></li>
		<li class="nav-item1"><a href="/contact">Contact</a></li>
	</ul>
</nav>

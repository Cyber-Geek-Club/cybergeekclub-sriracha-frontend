<script lang="ts">
	import logo from '../lib/asset/LOGO_CGC WHITE@5000x.png';
	import { Sparkle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { setupHomeHoverAnimation } from '$lib/animations/HomeAnimation';

	onMount(() => {
		setupHomeHoverAnimation().play();
	});
</script>

<div class="relative flex min-h-screen flex-col font-sans">
	<div class=" flex flex-1 flex-col items-center justify-center overflow-hidden px-4 text-center">
		<!-- <button class="mb-4 rounded-full bg-white/10 px-4 py-1 text-xs transition hover:bg-white/20">
			Lorem ipsum dolor sit amet →
		</button> -->
		<img src={logo} alt="Logo" class="big-logo mb-10 h-16 w-16 scale-600 rounded-full shadow-lg" />
		<div
			class="absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden"
		>
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="star absolute h-16 w-16">
				<defs>
					<linearGradient id="sparkleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
						<stop offset="0%" stop-color="#38FF7E" />
						<stop offset="100%" stop-color="#72AA86" />
					</linearGradient>
					<mask id="sparkle-mask">
						<Sparkle class="h-full w-full fill-white stroke-white" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#sparkleGrad)" mask="url(#sparkle-mask)" />
			</svg>
		</div>
		<h1 class=" fade-in text-3xl leading-tight font-bold md:text-4xl">
			CyberGeekClub at
			<span
				class="gradient-text to-text inline-block bg-gradient-to-tr from-[#38FF7E] from-10% via-[#72AA86] via-50% to-50% bg-clip-text text-transparent"
			>
				KUSRC
			</span>
		</h1>
		<p class="fade-in text-text/70 mt-4 text-sm">" NOTHING WILL WORK UNLESS YOU DO "</p>
	</div>
	<div
		class="light pointer-events-none absolute bottom-[50%] left-[25%] h-70 w-[50%] bg-radial-[at_50%_75%] from-[#F1FFF6] to-transparent opacity-5 blur-3xl"
	></div>
	<div
		class="light pointer-events-none absolute bottom-11 left-[5%] h-70 w-[90%] bg-radial-[at_50%_75%] from-[#38FF7E] to-transparent opacity-50 blur-3xl"
	></div>
	<div
		class="light pointer-events-none absolute bottom-11 h-10 w-full bg-gradient-to-t from-[#F1FFF6] to-transparent opacity-50 blur-3xl"
	></div>
	<div
		class="light from-[#F1FFF6]] pointer-events-none absolute bottom-11 h-10 w-full bg-radial-[at_50%_75%] to-transparent"
	></div>
	<div
		class="light pointer-events-none absolute bottom-11 h-10 w-full bg-gradient-to-t from-[#F1FFF6] to-transparent opacity-50 blur-3xl"
	></div>
	<div
		class="light pointer-events-none absolute bottom-11 h-10 w-full bg-[#38FF7E] to-transparent blur-2xl"
	></div>
	<div
		class="light pointer-events-none absolute bottom-11 left-[5%] h-70 w-[90%] bg-radial-[at_50%_75%] from-[#38FF7E] to-transparent opacity-50 blur-3xl"
	></div>
</div>
<div class="min-h-screen"></div>

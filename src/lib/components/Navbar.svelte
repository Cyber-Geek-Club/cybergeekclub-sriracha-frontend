<script lang="ts">
	import { setupNavbarAnimation, addMouseFollowAnimation } from '$lib/animations/Navbar';
	import { setupBasicHoverAnimation } from '../animations/basicHover';
	import { onMount } from 'svelte';
	import GradientBg from './gradientBG.svelte';

	onMount(() => {
		setupNavbarAnimation().play();
		setupBasicHoverAnimation().play();
		addMouseFollowAnimation();
	});
</script>

<nav id="navbar" class="my-5 flex w-full justify-center">
	<div class="flex h-[100px] w-4/5 items-center justify-around rounded-2xl border border-[#182D1F]">
		<h1 class="gsap-hover logo follow-cursor follow-area cursor-default">CyberGeekClub</h1>
		<div class="animate-bg flex rounded-xl border border-[#223027] bg-[#0E1B13] p-1">
			<GradientBg>
				<ul class="mx-4 flex space-x-4">
					<li class="nav-item1 gsap-hover"><a href="/">Home</a></li>
					<li class="nav-item2 gsap-hover"><a href="/about">About</a></li>
					<li class="nav-item3 gsap-hover"><a href="/contact">Contact</a></li>
				</ul>
			</GradientBg>
		</div>
		<GradientBg>
			<ul class="mx-4 flex">
				<li class="nav-item4 gsap-hover"><a href="/register">Register</a></li>
			</ul>
		</GradientBg>
	</div>
</nav>

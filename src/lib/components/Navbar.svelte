<script lang="ts">
	import { setupNavbarAnimation } from '$lib/animations/Navbar';
	import { setupBasicClickAnimationWithHover } from '../animations/BasicAnimations';
	import { onMount } from 'svelte';
	import GradientBg from './gradientBG.svelte';
	import logo from '../asset/LOGO_CGC WHITE@5000x.png';
	onMount(() => {
		setupBasicClickAnimationWithHover();
		setupNavbarAnimation().play();
	});
</script>

<nav id="navbar" class="my-5 flex w-full justify-center sticky top-5 z-50 ">
	<div class="flex h-[100px] w-4/5 items-center justify-around rounded-3xl border border-[#182D1F] bg-primary">
		<img class="basic-hover logo follow-cursor follow-area cursor-default" src={logo} alt="Logo" width="130" height="130" />
		<div class="animate-bg flex rounded-3xl border border-[#223027] bg-[#0E1B13] p-2">
			<GradientBg>
				<ul class="mx-4 flex space-x-4">
					<li class="nav-item1 basic-click-hover">
						<a href="/">Home</a>
					</li>
					<li class="nav-item2 basic-click-hover">
						<a href="/about">About</a>
					</li>
					<li class="nav-item3 basic-click-hover"><a href="/contact">Contact</a></li>
				</ul>
			</GradientBg>
		</div>
		<GradientBg>
			<ul class="mx-4 flex">
				<li class="nav-item4 basic-click-hover"><a href="/register">Register</a></li>
			</ul>
		</GradientBg>
	</div>
</nav>

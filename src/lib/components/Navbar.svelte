<script lang="ts">
	import {
		setupNavbarAnimation,
		mobileNavbarAnimation,
		isMobileByWidth
	} from '$lib/animations/Navbar';
	import { setupBasicClickAnimationWithHover } from '../animations/BasicAnimations';
	import { onMount } from 'svelte';
	import GradientBg from './gradientBG.svelte';
	import logo from '../asset/LOGO_CGC WHITE@5000x.png';
	import { Menu } from 'lucide-svelte';
	let isLoading = $state(true);
	onMount(() => {
		setupBasicClickAnimationWithHover();
		mobileNavbarAnimation();
	});
</script>

<nav
	id="navbar"
	class="absolute z-50 flex hidden w-full md:sticky md:top-5 md:my-5 md:justify-center"
>
	<div
		class="bg-primary/85 relative flex h-[calc(100vh)] w-[calc(100vw-40px)] flex-col items-center justify-around border border-[#182D1F] md:h-[100px] md:flex-row md:rounded-3xl"
	>
		<img
			class="basic-hover logo follow-cursor follow-area cursor-default"
			src={logo}
			alt="Logo"
			width="130"
			height="130"
		/>
		<div class="menu-icon-close md:hidden">
			<Menu class=" absolute top-5 right-5 h-10 w-10 " />
		</div>
		<div class="menu-icon-open z-50 md:hidden">
			<Menu class=" absolute top-5 -right-28 h-10 w-10 " />
		</div>
		<div
			class="animate-bg mb-28 flex h-1/2 w-full rounded-3xl p-2 md:mb-0 md:h-fit md:w-fit md:border md:border-[#223027] md:bg-[#0E1B13]"
		>
			<GradientBg>
				<ul
					class="mx-4 flex h-[calc((100vh-40px)/2)] w-[calc(100vw-112px)] flex-col justify-center gap-5 md:h-fit md:w-fit md:flex-row"
				>
					<li class="nav-item1 basic-click-hover text-center">
						<a href="/">Home</a>
					</li>
					<li class="nav-item2 basic-click-hover text-center">
						<a href="/about">About</a>
					</li>
					<li class="nav-item3 basic-click-hover text-center">
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</GradientBg>
		</div>
		<div class="mb-20 flex items-center space-x-4 md:mb-0">
			<ul class="mx-4 flex">
				<li class="nav-item4 basic-click-hover"><a href="/signin">Sign In</a></li>
			</ul>
			<GradientBg>
				<ul class="mx-4 flex">
					<li class="nav-item4 basic-click-hover"><a href="/signup">Sign Up</a></li>
				</ul>
			</GradientBg>
		</div>
	</div>
</nav>

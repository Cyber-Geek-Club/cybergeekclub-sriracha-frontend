import { gsap } from 'gsap';
import { onMount } from 'svelte';

export function setupNavbarAnimation() {
	const tl = gsap.timeline({ paused: true });
	addMouseFollowAnimation();

	tl.from('#navbar', {
		duration: 1,
		opacity: 0,
		y: -100,
		ease: 'back.out(2)'
	});
	tl.fromTo(
		'.animate-bg',
		{
			duration: 0.5,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1
		}
	);
	tl.fromTo(
		'.nav-item1',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		}
	);
	tl.fromTo(
		'.nav-item2',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=0.4'
	);
	tl.fromTo(
		'.nav-item3',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=0.7'
	);
	tl.fromTo(
		['.nav-item4', '.logo'],
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=1'
	);

	return tl;
}

export function addMouseFollowAnimation() {
	const cursor = document.querySelector('.follow-cursor') as HTMLElement;
	const container = document.querySelector('.follow-area') as HTMLElement;
	if (!cursor || !container) return;

	const handleMouseMove = (e: MouseEvent) => {
		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

		gsap.to(cursor, {
			duration: 0.3,
			x: Math.max(-10, Math.min(10, (x - container.clientWidth / 2) * 0.1)),
			y: Math.max(-10, Math.min(10, (y - container.clientHeight / 2) * 0.1)),
			ease: 'power2.out'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(cursor, {
			duration: 0.5,
			x: 0,
			y: 0,
			ease: 'power2.out'
		});
	};

	container.addEventListener('mousemove', handleMouseMove);
	container.addEventListener('mouseleave', handleMouseLeave);
}

export function mobileNavbarAnimation() {
	const menuIconClose = document.querySelector('.menu-icon-close') as HTMLElement;
	const menuIconOpen = document.querySelector('.menu-icon-open') as HTMLElement;
	const navbar = document.querySelector('#navbar') as HTMLElement;

	if (!menuIconClose || !menuIconOpen || !navbar) return;

	window.addEventListener('resize', () => {
		if (isMobileByWidth()) {
			gsap.set('#navbar', {
				x: '-100vw',
				overflow: 'visible'
			});
		} else {
			gsap.set('#navbar', {
				x: 0,
				overflow: 'hidden'
			});
		}
	});

	onMount(() => {
		navbar.classList.remove('hidden');
		if (isMobileByWidth()) {
			gsap.set('#navbar', {
				x: '-100vw',
				overflow: 'visible'
			});
			console.log('Mobile navbar animation initialized');
		} else {
			gsap.set('#navbar', {
				x: 0,
				overflow: 'hidden'
			});
			setupNavbarAnimation().play();
		}
	});

	menuIconOpen.addEventListener('click', () => {
		gsap.to('#navbar', {
			duration: 0.5,
			x: 0,
			ease: 'power2.inOut',
			onStart: () => {
				navbar.style.overflow = 'hidden';
			}
		});
	});
	menuIconClose.addEventListener('click', () => {
		gsap.to('#navbar', {
			duration: 0.5,
			x: '-100vw',
			ease: 'power2.inOut',
			onComplete: () => {
				navbar.style.overflow = 'visible';
			}
		});
	});
}

export function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function isMobileByWidth() {
	return window.innerWidth < 768;
}
